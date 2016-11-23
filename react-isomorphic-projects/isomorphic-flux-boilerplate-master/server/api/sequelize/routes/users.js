var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/s-users', function(req, res) {
  models.User.findAll({
    include: [ models.Task ]
  }).then(function(users) {
    console.log('=========users')
    console.log(user)
    res.json(users)
    // res.render('index', {
    //   title: 'Express',
    //   users: users
    // });
  });
});

router.post('/s-users/create', function(req, res) {
  models.User.create({
    username: req.body.username
  }).then(function() {
    res.redirect('/s-users');
  });
});

router.get('/s-users/:user_id/destroy', function(req, res) {
  models.User.destroy({
    where: {
      id: req.params.user_id
    }
  }).then(function() {
    res.redirect('/s-users');
  });
});

router.post('/s-users/:user_id/tasks/create', function (req, res) {
  models.Task.create({
    title: req.body.title,
    UserId: req.params.user_id
  }).then(function() {
    res.redirect('/s-users');
  });
});

router.get('/s-users/:user_id/tasks/:task_id/destroy', function (req, res) {
  models.Task.destroy({
    where: {
      id: req.params.task_id
    }
  }).then(function() {
    res.redirect('/s-users');
  });
});


module.exports = router;
