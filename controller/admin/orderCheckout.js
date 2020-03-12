const express = require('express');
const router = express.Router(); // create a router
const axios = require('axios');
const { insertPaymentDB, insertOrderDB, searchPaymentIdDB, updatePaidStatusDB } = require('../../models/product/checkout');


router.post('/checkout.html', async (req, res) => {

  var orderContent = req.body.order;
  var rcptContent = req.body.recipient;

  var checkout = {
    prime: req.body.prime,
    order: {
      shipping: orderContent.shipping,
      payment: orderContent.payment,
      subtotal: orderContent.subtotal,
      freight: orderContent.freight,
      total: orderContent.total
    },
    recipient: {
      name: rcptContent.name,
      phone: rcptContent.phone,
      email: rcptContent.email,
      address: rcptContent.address,
      time: rcptContent.time,
      pay_status: "unpaid"
    }
  }

  await insertPaymentDB(
    checkout.order.shipping,
    checkout.order.payment,
    checkout.order.subtotal,
    checkout.order.freight,
    checkout.order.total,
    checkout.recipient.name,
    checkout.recipient.phone,
    checkout.recipient.email,
    checkout.recipient.address,
    checkout.recipient.time,
    checkout.recipient.pay_status
  );

  let searchID = await searchPaymentIdDB();
  var payment_id = searchID[0];

  // list
  for(var i = 0; i < orderContent.list.length; i ++) {

    var order = {
      product_id: orderContent.list[i].id,
      size: orderContent.list[i].size,
      qty: orderContent.list[i].qty,
      product_name: orderContent.list[i].name,
      price: orderContent.list[i].price,
      color_code: orderContent.list[i].color.code,
      color_name: orderContent.list[i].color.name
    }

    await insertOrderDB(
      order.product_id,
      order.product_name,
      order.price,
      order.color_code,
      order.color_name,
      order.size,
      order.qty,
      payment_id
    );

  }


  // Send to TapPay API
  var data = {
    prime: checkout.prime,
    partner_key: "partner_PHgswvYEk4QY6oy3n8X3CwiQCVQmv91ZcFoD5VrkGFXo8N7BFiLUxzeG",
    merchant_id: "AppWorksSchool_CTBC",
    details: "TapPay Test",
    amount: 100,
    cardholder: {
        phone_number: checkout.recipient.phone,
        name: checkout.recipient.name,
        email: checkout.recipient.email,
        address: checkout.recipient.address
    },
  }

  // to TapPay API
  axios.post('https://sandbox.tappaysdk.com/tpc/payment/pay-by-prime', data, {
    headers: {
      'x-api-key': 'partner_PHgswvYEk4QY6oy3n8X3CwiQCVQmv91ZcFoD5VrkGFXo8N7BFiLUxzeG'
    }
  }).then(async (response) => {
    var data = {};
    if (response.data.status === 0) {
      await updatePaidStatusDB('paid', payment_id);
      data.number = payment_id;
      res.json({ data: data });
    } else {
      await updatePaidStatusDB('fail', payment_id);
      res.json('Sorry, fail to pay.')
    }
  });

});

module.exports = router;
