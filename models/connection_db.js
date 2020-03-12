// DataBase
const config = require('../config/development_config');
const mysql = require("mysql");

// // Create connect
// const connection = mysql.createConnection({
//   host: config.mysql.host,
//   user: config.mysql.user,
//   password: config.mysql.password,
//   database: config.mysql.database
// });
//
// // Connect
// connection.connect((err) => {
//   if(err) {
//     throw err;
//   }
//   console.log('MySql Connected...');
// });

// Create connect
const connection = mysql.createPool({
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
  connectionLimit : 10,
  port: 3306
});

// Connect
// connection.getConnection((err) => {
//   if(err) {
//     throw err;
//   }
//   console.log('MySql Connected...');
// });

module.exports = connection;
