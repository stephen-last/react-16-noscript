'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageContent = function (_React$Component) {
  _inherits(PageContent, _React$Component);

  function PageContent() {
    _classCallCheck(this, PageContent);

    var _this = _possibleConstructorReturn(this, (PageContent.__proto__ || Object.getPrototypeOf(PageContent)).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    _this.state = { myText: 'Testing' };
    return _this;
  }

  _createClass(PageContent, [{
    key: 'handleClick',
    value: function handleClick(event) {
      if (event) event.preventDefault();
      this.setState({ myText: 'Text changed!' });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'noscript',
          null,
          _react2.default.createElement('img', { src: 'https://placeimg.com/300/200/animals', width: '300', height: '200' })
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'a',
            { href: '#', onClick: this.handleClick },
            'Change the text'
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          this.state.myText
        )
      );
    }
  }]);

  return PageContent;
}(_react2.default.Component);

exports.default = PageContent;