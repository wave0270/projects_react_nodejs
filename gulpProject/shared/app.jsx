/**
 * @jsx React.DOM
 */
var React        = require('react');
var Login = require('./components/login/main');


window.onload = function() {
  React.render(
    <Login />,
    document.getElementById('primary')
  )
}
