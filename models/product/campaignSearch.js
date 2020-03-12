const db = require('../connection_db');

function campaignDB() {
  let campaignSQL = `SELECT * FROM campaigns;`;

  var data = [];
  const campaignPromise = new Promise((resolve, reject) => {
    db.query(campaignSQL, (err, campaigns) => {
      if (err) {
        console.log(err);
        return;
      }
      for (var i in campaigns) {
        data.push({
          id: campaigns[i].id,
          product_id: campaigns[i].product_id,
          picture: campaigns[i].picture,
          story: campaigns[i].story
        });
      }
      resolve(data);
    });
  });
  return campaignPromise;
}


function insertCampaignDB(product_id, imagePath, story) {
  let insertSQL = `INSERT INTO campaigns (product_id, picture, story) VALUES (${product_id}, '${imagePath}', '${story}');`;

  const insertPromise = new Promise((resolve, reject) => {
    db.query(insertSQL, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('Insert to campaigns table ok.');
      resolve(result);
    });
  });
  return insertPromise;
}


module.exports = {
  campaignDB,
  insertCampaignDB
}
