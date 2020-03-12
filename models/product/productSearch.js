const db = require('../connection_db');


function searchDB(keyword, limit, offset) {
  let searchSQL = `SELECT * FROM products WHERE title LIKE '%${keyword}%' LIMIT ? OFFSET ?;`
  var limitCheck = [limit, offset];

  var data = [];
  const searchPromise = new Promise((resolve, reject) => {
    db.query(searchSQL, limitCheck, (err, products) => {
      if (err) {
        console.log(err);
        return;
      }
      for (var i in products) {
        data.push({
          id: products[i].id,
          category: products[i].category,
          title: products[i].title,
          description: products[i].description,
          price: products[i].price,
          texture: products[i].texture,
          wash: products[i].wash,
          place: products[i].place,
          note: products[i].note,
          story: products[i].story,
          main_image: products[i].main_image,
          images: products[i].images
        });
      }
      resolve(data);
    });
  });
  return searchPromise;
}

function searchDetailDB(id) {
  let searchSQL = `SELECT * FROM products WHERE id = ?;`

  var data = [];
  const searchPromise = new Promise((resolve, reject) => {
    db.query(searchSQL, id, (err, products) => {
      if (err) {
        console.log(err);
        return;
      }
      for (var i in products) {
        data.push({
          id: products[i].id,
          category: products[i].category,
          title: products[i].title,
          description: products[i].description,
          price: products[i].price,
          texture: products[i].texture,
          wash: products[i].wash,
          place: products[i].place,
          note: products[i].note,
          story: products[i].story,
          main_image: products[i].main_image,
          images: products[i].images
        });
      }
      resolve(data);
    });
  });
  return searchPromise;
}

function findProductDB(keyword) {
  let searchSQL = `SELECT * FROM products WHERE id = ?;`
  let parameter = parseInt(keyword)

  const findPromise = new Promise((resolve, reject) => {
    db.query(searchSQL, parameter, (err, products) => {
      if (err) {
        console.log(err);
        return;
      }
      resolve(products);
    });
  });
  return findPromise;
}


module.exports = {
  searchDB,
  searchDetailDB,
  findProductDB
}
