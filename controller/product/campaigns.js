const express = require('express');
const router = express.Router(); // create a router
const { campaignDB } = require('../../models/product/campaignSearch');
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
    console.log('Fetching campaigns data from db...');

    var itemName = "campaigns";

    let allCampaigns = await campaignDB();

    var responseData = JSON.stringify(allCampaigns);

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

  var itemName = "campaigns";

  client.get(itemName, (err, data) => {
    if(err) throw err;

    if(data !== null) {
      console.log('Fetching campaigns data from redis...');

      res.send( {data: setRespnse(itemName, data)} );

    } else {

      next();

    }
  });
}

router.get('/', cache, getData);



module.exports = router;
