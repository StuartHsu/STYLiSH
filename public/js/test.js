const userProfileAPIURL = app.API_HOST + `api/1.0/user/profile`;

const productDetailAPIURL = app.API_HOST + `api/1.0/products/all`;
const productDetailAPIURL2 = app.API_HOST + `api/1.0/products/men`;
const productDetailAPIURL3 = app.API_HOST + `api/1.0/products/women`;
const productDetailAPIURL4 = app.API_HOST + `api/1.0/products/details?id=1`;
const productDetailAPIURL5 = app.API_HOST + `api/1.0/products/details?id=2`;


for (var i=0;i<1000;i++) {
  let count;
  fetch(productDetailAPIURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(productDetail) {
      count++
      console.log(count);

    });

    let count2;
    fetch(productDetailAPIURL2)
      .then(function(response) {
        return response.json();
      })
      .then(function(productDetail) {
        count2++
        console.log(count2);

      });
    let count3;
    fetch(productDetailAPIURL3)
      .then(function(response) {
        return response.json();
      })
      .then(function(productDetail) {
        count3++
        console.log(count3);

      });
    let count4;
    fetch(productDetailAPIURL4)
      .then(function(response) {
        return response.json();
      })
      .then(function(productDetail) {
        count4++
        console.log(count4);

      });
    let count5;
    fetch(productDetailAPIURL5)
      .then(function(response) {
        return response.json();
      })
      .then(function(productDetail) {
        count5++
        console.log(count5);

      });
}
