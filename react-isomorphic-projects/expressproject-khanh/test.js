var express = require('express')
var app = module.exports = express.createServer();
 
app.get('/binh', function (req, res) {
	var test = {"asd":"asdad"}
  res.send(test)
})
 
app.listen(5000)