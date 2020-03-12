const express = require('express');
const crypto = require('crypto');
const router = express.Router(); // create a router
const { searchUserEmailDB, searchTokenDB, updateTokenExpiredDB, updateTokenDB } = require('../models/user/userInfo');


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

router.post('/', async (req, res) => {
  const passwordHash = crypto.createHash('sha256'); // 建立並返回指定演算法的加密 hash
  const tokendHash = crypto.createHash('sha256');

  var email = req.body.email;
  var password = req.body.password;
  var provider = req.body.provider;

  // 更新 expired_time
  var access_expired = 60;
  var newExpiredTime = getExpiredDateTime(access_expired);

  // check user name in DB
  if(provider === "native") {
    // password hash
    let passHash = passwordHash.update(password).digest('hex');

    // token hash
    var randomNum = Math.round(Math.random() * 12362070389);
    var rawToken = password.toString() + randomNum.toString();
    var newToken = tokendHash.update(rawToken).digest('hex');

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
        res.json(data);
      } else {
        res.send("Sorry, you have wrong password. Please check again.");
      }
    } else {
      res.send("Sorry, this email doesn't in database!")
    }

  // native check end

  } else if (provider === "facebook") {
    var access_token = req.body.access_token;

    // token hash
    randomNum = Math.round(Math.random() * 12362070389);
    rawToken = access_token.toString() + randomNum.toString();
    newToken = tokendHash.update(rawToken).digest('hex');

    let tokenCheck = await searchTokenDB(access_token);

    data = [];
    if (tokenCheck[0].access_token === access_token) {
      await updateTokenExpiredDB(newExpiredTime, '', access_token);
      await updateTokenDB('', access_token, newToken);
      data.push({
        data: {
          access_token: newToken,
          access_expired: tokenCheck[0].access_expired,
          user: {
            id: tokenCheck[0].id,
            provider: tokenCheck[0].provider,
            name: tokenCheck[0].name,
            email: tokenCheck[0].email,
            picture: tokenCheck[0].picture
          }
        }
      });
      res.json(data);
    } else {
      res.send("Sorry, you have wrong token. Please check....humm???");
    }
  // facebook check end

  } else {
    res.send("Sorry");
  }


});


module.exports = router;
