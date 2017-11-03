'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _Page = require('../components/Page');

var _Page2 = _interopRequireDefault(_Page);

var _PageContent = require('../components/PageContent');

var _PageContent2 = _interopRequireDefault(_PageContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = 8500;

var app = (0, _express2.default)();
app.use(_express2.default.static(_path2.default.join('public'), { maxage: '30d' }));

app.get('/', function (req, res) {
  var stream = _server2.default.renderToNodeStream(_react2.default.createElement(
    _Page2.default,
    null,
    _react2.default.createElement(_PageContent2.default, null)
  ));
  res.header('Vary', 'Accept-Encoding');
  res.write('<!DOCTYPE html>');
  stream.pipe(res, { end: false });
  stream.on('end', function () {
    return res.end();
  });
});

app.listen(port, function () {
  console.log('Test app for React 16 with <noscript> running on port ' + port);
});