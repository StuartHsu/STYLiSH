// 取得當下網址
let url = location.href;

// 將要被解析的網址丟進 URL constructor
let queryStringURL = new URL(url);

// 建構物件 (其他用不到，但建起來放著)
const { href, protocol, hostname, pathname, search, searchParams } = queryStringURL;

// Get Value from query string
var idValue;
for (let [key, value] of searchParams.entries()) {
  idValue = value;
}


if (idValue) {

  var orderNumber = document.getElementById('orderNumber');

  var numberDiv = document.createElement("div");
  numberDiv.className = "number";
  numberDiv.innerHTML = `乾爹您的訂單編號為：${idValue} 號`;

  orderNumber.appendChild(numberDiv);
}
