// console.log(app.API_HOST);
app.keyvisual = {};

var paging = 0;

function getProduct() {

  fetch(app.API_HOST + `api/1.0/products/all?paging=${paging}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(products) {
      // console.log(products);
      var totalProducts = products.data.length;

      var productsParts = document.getElementById("products");

      for (var i = 0; i < totalProducts; i++) {

        var aDiv = document.createElement("a");
        aDiv.className = "product";
        aDiv.setAttribute("href", `product.html?id=${products.data[i].id}`);

        var img = document.createElement("img");
        img.setAttribute("src", `${products.data[i].main_image}`);

        var colorDiv = document.createElement("div");
        colorDiv.className = "colors";

        for (var j = 0; j < products.data[i].colors.length; j++) {
          var subColorDiv = document.createElement("div");
          subColorDiv.className = "color";
          subColorDiv.setAttribute("style", `background-color: #${products.data[i].colors[j].code}`);

          colorDiv.appendChild(subColorDiv);
        }

        var nameDiv = document.createElement("div");
        nameDiv.className = "name";
        nameDiv.innerHTML = `${products.data[i].title}`;

        var priceDiv = document.createElement("div");
        priceDiv.className = "price";
        priceDiv.innerHTML = `TWD.${products.data[i].price}`;

        aDiv.appendChild(img);
        aDiv.appendChild(colorDiv);
        aDiv.appendChild(nameDiv);
        aDiv.appendChild(priceDiv);

        productsParts.appendChild(aDiv);

      }

    })
    .catch(function(err){
      return;
    });

}

getProduct();

var html = document.documentElement;
var totalHeight = html.scrollHeight;
var currentHeight = `${html.clientHeight + html.scrollTop}`;

onscroll = function() {
  if (`${html.clientHeight + html.scrollTop}` === `${html.scrollHeight}`) {
    setTimeout(function() {
      paging++;
      getProduct();
    }, 200);
  }
}


// fetch(app.API_HOST + `api/1.0/products/all?paging=${paging}`)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(products) {
//     // console.log(products);
//     var totalProducts = products.data.length;
//
//     var productsParts = document.getElementById("products");
//
//     for (var i = 0; i < totalProducts; i++) {
//
//       var aDiv = document.createElement("a");
//       aDiv.className = "product";
//       aDiv.setAttribute("href", `product.html?id=${products.data[i].id}`);
//
//       var img = document.createElement("img");
//       img.setAttribute("src", `${products.data[i].main_image}`);
//
//       var colorDiv = document.createElement("div");
//       colorDiv.className = "colors";
//
//       for (var j = 0; j < products.data[i].colors.length; j++) {
//         var subColorDiv = document.createElement("div");
//         subColorDiv.className = "color";
//         subColorDiv.setAttribute("style", `background-color: #${products.data[i].colors[j].code}`);
//
//         colorDiv.appendChild(subColorDiv);
//       }
//
//       var nameDiv = document.createElement("div");
//       nameDiv.className = "name";
//       nameDiv.innerHTML = `${products.data[i].title}`;
//
//       var priceDiv = document.createElement("div");
//       priceDiv.className = "price";
//       priceDiv.innerHTML = `TWD.${products.data[i].price}`;
//
//       aDiv.appendChild(img);
//       aDiv.appendChild(colorDiv);
//       aDiv.appendChild(nameDiv);
//       aDiv.appendChild(priceDiv);
//
//       productsParts.appendChild(aDiv);
//
//     }
//
//   });
