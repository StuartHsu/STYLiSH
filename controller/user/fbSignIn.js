const express = require('express');
const crypto = require('crypto');
const router = express.Router(); // create a router
const request = require('request');
const { searchUserEmailDB, updateTokenExpiredDB, updateTokenDB, saveUserInfoDB } = require('../../models/user/userInfo');


function getDateTime(access_expired) {

  var date = new Date();

  if(!access_expired) {
    expiredDate = date;
  } else {
    var expiredDate = new Date(date.setSeconds(date.getSeconds() + access_expired));
  }

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

// FB signin
router.post('/signin.html', (req, res) => {

  const tokendHash = crypto.createHash('sha256');

  // 更新 expired_time
  var access_expired = 3600;
  var newExpiredTime = getDateTime(access_expired);

  // 取得臉書 token
  var userFBToken = req.body.accessToken;

  // token hash
  var randomNum = Math.round(Math.random() * 12362070389);
  var rawToken = userFBToken.toString() + randomNum.toString(); // 不知道拿什麼做 token 所以就用臉書的 token 做自己的 token
  var newToken = tokendHash.update(rawToken).digest('hex'); // 新的 token

  res.cookie('token', newToken, {maxAge: 60000});

  // get data from FB by user FB access_token
  request(`https://graph.facebook.com/v5.0/me?fields=id,name,email,picture.type(large)&access_token=${userFBToken}`, async function (error, response, body) {

    var rawUserData = JSON.parse(body); // transfer data type to JSON from request method

    var email = rawUserData.email;

    // check mail in DB if or not
    let emailCheck = await searchUserEmailDB(email);

    var data = {};

    if (emailCheck.length > 0) {
      // 帳號存在於 db -> 更新 token & expired
      await updateTokenExpiredDB(newExpiredTime, email, '');
      await updateTokenDB(email, '', newToken);
      data.provider = 'facebook';
      data.access_token = newToken;
      // res.json(data);
      res.redirect('profile.html');
      console.log("already in db");

    } else if (emailCheck.length === 0) {
      // 帳號不存在於 db -> 新增用戶資料
      var provider = 'facebook';
      var name = rawUserData.name;
      var picture = rawUserData.picture.data.url;
      var passHash = "fb no need password";
      var access_token = newToken;
      var token_time = getDateTime();
      var access_expired = 60;
      var expired_time = getDateTime(access_expired);

      let inserUser = await saveUserInfoDB(provider, name, email, picture, passHash, access_token, access_expired, token_time, expired_time);

      if(inserUser.insertId != 0) {
        data.provider = 'facebook';
        data.access_token = access_token;
        res.redirect('profile.html');
      }

    } else {
      res.send("Sorry, there are something error");
    }

  }); // fb request end

});


// 一般登入
router.post('/member', async (req, res) => {

  const passwordHash = crypto.createHash('sha256'); // 建立並返回指定演算法的加密 hash
  const tokendHash = crypto.createHash('sha256');

  var email = req.body.email;
  var password = req.body.password;

  // 更新 expired_time
  var access_expired = 3600;
  var newExpiredTime = getDateTime(access_expired);

  // check user name in DB

    // password hash
    let passHash = passwordHash.update(password).digest('hex');

    // token hash
    var randomNum = Math.round(Math.random() * 12362070389);
    var rawToken = password.toString() + randomNum.toString();
    var newToken = tokendHash.update(rawToken).digest('hex');

    res.cookie('token', newToken, {maxAge: (8 * 60 * 60 * 1000 + 1 * 60 * 60 * 1000)});

    let emailCheck = await searchUserEmailDB(email);
    if (emailCheck.length > 0) {
      var data = [];
      if (emailCheck[0].password === passHash) {
        await updateTokenExpiredDB(newExpiredTime, email, '');
        await updateTokenDB(email, '', newToken);
        data.push({
          data: {
            access_token: newToken,
            access_expired: emailCheck[0].access_expired,
            user: {
              id: emailCheck[0].id,
              provider: emailCheck[0].provider,
              name: emailCheck[0].name,
              email: emailCheck[0].email,
              picture: emailCheck[0].picture
            }
          }
        });
        res.redirect('profile.html');
      } else {
        res.send("Sorry, you have wrong password. Please check again.");
      }
    } else {
      res.send("Sorry, this email doesn't in database!")
    }

});



module.exports = router;
