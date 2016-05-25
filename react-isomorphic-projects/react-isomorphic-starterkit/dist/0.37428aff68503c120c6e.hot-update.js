exports.id = 0;
exports.modules = {

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _babelPolyfill = __webpack_require__(4);
	
	var _babelPolyfill2 = _interopRequireDefault(_babelPolyfill);
	
	var _koa = __webpack_require__(5);
	
	var _koa2 = _interopRequireDefault(_koa);
	
	var _koaProxy = __webpack_require__(6);
	
	var _koaProxy2 = _interopRequireDefault(_koaProxy);
	
	var _koaStatic = __webpack_require__(7);
	
	var _koaStatic2 = _interopRequireDefault(_koaStatic);
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _server = __webpack_require__(9);
	
	var _server2 = _interopRequireDefault(_server);
	
	var _reactRouter = __webpack_require__(156);
	
	var ReactRouter = _interopRequireWildcard(_reactRouter);
	
	var _history = __webpack_require__(157);
	
	var history = _interopRequireWildcard(_history);
	
	var _reactTransmit = __webpack_require__(158);
	
	var _reactTransmit2 = _interopRequireDefault(_reactTransmit);
	
	var _github = __webpack_require__(159);
	
	var _github2 = _interopRequireDefault(_github);
	
	var _routes = __webpack_require__(164);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	try {
		(function () {
			var app = (0, _koa2.default)();
			var hostname = process.env.HOSTNAME || "localhost";
			var port = process.env.PORT || 8000;
			var routes = _routes2.default;
	
			app.use((0, _koaStatic2.default)("static"));
	
			app.use((0, _koaProxy2.default)({
				host: _github2.default.url,
				match: /^\/api\/github\//i,
				map: function map(path) {
					return path.replace(/^\/api\/github\//i, "/");
				}
			}));
	
			app.use(regeneratorRuntime.mark(function _callee(next) {
				var _this = this;
	
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return function (callback) {
									var webserver =  false ? "" : "//" + _this.hostname + ":8080";
									var location = history.createLocation(_this.path);
	
									ReactRouter.match({ routes: routes, location: location }, function (error, redirectLocation, renderProps) {
										if (redirectLocation) {
											_this.redirect(redirectLocation.pathname + redirectLocation.search, "/");
											return;
										}
	
										if (error || !renderProps) {
											callback(error);
											return;
										}
	
										_reactTransmit2.default.renderToString(ReactRouter.RoutingContext, renderProps).then(function (_ref) {
											var reactString = _ref.reactString;
											var reactData = _ref.reactData;
	
											var template = "<!doctype html>\n\t\t\t\t\t\t<html lang=\"en-us\">\n\t\t\t\t\t\t\t<head>\n\t\t\t\t\t\t\t\t<meta charset=\"utf-8\">\n\t\t\t\t\t\t\t\t<title>999 react-isomorphic-starterkit 999</title>\n\t\t\t\t\t\t\t\t<link rel=\"shortcut icon\" href=\"/favicon.ico\">\n\t\t\t\t\t\t\t</head>\n\t\t\t\t\t\t\t<body>\n\t\t\t\t\t\t\t\t<div id=\"react-root\">" + reactString + "</div>\n\t\t\t\t\t\t\t</body>\n\t\t\t\t\t\t</html>";
	
											_this.type = "text/html";
											_this.body = _reactTransmit2.default.injectIntoMarkup(template, reactData, [webserver + "/dist/client.js"]);
	
											callback(null);
										});
									});
								};
	
							case 2:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));
	
			app.listen(port, function () {
				console.info("==> ✅  Server is listening");
				console.info("==> 🌎  Go to http://%s:%s", hostname, port);
			});
	
			if (true) {
				if (true) {
					console.log("[HMR] Waiting for server-side updates");
	
					module.hot.accept(164, function () {
						routes = __webpack_require__(164);
					});
	
					module.hot.addStatusHandler(function (status) {
						if (status === "abort") {
							setTimeout(function () {
								return process.exit(0);
							}, 0);
						}
					});
				}
			}
		})();
	} catch (error) {
		console.error(error.stack || error);
	}

/***/ }

};
//# sourceMappingURL=0.37428aff68503c120c6e.hot-update.js.map