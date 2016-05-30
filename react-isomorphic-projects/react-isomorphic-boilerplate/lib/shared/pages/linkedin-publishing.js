'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

exports['default'] = _react2['default'].createClass({
	displayName: 'linkedin-publishing',

	getDefaultProps: function getDefaultProps() {
		return {
			name: 'Publishing Linkedin page'
		};
	},
	getInitialState: function getInitialState() {
		console.log('getInitialState');
		return {
			config: {
				client_id: "75hebds55kuzda",
				client_secret: "E3fleb4ZN96CYKXb",
				redirect_uri: ""
			},
			post: {
				"comment": "",
				"content": {
					"title": "",
					"description": "",
					"submitted-url": "http://khoahoc.tv/dong-dat-72-do-richter-o-ecuador-72888",
					"submitted-image-url": "http://7428.net/wp-content/uploads/2014/02/Valentines-Day-I-Love-You-Vector.jpg"
				},
				"visibility": {
					"code": "anyone"
				}
			}
		};
	},
	componentDidMount: function componentDidMount() {
		console.log('componentWillMount');
		this.state.config.redirect_uri = window.location.origin + "/linkedin/oauth/callback";
		if (sessionStorage.getItem('save')) {
			sessionStorage.removeItem('save');
			if (window && window.location.search) {
				var res = window.location.search.slice(1, window.location.search.length);
				var arr = res.split('=');
				this.setState({ status: arr[1] });
				window.history.pushState('object or string', 'Title', '/linkedin-publishing');
			}
		}
	},
	componentWillUnmount: function componentWillUnmount() {
		console.log('componentWillUnMount');
		if (sessionStorage.getItem('save')) {
			sessionStorage.removeItem('save');
		}
	},
	publishing: function publishing() {
		this.setState({ message: '' });
		var that = this;
		_superagent2['default'].post('/linkedin-call').send(this.state).set('Accept', 'application/json').end(function (error, result) {
			sessionStorage.setItem('save', 'true');
			window.open('/linkedin/calloauth/linkedin-publishing', '_self');
			// if(result.body && result.body.data){
			// 	var json = JSON.parse(result.body.data.text)
			// 	if(json.message){
			// 		that.setState({message: json.message });
			// 	}else{
			// 		that.setState({message: 'Post successfully' });
			// 	}
			// }else{
			// 	sessionStorage.setItem('save', 'true');
			// 	window.open('/linkedin/calloauth/linkedin-publishing', '_self');
			// }
		});
	},
	handlerOnChange: function handlerOnChange(name, event) {
		var post = this.state.post;
		post.content[name] = event.target.value;
		this.setState({ post: post, status: "" });
	},
	handlerOnChangeComment: function handlerOnChangeComment(name, event) {
		var post = this.state.post;
		post[name] = event.target.value;
		this.setState({ post: post, status: "" });
	},
	render: function render() {
		return _react2['default'].createElement(
			'div',
			{ className: 'container' },
			_react2['default'].createElement(
				'h1',
				null,
				this.props.name
			),
			_react2['default'].createElement(
				'div',
				{ className: 'form-group' },
				_react2['default'].createElement(
					'label',
					{ htmlFor: '' },
					'Title:'
				),
				_react2['default'].createElement('input', { className: 'form-control', placeholder: 'Title', value: this.state.post.content.title, onChange: this.handlerOnChange.bind(this, 'title') })
			),
			_react2['default'].createElement(
				'div',
				{ className: 'form-group' },
				_react2['default'].createElement(
					'label',
					{ htmlFor: '' },
					'Description:'
				),
				_react2['default'].createElement('input', { className: 'form-control', placeholder: 'Description', value: this.state.post.content.description, onChange: this.handlerOnChange.bind(this, 'description') })
			),
			_react2['default'].createElement(
				'div',
				{ className: 'form-group' },
				_react2['default'].createElement(
					'label',
					{ htmlFor: '' },
					'Image Link:'
				),
				_react2['default'].createElement('input', { className: 'form-control', placeholder: 'Image', value: this.state.post.content['submitted-image-url'], onChange: this.handlerOnChange.bind(this, 'submitted-image-url') })
			),
			_react2['default'].createElement(
				'div',
				{ className: 'form-group' },
				_react2['default'].createElement(
					'label',
					{ htmlFor: '' },
					'Link:'
				),
				_react2['default'].createElement('input', { className: 'form-control', placeholder: 'Link', value: this.state.post.content['submitted-url'], onChange: this.handlerOnChange.bind(this, 'submitted-url') })
			),
			_react2['default'].createElement(
				'div',
				{ className: 'form-group' },
				_react2['default'].createElement(
					'label',
					{ htmlFor: '' },
					'Comment:'
				),
				_react2['default'].createElement('input', { className: 'form-control', placeholder: 'Comment', value: this.state.post.comment, onChange: this.handlerOnChangeComment.bind(this, 'comment') })
			),
			_react2['default'].createElement(
				'div',
				{ className: 'form-group' },
				this.state && this.state.status && this.state.status === '201' && _react2['default'].createElement(
					'p',
					{ className: 'text-primary' },
					'Push successfully!'
				),
				this.state && this.state.status && this.state.status === '400' && _react2['default'].createElement(
					'p',
					{ className: 'text-danger' },
					'Do not post duplicate content!'
				),
				this.state && this.state.status && this.state.status !== '400' && this.state.status !== '201' && _react2['default'].createElement(
					'p',
					{ className: 'text-danger' },
					'Push unsuccessfully!'
				),
				_react2['default'].createElement(
					'button',
					{ className: 'btn btn-default', onClick: this.publishing },
					'Publishing'
				)
			)
		);
	}
});
module.exports = exports['default'];