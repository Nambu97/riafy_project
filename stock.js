const express = require('express');
const app = express();
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
const get_company = require('./routes/company.route');
app.use("/company", get_company);
app.use(express.static(__dirname + "/public"));

/******************** SERVER API *********************/
app.get('/', function(req,res) {	
	var ord = JSON.stringify(Math.random()*1000);
	var i = ord.indexOf('.');
	ord = 'ORD'+ ord.substr(0,i);	
	res.render('public/index.html', {orderid:ord});
	
});



// Instruct node to run the socket server on the following port

var port = process.env.PORT || 3306;


app.listen(port, function () {
    console.log("Server Has Started!");
	console.log('listening on port ' + port);
});

/*************  Coupal SOCKET  ******************/