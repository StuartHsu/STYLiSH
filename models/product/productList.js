const db = require('../connection_db');

// 主產品內容 by category
function productsDB(category, limit, offset) {
  let prodcutSQL;
  let categoryCheck;
  // 判斷進來的 catagory
  if (category === "all") {
    prodcutSQL = 'SELECT * FROM products LIMIT ? OFFSET ?;';
    categoryCheck = [limit, offset];
  } else {
    prodcutSQL = 'SELECT * FROM products WHERE category = ? LIMIT ? OFFSET ?;';
    categoryCheck = [category, limit, offset];
  }

  var data = [];
  const productsPromise = new Promise((resolve, reject) => {
    db.query(prodcutSQL, categoryCheck, (err, products) => {
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
  return productsPromise;
}

// 產品 variant 內容, by id 比對
function variantsDB(id) {
  let variantSQL = 'SELECT * FROM variants WHERE product_id = ?;'

  var allVariants = [];
  var idCheck = [id];
  const variantsPromise = new Promise((resolve, reject) => {
    db.query(variantSQL, idCheck, (err, variants) => {
      if (err) {
        console.log(err);
        return;
      }
      for (var i in variants) {
        allVariants.push({
          colors: {
            code: variants[i].code,
            name: variants[i].name
          },
          sizes: variants[i].size,
          variants: {
            color_code: variants[i].code,
            size: variants[i].size,
            stock: variants[i].stock
          }
        });
      }
      resolve(allVariants);
    });
  });
  return variantsPromise;
}

// // query DB product for counting
// function productCountDB(category) {
//   let prodcutSQL;
//   let categoryCheck;
//   // 判斷進來的 catagory
//   if (category === "all") {
//     prodcutSQL = 'SELECT * FROM products;';
//     categoryCheck = [];
//   } else {
//     prodcutSQL = 'SELECT * FROM products WHERE category = ?;';
//     categoryCheck = [category];
//   }
//
//   var data = [];
//   const productsCountPromise = new Promise((resolve, reject) => {
//     db.query(prodcutSQL, categoryCheck, (err, products) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       for (var i in products) {
//         data.push({
//           id: products[i].id
//         });
//       }
//       resolve(data);
//     });
//   });
//   return productsCountPromise;
// }

// module.exports = {
//   productsDB,
//   variantsDB,
//   productCountDB
// }

module.exports = {
  productsDB,
  variantsDB
}
