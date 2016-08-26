/**
 * External dependencies
 */
var express = require('express'),
  bodyParser = require('body-parser'),
  app = express();

var models  = require('../models');

/**users table***********************/
app.post('/users/create', function(req, res) {
  models.User.create({
    username: req.body.username
  }).then(function(data) {
    res.json({data: data})
  });
});

app.post('/users/update', function(req, res) {
  models.User.update({
    where: {
      id: req.body.id
    }
  }).then(function(data) {
    res.json({data: data})
  });
});

app.post('/users/listAll', function(req, res) {
  models.User.findAll().then(function(data){
    res.json({data: data})
    res.end();
  });
});

app.post('/users/:user_id/destroy', function(req, res) {
  models.User.destroy({
    where: {
      id: req.params.user_id
    }
  }).then(function(data) {
    res.json({data: data});
  });
});

/**tasks table***********************/

app.post('/users/:user_id/tasks/create', function(req, res) {
  models.Task.create({
    title: req.body.title,
    UserId: req.params.user_id
  }).then(function() {
    res.redirect('/');
  });
});

app.post('/users/:user_id/tasks/:task_id/destroy', function(req, res) {
  models.Task.destroy({
    where: {
      id: req.params.task_id
    }
  }).then(function() {
    res.redirect('/');
  });
});




module.exports = app;
