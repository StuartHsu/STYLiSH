const express = require('express');
const bodyParser = require('body-parser');
const db = require('../../models/connection_db');
const router = express.Router(); // create a router
const multer  = require('multer'); // file upload
const multerS3 = require('multer-s3');
// const makeDir = require('make-dir'); // directory make
const AWS = require('aws-sdk');
const awsConfig = require('../../config/development_config');

// const storage = multer.diskStorage({
//   destination: async function (req, file, cb) {
//     // await makeDir(`./public/assets/${req.body.id}`);
//     // cb(null, `./public/assets/${req.body.id}/`);
//     cb(null, './public/assets/keyvisuals/');
//   },
//   filename: function (req, file, cb) {
//     const newFilename = Math.floor((Math.random() * 1000000));
//     cb(null, newFilename + '.jpg');
//   }
// });
// const upload = multer({ storage: storage });

const s3 = new AWS.S3({
    accessKeyId: awsConfig.awsS3.id,
    secretAccessKey: awsConfig.awsS3.key
});

var upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'stuarthsu',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        ACL: 'public-read',
        key: function (req, file, cb) {
            cb(null, Date.now().toString()); //use Date.now() for unique file keys
        }
    })
});

router.post('/', upload.array('images', 3), async (req, res) => {

  const productsInfo = {
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    texture: req.body.texture,
    wash: req.body.wash,
    place: req.body.place,
    note: req.body.note,
    story: req.body.story,
    category: req.body.category,
    campaign: req.body.campaign
  };

  const imagePath = req.files.map(file => `${awsConfig.awsS3.path}${file.key}`);

  const inserProductsDB = `INSERT INTO products (id, title, description, price, texture, wash, place, note, story, category, campaign, main_image, images)
                  VALUES (
                    ${productsInfo.id},
                    '${productsInfo.title}',
                    '${productsInfo.description}',
                    ${productsInfo.price},
                    '${productsInfo.texture}',
                    '${productsInfo.wash}',
                    '${productsInfo.place}',
                    '${productsInfo.note}',
                    '${productsInfo.story}',
                    '${productsInfo.category}',
                    '${productsInfo.campaign}',
                    '${imagePath[0]}',
                    '${imagePath}'
                  );`;

  db.query(inserProductsDB, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Insert to product table ok');
  });

  res.redirect('/admin/product.html');

});

router.post('/variant', (req, res) => {
  const id = req.body.id;
  const color = req.body.color;
  const size = req.body.size;
  const stock = req.body.stock;
  let code = "";

  switch (color) {
    case "白":
      code = "FFFFFF";
      break;
    case "黑":
      code = "000000";
      break;
    case "紅":
      code = "FF0000";
      break;
    case "藍":
      code = "0000FF";
      break;
    case "綠":
      code = "008000";
      break;
    case "黃":
      code = "FFFF00";
      break;
    case "粉":
      code = "FFC0CB";
      break;
    default:
      code = "";
  }

  // 比對資料庫有無資料
  // let queryID = `SELECT id FROM products WHERE id = ?;`
  const inserVariantsDB = `INSERT INTO variants (product_id, name, size, stock, code) VALUES (${id}, '${color}', '${size}', '${stock}', '${code}');`;


  db.query(inserVariantsDB, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Insert to variants table ok');
  });

  res.redirect('/admin/product.html');


});

module.exports = router;
