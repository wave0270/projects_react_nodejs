'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

/**
 * Internal dependencies
 */

exports['default'] = _react2['default'].createClass({
	displayName: 'jsxComponent',

	getDefaultProps: function getDefaultProps() {
		return {
			name: 'New Story !',
			headline: 'default headline value'
		};
	},
	getInitialState: function getInitialState() {
		return {
			headline: 'state-headline value'
		};
	},
	render: function render() {
		return _react2['default'].createElement(
			'div',
			null,
			'New Story - ',
			this.state.headline
		);
	}
});
module.exports = exports['default'];