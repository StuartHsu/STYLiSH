const express = require('express');
const router = express.Router(); // create a router
const { variantsDB } = require('../../models/product/productList');
const { searchDetailDB } = require('../../models/product/productSearch');
const { dataStructure } = require('../../models/product/productStructure');
const redis = require('redis');

const REDIS_PORT = process.env.PORT || 6379;
const client = redis.createClient(REDIS_PORT);


// Set response
function setRespnse(name, data) {
  return JSON.parse(data);
}


// Make request from database
async function getData(req, res) {

  try {

    var searchID = parseInt(req.query.id); // get search keyword val
    if (!searchID) {
      res.json({
        error: "Wrong Request"
      });
    }

    var allSearchResult = await searchDetailDB(`${searchID}`);
    var productDetail = await dataStructure(allSearchResult);

    console.log('Fetching product details data from db...');

    var itemName = `productDetails${req.query.id}`;

    var responseData = JSON.stringify(productDetail);

    // Set data to Redis
    client.setex(itemName, 60, responseData);

    res.send( {data: setRespnse(itemName, responseData)} );

  } catch (err) {

    console.error(err);
    res.status(500);

  }

}

// Cache middleware
function cache(req, res, next) {

  var itemName = `productDetails${req.query.id}`;

  client.get(itemName, (err, detailData) => {
    if(err) throw err;

    if(detailData !== null) {
      console.log('Fetching product details data from redis...');

      res.send( {data: setRespnse(itemName, detailData)} );

    } else {

      next();

    }
  });
}


router.get('/', cache, getData);


module.exports = router;
