app.keyvisual = {};

// 3. Render card-number, expired, and ccv fields by TapPay SDK
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
            id: document.getElementById('id').innerHTML,
            name: document.getElementById('name').innerHTML,
            price: 1234,
            color: {
              code: "FF0000",
              name: "紅"
            },
            size: "M",
            qty: document.getElementById('stock').innerHTML
          }
        ]
      }
    }

    var jsonData = JSON.stringify(orderList);    

    // 5. AJAX send prime and other order information to Order Check Out API to complete payment
    $.ajax({
      url: "product.html",
      method: "POST",
      data: jsonData,
      dataType: 'json',
      contentType: "application/json;charset=utf-8",
      success: function (serverResponse) {
        if (serverResponse > 0) {
          window.location.href = app.API_HOST + `thankyou.html?id=${serverResponse}`;
        } else {
          alert("Sorry, there are something fail...");
        }
      }
    });

  });

});
