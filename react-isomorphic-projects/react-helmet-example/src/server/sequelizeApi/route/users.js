/**
 * External dependencies
 */
var express = require('express'),
  bodyParser = require('body-parser'),
  // superagent = require('superagent'),
  app = express();

var models  = require('../models');


app.post('/users/create', function(req, res) {
  models.User.create({
    username: req.body.username
  }).then(function() {
    res.redirect('/');
  });
});

app.post('/users/:user_id/destroy', function(req, res) {
  models.User.destroy({
    where: {
      id: req.params.user_id
    }
  }).then(function() {
    res.redirect('/');
  });
});

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
