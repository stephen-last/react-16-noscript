'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = function Page(props) {
  return _react2.default.createElement(
    'html',
    null,
    _react2.default.createElement(
      'head',
      null,
      _react2.default.createElement(
        'title',
        null,
        'Test'
      ),
      _react2.default.createElement('meta', { charSet: 'utf-8' }),
      _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' })
    ),
    _react2.default.createElement(
      'body',
      null,
      _react2.default.createElement(
        'div',
        { id: 'react-root' },
        props.children
      ),
      _react2.default.createElement('script', { src: '/client.js' })
    )
  );
};

exports.default = Page;