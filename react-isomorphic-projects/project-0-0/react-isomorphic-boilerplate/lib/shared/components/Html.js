'use strict';

var React = require('react');

var Html = React.createClass({
  displayName: 'Html',

  render: function render() {
    return React.createElement(
      'html',
      null,
      React.createElement('head', null),
      React.createElement(
        'body',
        null,
        'Home 2'
      )
    );
  }
});

module.exports = Html;