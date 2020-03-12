const db = require('../connection_db');

function saveUserInfoDB(provider, name, email, picture, passHash, access_token, access_expired, token_time, expired_time) {
  let searchSQL = `INSERT INTO users (provider, name, email, picture, password, access_token, access_expired, token_time, expired_time) VALUES ('${provider}', '${name}', '${email}', '${picture}', '${passHash}', '${access_token}', ${access_expired}, '${token_time}', '${expired_time}');`;

  const searchPromise = new Promise((resolve, reject) => {
    db.query(searchSQL, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('Insert to user table ok!');
      resolve(result);
    });
  });
  return searchPromise;
}

function searchUserIdDB(name) {
  let searchSQL = `SELECT id FROM users WHERE name = ?;`;

  const searchPromise = new Promise((resolve, reject) => {
    db.query(searchSQL, name, (err, users) => {
      if (err) {
        console.log(err);
        return;
      }
      resolve(users);
    });
  });
  return searchPromise;
}

function searchUserNameDB(name) {
  let searchSQL = `SELECT * FROM users WHERE name = '${name}';`;

  const searchPromise = new Promise((resolve, reject) => {
    db.query(searchSQL, (err, users) => {
      if (err) {
        console.log(err);
        return;
      }
      resolve(users);
    });
  });
  return searchPromise;
}

function searchUserEmailDB(email) {
  let searchSQL = `SELECT * FROM users WHERE email = '${email}';`;

  const searchPromise = new Promise((resolve, reject) => {
    db.query(searchSQL, (err, users) => {
      if (err) {
        console.log(err);
        return;
      }
      resolve(users);
    });
  });
  return searchPromise;
}

function searchUserPasswordlDB(password) {
  let searchSQL = `SELECT * FROM users WHERE password = '${password}';`;

  const searchPromise = new Promise((resolve, reject) => {
    db.query(searchSQL, (err, users) => {
      if (err) {
        console.log(err);
        return;
      }
      resolve(users);
    });
  });
  return searchPromise;
}

function searchTokenDB(token) {
  let searchSQL = `SELECT * FROM users WHERE access_token = '${token}';`;

  const searchPromise = new Promise((resolve, reject) => {
    db.query(searchSQL, (err, users) => {
      if (err) {
        console.log(err);
        return;
      }
      resolve(users);
    });
  });
  return searchPromise;
}

function updateTokenExpiredDB(newExpiredTime, email, access_token) {
  let updateSQL = `UPDATE users SET expired_time = '${newExpiredTime}' WHERE email = '${email}' OR access_token = '${access_token}';`;

  const updatePromise = new Promise((resolve, reject) => {
    db.query(updateSQL, (err, users) => {
      if (err) {
        console.log(err);
        // return;
        reject(err);
      }
      resolve(users);
    });
  });
  return updatePromise;
}

function updateTokenDB(email, access_token, new_token) {
  let updateSQL = `UPDATE users SET access_token = '${new_token}' WHERE email = '${email}' OR access_token = '${access_token}';`;

  const updatePromise = new Promise((resolve, reject) => {
    db.query(updateSQL, (err, users) => {
      if (err) {
        console.log(err);
        return;
      }
      resolve(users);
    });
  });
  return updatePromise;
}

module.exports = {
  saveUserInfoDB,
  searchUserIdDB,
  searchUserNameDB,
  searchUserEmailDB,
  searchUserPasswordlDB,
  searchTokenDB,
  updateTokenExpiredDB,
  updateTokenDB
}
