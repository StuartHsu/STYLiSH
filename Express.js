const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const db = require('./models/connection_db');
const redis = require('redis');

const PORT = process.env.PORT || 3000;
// const REDIS_PORT = process.env.PORT || 6379;

const app = express();



// Admin part
const adminProduct = require('./controller/admin/adminProduct'); // 產品登錄後台
const adminCampaign = require('./controller/admin/adminCampaign'); // campaign 登錄後台
const orderCheckout = require('./controller/admin/orderCheckout'); // checkout 登錄後台

// Product part
const productDetails = require('./controller/product/productDetails'); // 產品 Detail
const products = require('./controller/product/products'); // 產品 api
const campaigns = require('./controller/product/campaigns'); // campaign api
const productOrderCheckout = require('./controller/product/productOrderCheckout'); // productordercheckout

// User part
const fbSignIn = require('./controller/user/fbSignIn'); // User Sign In
const signup = require('./controller/user/signup'); // User Sign Up
const userProfile = require('./controller/user/userProfile'); // User Profile

// const signup = require('./routes/signup'); // signup api
// const signin = require('./routes/signin'); // signin api


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public')); // static file
app.use(cookieParser()); // cookie

app.set('view engine', 'ejs');

// CORS Control
app.use("/api/", function(req, res, next){
	//console.log(req.originalUrl);
	res.set("Access-Control-Allow-Origin", "*");
	res.set("Access-Control-Allow-Headers", "Origin, Content-Type, Accept, Authorization");
	res.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
	res.set("Access-Control-Allow-Credentials", "true");
	next();
});

// Admin part
app.use('/admin/product.html', adminProduct);
app.use('/admin/campaign.html', adminCampaign);
app.use('/admin', orderCheckout);

// Product part
app.use('/api/1.0/products/details', productDetails);
app.use('/api/1.0/products', products);
app.use('/api/1.0/marketing/campaigns', campaigns);
app.use('/', productOrderCheckout);

// User part
app.use('/user', fbSignIn);
app.use('/user', signup);
app.use('/api/1.0/user/profile', userProfile);

app.use('/api/1.0/user/signin', fbSignIn); // 取用 signupAPI
app.use('/api/1.0/user/signup', signup); // 取用 signupAPI

app.get('/', (req, res) => {
  res.send('HEY!');
});

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// app.listen(3000, () => console.log('Server running on port 3000'));

app.listen(3000, () => {
  console.log(`Server running on port ${PORT}`);
});
