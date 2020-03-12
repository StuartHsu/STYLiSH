const express = require('express');
const router = express.Router(); // create a router
const { searchTokenDB } = require('../../models/user/userInfo');

function getDateTime() {

  var date = new Date();

  var hour = date.getHours();
  hour = (hour < 10 ? "0" : "") + hour;

  var min  = date.getMinutes();
  min = (min < 10 ? "0" : "") + min;

  var sec  = date.getSeconds();
  sec = (sec < 10 ? "0" : "") + sec;

  var year = date.getFullYear();

  var month = date.getMonth() + 1;
  month = (month < 10 ? "0" : "") + month;

  var day  = date.getDate();
  day = (day < 10 ? "0" : "") + day;

  return year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;

}

router.get('/', async (req, res) => {

  var bearerHeader = req.headers.authorization;
  var splitBearer = bearerHeader.split(' ');
  var bearerToken = splitBearer[1];

  var currentTime = new Date(getDateTime());

  let tokenCheck = await searchTokenDB(bearerToken);
  if (tokenCheck.length > 0) {
    var expiredTime = tokenCheck[0].expired_time;

    if(expiredTime > currentTime) {
      var data = [];
      data.push({
        data: {
          id: tokenCheck[0].id,
          provider: tokenCheck[0].provider,
          name: tokenCheck[0].name,
          email: tokenCheck[0].email,
          picture: tokenCheck[0].picture
        }
      });
      res.json(data);
    } else {
      res.send("Please login again!");
    }
  } else {
    res.send('Sorry, this token is invalid, please check again');
  }

});


module.exports = router;
