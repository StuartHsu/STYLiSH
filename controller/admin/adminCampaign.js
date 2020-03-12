const express = require('express');
const db = require('../../models/connection_db');
const router = express.Router(); // create a router
const multer  = require('multer'); // file upload
const multerS3 = require('multer-s3');
const { findProductDB } = require('../../models/product/productSearch');
const { insertCampaignDB } = require('../../models/product/campaignSearch');
const redis = require('redis');
const AWS = require('aws-sdk');
const awsConfig = require('../../config/development_config');

const REDIS_PORT = process.env.PORT || 6379;
const client = redis.createClient(REDIS_PORT);


// multer 圖片上傳
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public/assets/keyvisuals/');
//   },
//   filename: function (req, file, cb) {
//     var newFilename = Math.floor((Math.random() * 1000000));
//     cb(null, newFilename + '.jpg');
//   }
// });
// var upload = multer({ storage: storage });


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

router.post('/', upload.single('picture'), async (req, res) => {

  const product_id = req.body.product_id;
  // const imagePath = req.file.location;
  const imagePath = `${awsConfig.awsS3.path}${req.file.key}`;
  const story = req.body.story;

  let compareResult = await findProductDB(product_id);

  if (compareResult.length > 0) {

    var insertResult = await insertCampaignDB(product_id, imagePath, story);

    if (insertResult) {

      client.del("campaigns");
      console.log('Clear campaigns cache.');
      res.redirect('/admin/campaign.html');

    } else {

      res.send("Sorry, database has some problem...")

    }

  } else {
    res.send("Sorry, this product id doesn't in database. Please try another one.")
  }


});



module.exports = router;
