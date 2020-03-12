app.keyvisual = {};

// http://3.135.51.44/api/1.0/products/details?id=1

// 取得當下網址
let url = location.href;

// 將要被解析的網址丟進 URL constructor
let productSearchURL = new URL(url);

// 建構物件 (其他用不到，但建起來放著)
const { href, protocol, hostname, pathname, search, searchParams } = productSearchURL;

// Get Value from query string
var idValue;
for (let [key, value] of searchParams.entries()) {
  idValue = value;
}

const productDetailAPIURL = app.API_HOST + `api/1.0/products/details?id=${idValue}`;

// console.log(productDetailAPIURL);


fetch(productDetailAPIURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(productDetail) {

    // console.log(productDetail);

    // var productDetailParts = document.getElementById("productsDetail");

    // 處理圖片
    var mainImageParts = document.getElementById("product-main-image");

    var img = document.createElement("img");
    img.setAttribute("src", `${productDetail.data[0].main_image}`);
    mainImageParts.appendChild(img);

    // 處理 details
    var detailParts = document.getElementById("details");

    var titleDiv = document.createElement("div");
    titleDiv.className = "name";
    titleDiv.setAttribute("id", "name");
    titleDiv.innerHTML = productDetail.data[0].title;

    var idDiv = document.createElement("div");
    idDiv.className = "id";
    idDiv.setAttribute("id", "id");
    idDiv.setAttribute("value", `${productDetail.data[0].id}`);
    idDiv.innerHTML = productDetail.data[0].id;

    var priceDiv = document.createElement("div");
    priceDiv.className = "price";
    priceDiv.innerHTML = `TWD.${productDetail.data[0].price}`;

    detailParts.appendChild(titleDiv);
    detailParts.appendChild(idDiv);
    detailParts.appendChild(priceDiv);

    var colorsDiv = document.createElement("div");
    colorsDiv.className = "colors";
    var colorTitleDiv = document.createElement("span");
    colorTitleDiv.className = "title";
    colorTitleDiv.innerHTML = `顏色 &nbsp; |`;

    colorsDiv.appendChild(colorTitleDiv);

    for (var j = 0; j < productDetail.data[0].colors.length; j++) {
      var subColorDiv = document.createElement("div");
      subColorDiv.className = "color";
      subColorDiv.setAttribute("style", `background-color: #${productDetail.data[0].colors[j].code}`);

      colorsDiv.appendChild(subColorDiv);
    }
    detailParts.appendChild(colorsDiv);


    var sizesDiv = document.createElement("div");
    sizesDiv.className = "sizes";
    var sizeTitleDiv = document.createElement("span");
    sizeTitleDiv.className = "title";
    sizeTitleDiv.innerHTML = `尺寸 &nbsp; |`;

    sizesDiv.appendChild(sizeTitleDiv);

    var size;
    for (var k = 0; k < productDetail.data[0].sizes.length; k++) {
      size = productDetail.data[0].sizes[k];
      var subSizeDiv = document.createElement("div");
      subSizeDiv.className = "size";
      subSizeDiv.innerHTML = productDetail.data[0].sizes[k];

      sizesDiv.appendChild(subSizeDiv);
    }
    detailParts.appendChild(sizesDiv);

    var qtyDiv = document.createElement("div");
    qtyDiv.className = "qty";
    var qtyTitleDiv = document.createElement("span");
    qtyTitleDiv.className = "title";
    qtyTitleDiv.innerHTML = `數量 &nbsp; |`;

    var qtyAdjustDiv = document.createElement("div");
    qtyAdjustDiv.className = "qty-adjust";

    var minusAdjustDiv = document.createElement("div");
    minusAdjustDiv.className = "operator";
    minusAdjustDiv.innerHTML = "-";

    var stockDiv = document.createElement("div");
    stockDiv.className = "value";
    stockDiv.setAttribute("id", "stock");
    stockDiv.innerHTML = productDetail.data[0].variants[0].stock;

    var addAdjustDiv = document.createElement("div");
    addAdjustDiv.className = "operator";
    addAdjustDiv.innerHTML = "+";

    qtyAdjustDiv.appendChild(minusAdjustDiv);
    qtyAdjustDiv.appendChild(stockDiv);
    qtyAdjustDiv.appendChild(addAdjustDiv);

    qtyDiv.appendChild(qtyTitleDiv);
    qtyDiv.appendChild(qtyAdjustDiv);
    detailParts.appendChild(qtyDiv);

    var cartDiv = document.createElement("div");
    cartDiv.className = "add-cart";
    var cartButtonDiv = document.createElement("button");
    cartButtonDiv.innerHTML = "加入購物車";

    cartDiv.appendChild(cartButtonDiv);
    detailParts.appendChild(cartDiv);

    var infoDiv = document.createElement("div");
    infoDiv.className = "info";
    infoDiv.innerHTML = `實品顏色依單品照為主<br><br>${productDetail.data[0].texture}<br>${productDetail.data[0].description}<br><br>清洗：${productDetail.data[0].wash}<br>產地：${productDetail.data[0].place}`;

    detailParts.appendChild(infoDiv);


    // part 2
    var productInfoPart2 = document.getElementById("separator-line");

    var lineTitleDiv = document.createElement("div");
    lineTitleDiv.className = "title";
    lineTitleDiv.innerHTML = "更多產品資訊";

    var lineDiv = document.createElement("div");
    lineDiv.className = "line";

    productInfoPart2.appendChild(lineTitleDiv);
    productInfoPart2.appendChild(lineDiv);


    // part 3
    var productInfoPart3 = document.getElementById("description");

    var storyDiv = document.createElement("div");
    storyDiv.className = "story";
    storyDiv.innerHTML = productDetail.data[0].story;

    var subImagesDiv = document.createElement("div");
    subImagesDiv.className = "images";

    var subImg1Div = document.createElement("img");
    subImg1Div.setAttribute("src", `${productDetail.data[0].images[1]}`);
    var subImg2Div = document.createElement("img");
    subImg2Div.setAttribute("src", `${productDetail.data[0].images[2]}`);

    subImagesDiv.appendChild(subImg1Div);
    subImagesDiv.appendChild(subImg2Div);

    productInfoPart3.appendChild(storyDiv);
    productInfoPart3.appendChild(subImagesDiv);


  });
