const express = require('express');
const crypto = require('crypto');
const router = express.Router(); // create a router
const { saveUserInfoDB, searchUserIdDB, searchUserNameDB, searchUserEmailDB } = require('../../models/user/userInfo');

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

function getExpiredDateTime(access_expired) {

  var date = new Date();
  var expiredDate = new Date(date.setSeconds(date.getSeconds() + access_expired));

  var hour = expiredDate.getHours();
  hour = (hour < 10 ? "0" : "") + hour;

  var min  = expiredDate.getMinutes();
  min = (min < 10 ? "0" : "") + min;

  var sec  = expiredDate.getSeconds();
  sec = (sec < 10 ? "0" : "") + sec;

  var year = expiredDate.getFullYear();

  var month = expiredDate.getMonth() + 1;
  month = (month < 10 ? "0" : "") + month;

  var day  = expiredDate.getDate();
  day = (day < 10 ? "0" : "") + day;

  return year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;

}

router.post('/signup', async (req, res) => {

  const passwordHash = crypto.createHash('sha256'); // 建立並返回指定演算法的加密 hash
  const tokendHash = crypto.createHash('sha256');

  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  var provider = "native";
  var picture = "https://schoolvoyage.ga/images/123498.png"

  // password hash
  let passHash = passwordHash.update(password).digest('hex');

  // token hash
  var randomNum = Math.round(Math.random() * 12362070389);
  var rawToken = password.toString() + randomNum.toString();
  var access_token = tokendHash.update(rawToken).digest('hex');

  res.cookie('token', access_token, {maxAge: 60000});

  var token_time = getDateTime();
  var access_expired = 60;
  var expired_time = getExpiredDateTime(access_expired);

  var data = [];

  // check user name in DB
  let checkUserName = await searchUserNameDB(name);
  if(checkUserName.length > 0) {
    res.send("Sorry, this name already be registered");
  } else {
    // check user mail in DB
    let checkUserEmail = await searchUserEmailDB(email);
    if(checkUserEmail.length > 0) {
      res.send("Sorry, this email already be registered");
    } else {
      // insert user info to db
      let inserUser = await saveUserInfoDB(provider, name, email, picture, passHash, access_token, access_expired, token_time, expired_time);

      if(inserUser.insertId != 0) {
        let userId = await searchUserIdDB(name);

        data.push({
          data: {
            access_token: access_token,
            access_expired: access_expired,
            user: {
              id: userId[0].id,
              provider: provider,
              name: name,
              email: email,
              picture: picture
            }
          }
        });
        res.redirect('profile.html');
        // res.json(data);
      } else {
        res.send("Sorry, there are something error");
      }
    }
  }

});


module.exports = router;
