const db = require('../connection_db');

// query DB product for counting
function productCountDB(parameter) {
  let prodcutSQL;
  let parameterCheck;
  // 判斷進來的 catagory
  if (parameter === "all") {
    prodcutSQL = 'SELECT * FROM products;';
    parameterCheck = [];
  } else {
    prodcutSQL = 'SELECT * FROM products WHERE category = ?;';
    parameterCheck = [parameter];
  }

  var data = [];
  const productsCountPromise = new Promise((resolve, reject) => {
    db.query(prodcutSQL, parameterCheck, (err, products) => {
      if (err) {
        console.log(err);
        return;
      }
      for (var i in products) {
        data.push({
          id: products[i].id
        });
      }
      resolve(data);
    });
  });
  return productsCountPromise;
}

// searchCount
function searchCountDB(parameter) {

  // 判斷進來的 catagory
  // if (parameter === "all") {
  //   prodcutSQL = 'SELECT * FROM products;';
  //   parameterheck = [];
  // } else {
  //   prodcutSQL = 'SELECT * FROM products WHERE category = ?;';
  //   parameterCheck = [parameter];
  // }
  let searchSQL = `SELECT * FROM products WHERE title LIKE '%${parameter}%';`

  var data = [];
  const searchCountPromise = new Promise((resolve, reject) => {
    db.query(searchSQL, parameter, (err, products) => {
      if (err) {
        console.log(err);
        return;
      }
      for (var i in products) {
        data.push({
          id: products[i].id
        });
      }
      resolve(data);
    });
  });
  return searchCountPromise;
}

module.exports = {
  productCountDB,
  searchCountDB
}
