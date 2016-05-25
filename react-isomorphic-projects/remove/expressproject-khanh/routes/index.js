/*
 * GET home page.
 */
var ctl = require('../controller/controller');

var https = require('https');

// exports.index = function(req, res) {
	// console.log("--> controller: exports.index ");
	// res.render('index', {
		// title : 'Express'
	// });
// };

exports.index1 = function(req, res, next) {
	console.log("---> route/index.js : exports.index1");
	var id = req.params.id;
	console.log("id~ " + id);
	ctl.getMenu(req, res);
};
exports.a = function(req, res, next) {
	var id = req.params.id;
	console.log("---> route/index.js : exports.a");
	console.log("id~ " + id);
	console.log("param~ " + req.params.id);
	var end_point = "/v1.0/menu/" + req.params.id;

	var options = {
		host : 'cms.ddev1.worldnow.com',
		path : end_point,
		method : 'GET',
		headers : {
			'Authorization' : 'struong~worldnow113~6',
			'Content-Type' : 'application/xml',
			'access-control-allow-origin' : '*'
		}
	};

	// do the GET request
	process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
	var reqGet = https.request(options, function(response) {
		response.on('data', function(data) {
			// console.log(data)
			//choice view && show data to view:
			res.render('view1', {
				title : data
			});
		});

	});
	reqGet.end();
	reqGet.on('error', function(e) {
		console.log("---> controller.js : reqGet.on");
		console.error(e);
	});
};
