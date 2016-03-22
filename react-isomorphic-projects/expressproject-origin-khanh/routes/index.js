
/*
 * GET home page.
 */
var ctl = require('../controller/controller');

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.index1 = function(req, res, next){
  var id = req.params.id;
  console.log("id~ " + id);
  ctl.getMenu(req, res);
};
