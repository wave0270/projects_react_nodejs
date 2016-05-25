'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrapLibButton = require('react-bootstrap/lib/Button');

var _reactBootstrapLibButton2 = _interopRequireDefault(_reactBootstrapLibButton);

var _reactBootstrapLibButtonToolbar = require('react-bootstrap/lib/ButtonToolbar');

var _reactBootstrapLibButtonToolbar2 = _interopRequireDefault(_reactBootstrapLibButtonToolbar);

exports['default'] = _react2['default'].createClass({
  displayName: 'test_bootstrap_page',

  getDefaultProps: function getDefaultProps() {
    return {
      name: 'Bootstrap page'
    };
  },
  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'h1',
        null,
        this.props.name
      ),
      _react2['default'].createElement(
        _reactBootstrapLibButtonToolbar2['default'],
        null,
        _react2['default'].createElement(
          _reactBootstrapLibButton2['default'],
          null,
          'Default'
        ),
        _react2['default'].createElement(
          _reactBootstrapLibButton2['default'],
          { bsStyle: 'primary' },
          'Primary'
        ),
        _react2['default'].createElement(
          _reactBootstrapLibButton2['default'],
          { bsStyle: 'success' },
          'Success'
        ),
        _react2['default'].createElement(
          _reactBootstrapLibButton2['default'],
          { bsStyle: 'info' },
          'Info'
        ),
        _react2['default'].createElement(
          _reactBootstrapLibButton2['default'],
          { bsStyle: 'warning' },
          'Warning'
        ),
        _react2['default'].createElement(
          _reactBootstrapLibButton2['default'],
          { bsStyle: 'danger' },
          'Danger'
        ),
        _react2['default'].createElement(
          _reactBootstrapLibButton2['default'],
          { bsStyle: 'link' },
          'Link'
        )
      )
    );
  }
});
module.exports = exports['default'];
/* Standard button */ /* Provides extra visual weight and identifies the primary action in a set of buttons */ /* Indicates a successful or positive action */ /* Contextual button for informational alert messages */ /* Indicates caution should be taken with this action */ /* Indicates a dangerous or potentially negative action */ /* Deemphasize a button by making it look like a link while maintaining button behavior */