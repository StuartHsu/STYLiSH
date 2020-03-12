const userProfileAPIURL = app.API_HOST + `api/1.0/user/profile`;


function getCookie (name) {

	if (document.cookie.length > 0) { // 確認是否存在 cookies
		var search = name + "=";
		offset = document.cookie.indexOf(search);
		if (offset != -1) { // cookie 存在
			offset += search.length; // set index of beginning of value
			end = document.cookie.indexOf(";", offset); // set index of end of cookie value
			if (end == -1)
				end = document.cookie.length;
				return unescape(document.cookie.substring(offset, end));
		}
	}
	return null;

}

var token = getCookie("token");

if (!token) {
	window.location.href = app.API_HOST + "user/signin.html";
}

fetch(userProfileAPIURL, {
  method: "GET",
  headers: {
    'Authorization': `Bearer ${token}`,
  }
})
.then(function(res){
  return res.json()
})
.then(userProfile => {

  // console.log(userProfile[0].data);

  var profile = document.getElementById('profile');

  var idDiv = document.createElement("div");
  idDiv.className = "id";
  idDiv.innerHTML = `使用者ＩＤ：${userProfile[0].data.id}`;

  var nameDiv = document.createElement("div");
  nameDiv.className = "name";
  nameDiv.innerHTML = `使用者名稱：${userProfile[0].data.name}`;

  var emailDiv = document.createElement("div");
  emailDiv.className = "email";
  emailDiv.innerHTML = `使用者信箱：${userProfile[0].data.email}`;

  var providerDiv = document.createElement("div");
  providerDiv.className = "provider";
  providerDiv.innerHTML = `使用者來源：${userProfile[0].data.provider}`;

  profile.appendChild(idDiv);
  profile.appendChild(nameDiv);
  profile.appendChild(emailDiv);
  profile.appendChild(providerDiv);

});
