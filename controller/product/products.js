const express = require('express');
const router = express.Router(); // create a router
const { productsDB, variantsDB } = require('../../models/product/productList');
const { productCountDB, searchCountDB } = require('../../models/product/productCount');
const { searchDB } = require('../../models/product/productSearch');
const { dataStructure } = require('../../models/product/productStructure');


function pageJudge(current, total, resultData, res) {

  // 判斷後面還有無頁面決定是否提供 next_paging
  if ((current + 1) === total || total === 0) {

    res.json({
      data: resultData
    });

  } else if ((current + 1) > total && current != 0 ) {

    res.send("Sorry..., there are no more data in database");

  } else {

    res.json({
      next_paging: current + 1,
      data: resultData
    });

  }

}


router.get('/:category', async (req, res) => {

  const { category } = req.params;

  // paging condition setting
  var limit = 6; // 6 datas in 1 page
  var rawPaging = req.query.paging; // get value from key-value pair & trans to int.
  var currentPage = 0;

  // 正整數判斷
  var r = /^\+?[0-9][0-9]*$/;

  if (r.test(rawPaging) || !rawPaging) {
    var paging = parseInt(rawPaging);

    if (!paging || paging === 0) {
      currentPage = 0;
    } else {
      currentPage = paging;
    }

  } else {
    res.send("Please enter positive integer.");
  }

  var offset = currentPage * limit;

  switch (category) {
    case "all":
    case "women":
    case "men":
    case "accessories":

      // get all product count from db
      var countProduct = await productCountDB(`${category}`);
      // define how many pages should be presented
      totalPage = Math.ceil(countProduct.length / limit);

      var allProductsInfo = await productsDB(`${category}`, limit, offset);
      var productsDetail = await dataStructure(allProductsInfo);

      pageJudge(currentPage, totalPage, productsDetail, res);

    break;

    case "search":

      var keyword = req.query.keyword; // get search keyword val
      if (!keyword) {
        res.json({
          error: "Wrong Request"
        });
      }

      // get all product count from db
      var countSearch = await searchCountDB(`${keyword}`);
      // define how many pages should be presented
      totalPage = Math.ceil(countSearch.length / limit);

      var allSearchResult = await searchDB(`${keyword}`, limit, offset);
      var productDetail = await dataStructure(allSearchResult);

      pageJudge(currentPage, totalPage, productDetail, res);

    break;

    default:
      res.send("Sorry..., this category dosen't exist in database.");

  }

});


module.exports = router;
