// 2. Initialize TapPay SDK.
// var defaultCardViewStyle = {
//     color: 'rgb(0,0,0)',
//     fontSize: '15px',
//     lineHeight: '24px',
//     fontWeight: '300',
//     errorColor: 'red',
//     placeholderColor: ''
//     }
//
// var config = {
//     isUsedCcv: true
//   }

// 3. Render card-number, expired, and ccv fields by TapPay SDK
// TPDirect.card.setup('#tappay-iframe', defaultCardViewStyle, config);
TPDirect.card.setup({
    fields: {
        number: {
            // css selector
            element: '#card-number',
            placeholder: '**** **** **** ****',
        },
        expirationDate: {
            // DOM object
            element: document.getElementById('card-expiration-date'),
            placeholder: 'MM / YY'
        },
        ccv: {
            element: '#card-ccv',
            placeholder: '後三碼'
        }
    },
    styles: {
        // Style all elements
        'input': {
            'color': 'gray'
        },
        // Styling ccv field
        'input.cvc': {
            // 'font-size': '16px'
        },
        // Styling expiration-date field
        'input.expiration-date': {
            // 'font-size': '16px'
        },
        // Styling card-number field
        'input.card-number': {
            // 'font-size': '16px'
        },
        // style focus state
        ':focus': {
            // 'color': 'black'
        },
        // style valid state
        '.valid': {
            'color': 'green'
        },
        // style invalid state
        '.invalid': {
            'color': 'red'
        },
        // Media queries
        // Note that these apply to the iframe, not the root window.
        '@media screen and (max-width: 400px)': {
            'input': {
                'color': 'orange'
            }
        }
    }
})

// 4. Get prime from TapPay server.
document.querySelector('#checkout').addEventListener('click', function(event) {

  TPDirect.card.getPrime(function(result) {

    var orderList = {
      prime: result.card.prime,
      order: {
        shipping: "delivery",
        payment: "credit_card",
        subtotal: 1234,
        freight: 14,
        total: 1300,
        recipient: {
          name: "Luke",
          phone: "0987654321",
          email: "luke@gmail.com",
          address: "市政府站",
          time: "morning"
        },
        list: [
          {
            id: 2,
            name: "活力花紋長筒牛仔褲",
            price: 1234,
            color: {
              code: "FF0000",
              name: "紅"
            },
            size: "M",
            qty: 1
          }
        ]
      }
    }

    var jsonData = JSON.stringify(orderList);


    // 5. AJAX send prime and other order information to Order Check Out API to complete payment
    $.ajax({
      url: "checkout.html",
      method: "POST",
      data: jsonData,
      dataType: 'json',
      contentType: "application/json;charset=utf-8",
      success: function (serverResponse) {
        document.getElementById("status").innerHTML = JSON.stringify(serverResponse, null, 4);
      }
    });

  });

});
