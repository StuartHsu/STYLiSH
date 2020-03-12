const db = require('../connection_db');

function insertPaymentDB(shipping, payment, subtotal, freight, total, name, phone, email, address, time, pay_status) {
  let searchSQL =
  `INSERT INTO payments (shipping, payment, subtotal, freight, total, name, phone, email, address, time, pay_status)
  VALUES
  ('${shipping}', '${payment}', ${subtotal}, ${freight}, ${total}, '${name}', '${phone}', '${email}', '${address}', '${time}', '${pay_status}')`;


  const searchPromise = new Promise((resolve, reject) => {
    db.query(searchSQL, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('Insert to payments table ok!');
      resolve(result);
    });
  });
  return searchPromise;
}

function insertOrderDB(product_id, name, price, color_code, color_name, size, qty, payment_id) {
  let searchSQL =
  `INSERT INTO orderlists (product_id, name, price, color_code, color_name, size, qty, payment_id)
  VALUES
  (${product_id}, '${name}', ${price}, '${color_code}', '${color_name}', '${size}', ${qty}, ${payment_id})`;

  const searchPromise = new Promise((resolve, reject) => {
    db.query(searchSQL, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('Insert to orderlists table ok!');
      resolve(result);
    });
  });
  return searchPromise;
}

function searchPaymentIdDB() {
  let searchSQL = `SELECT payment_id FROM payments ORDER BY payment_id DESC LIMIT 0 , 1`;

  const searchPromise = new Promise((resolve, reject) => {
    db.query(searchSQL, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      var data = [];
      data.push(result[0].payment_id);
      resolve(data);
    });
  });
  return searchPromise;
}

function updatePaidStatusDB(paid_status, payment_id) {
  let searchSQL = `UPDATE payments SET pay_status = '${paid_status}' WHERE payment_id = ${payment_id};`;

  const searchPromise = new Promise((resolve, reject) => {
    db.query(searchSQL, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('Update pay_status ok!');
      resolve(result);
    });
  });
  return searchPromise;
}



module.exports = {
  insertPaymentDB,
  insertOrderDB,
  searchPaymentIdDB,
  updatePaidStatusDB
}
