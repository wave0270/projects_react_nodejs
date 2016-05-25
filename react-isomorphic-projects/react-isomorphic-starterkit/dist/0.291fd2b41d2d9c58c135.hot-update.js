exports.id = 0;
exports.modules = {

/***/ 165:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactInlineCss = __webpack_require__(166);
	
	var _reactInlineCss2 = _interopRequireDefault(_reactInlineCss);
	
	var _reactTransmit = __webpack_require__(158);
	
	var _reactTransmit2 = _interopRequireDefault(_reactTransmit);
	
	var _github = __webpack_require__(159);
	
	var _github2 = _interopRequireDefault(_github);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var fetchStargazers = function fetchStargazers(page) {
		var per_page = arguments.length <= 1 || arguments[1] === undefined ? 100 : arguments[1];
	
		return _github2.default.browse(["repos", "RickWong/react-isomorphic-starterkit", "stargazers"], { query: { page: page, per_page: per_page } }).then(function (json) {
			return (json || []).map(function (_ref) {
				var id = _ref.id;
				var login = _ref.login;
				return { id: id, login: login };
			});
		}).catch(function (error) {
			throw error;
		});
	};
	
	/**
	 * Main React application entry-point for both the server and client.
	 */
	
	var Main = function (_React$Component) {
		_inherits(Main, _React$Component);
	
		function Main() {
			_classCallCheck(this, Main);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(Main).apply(this, arguments));
		}
	
		_createClass(Main, [{
			key: "componentWillMount",
	
			/**
	   * componentWillMount() runs on server and client.
	   */
			value: function componentWillMount() {
				console.log(this.props);
				if (true) {
					console.log("Hello server");
				}
	
				if (false) {
					console.log("Hello client");
				}
			}
	
			/**
	   * componentDidUpdate() only runs on the client.
	   */
	
		}, {
			key: "componentDidUpdate",
			value: function componentDidUpdate(prevProps, prevState) {
				if (!this.props.additionalStargazers) {
					return;
				}
	
				this.loadMoreStargazersOnClient();
			}
	
			/**
	   * Load more stargazers.
	   */
	
		}, {
			key: "loadMoreStargazersOnClient",
			value: function loadMoreStargazersOnClient() {
				var _props = this.props;
				var _props$additionalStar = _props.additionalStargazers;
				var additionalStargazers = _props$additionalStar === undefined ? [] : _props$additionalStar;
				var transmit = _props.transmit;
				var _transmit$variables = transmit.variables;
				var nextPage = _transmit$variables.nextPage;
				var pagesToFetch = _transmit$variables.pagesToFetch;
	
	
				if (--pagesToFetch <= 0) {
					return;
				}
	
				++nextPage;
	
				transmit.forceFetch({
					nextPage: nextPage,
					pagesToFetch: pagesToFetch,
					additionalStargazers: additionalStargazers
				}, "additionalStargazers");
			}
	
			/**
	   * Runs on server and client.
	   */
	
		}, {
			key: "render",
			value: function render() {
				var repositoryUrl = "https://github.com/RickWong/react-isomorphic-starterkit";
				var avatarSize = 32;
				var avatarUrl = function avatarUrl(id) {
					return "https://avatars.githubusercontent.com/u/" + id + "?v=3&s=" + avatarSize;
				};
	
				/**
	    * This is a Transmit fragment.
	    */
				var _props2 = this.props;
				var stargazers = _props2.stargazers;
				var additionalStargazers = _props2.additionalStargazers;
	
	
				if (additionalStargazers) {
					stargazers = stargazers.concat(additionalStargazers);
				}
	
				return _react2.default.createElement(
					_reactInlineCss2.default,
					{ stylesheet: Main.css(avatarSize), namespace: "Main" },
					_react2.default.createElement(
						"a",
						{ className: "github", href: repositoryUrl },
						_react2.default.createElement("img", { src: "https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67", alt: "Fork me on GitHub" })
					),
					_react2.default.createElement(
						"h1",
						null,
						_react2.default.createElement("img", { src: "/favicon.ico", alt: "icon" }),
						_react2.default.createElement("br", null),
						"React Isomorphic Starterkit. Let's get you started!"
					),
					_react2.default.createElement(
						"h3",
						null,
						"All-You-Need Features"
					),
					_react2.default.createElement(
						"ul",
						null,
						_react2.default.createElement(
							"li",
							null,
							"Fully automated toolchain with npm run scripts"
						),
						_react2.default.createElement(
							"li",
							null,
							"React 0.14 + React Router 1.0 on the client and server"
						),
						_react2.default.createElement(
							"li",
							null,
							"Babel 6 automatically compiles ES2015 + ES7 draft"
						),
						_react2.default.createElement(
							"li",
							null,
							"Webpack HMR for instant server updates"
						),
						_react2.default.createElement(
							"li",
							null,
							"React Transform HMR for instant client updates"
						),
						_react2.default.createElement(
							"li",
							null,
							"React Transmit to preload on server and hydrate client"
						),
						_react2.default.createElement(
							"li",
							null,
							"InlineCss-component for styling components"
						)
					),
					_react2.default.createElement(
						"p",
						null,
						"In short: ",
						_react2.default.createElement(
							"em",
							null,
							"an excellent choice"
						),
						". Ready to start",
						'?'
					),
					_react2.default.createElement(
						"h3",
						null,
						"Open Community",
						_react2.default.createElement("iframe", { src: "https://ghbtns.com/github-btn.html?user=RickWong&repo=react-isomorphic-starterkit&type=star&count=true", frameBorder: "0", scrolling: "0", width: "110", height: "20", style: { float: "right" } })
					),
					_react2.default.createElement(
						"p",
						null,
						_react2.default.createElement(
							"a",
							{ href: repositoryUrl, title: "star = join us!" },
							_react2.default.createElement("img", { className: "avatar", src: avatarUrl(0), alt: "you?" })
						),
						stargazers && stargazers.map(function (user) {
							return _react2.default.createElement(
								"a",
								{ key: user.id, href: "https://github.com/" + user.login, title: user.login, target: "_blank" },
								_react2.default.createElement("img", { className: "avatar", src: avatarUrl(user.id), alt: user.login })
							);
						}),
						_react2.default.createElement(
							"a",
							{ href: repositoryUrl, title: "you here? star us!" },
							_react2.default.createElement("img", { className: "avatar", src: avatarUrl(0), alt: "you?" })
						)
					)
				);
			}
			/**
	   * <InlineCss> component allows you to write a CSS stylesheet for your component. Target
	   * your component with `&` and its children with `& selectors`. Be specific.
	   */
	
		}], [{
			key: "css",
			value: function css(avatarSize) {
				return "\n\t\t\t& .github {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tright: 0;\n\t\t\t\tborder: 0;\n\t\t\t}\n\t\t\t& {\n\t\t\t\tfont-family: sans-serif;\n\t\t\t\tcolor: #0df;\n\t\t\t\tpadding: 10px 30px 30px;\n\t\t\t\twidth: 443px;\n\t\t\t\tmargin: 10px auto;\n\t\t\t\tbackground: #222;\n\t\t\t}\n\t\t\t& .avatar {\n\t\t\t\tborder-radius: 50%;\n\t\t\t\twidth: " + avatarSize + "px;\n\t\t\t\theight: " + avatarSize + "px;\n\t\t\t\tmargin: 0 2px 2px 0;\n\t\t\t}\n\t\t";
			}
		}]);
	
		return Main;
	}(_react2.default.Component);
	
	/**
	 * Use Transmit to query and return GitHub stargazers as a Promise.
	 */
	
	
	exports.default = _reactTransmit2.default.createContainer(Main, {
		initialVariables: {
			nextPage: 2,
			pagesToFetch: 15,
			additionalStargazers: []
		},
		fragments: {
			/**
	   * Load first stargazers.
	   */
			stargazers: function stargazers() {
				return fetchStargazers(1);
			},
			/**
	   * Load more stargazers deferred.
	   */
			additionalStargazers: function additionalStargazers(_ref2) {
				var nextPage = _ref2.nextPage;
				var _additionalStargazers = _ref2.additionalStargazers;
	
				return function () {
					return fetchStargazers(nextPage).then(function (newStargazers) {
						newStargazers = newStargazers.map(function (_ref3) {
							var id = _ref3.id;
							var login = _ref3.login;
	
							return { id: id, login: login };
						});
	
						return _additionalStargazers.concat(newStargazers);
					});
				};
			}
		}
	});

/***/ }

};
//# sourceMappingURL=0.291fd2b41d2d9c58c135.hot-update.js.map