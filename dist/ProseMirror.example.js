'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /**
             * Created by ge on 6/23/16.
             */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHighlight = require('@episodeyang/react-highlight.js');

var _reactHighlight2 = _interopRequireDefault(_reactHighlight);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _ProseMirror = require('./ProseMirror');

var _ProseMirror2 = _interopRequireDefault(_ProseMirror);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var number = _react.PropTypes.number;
var string = _react.PropTypes.string;

var style = {
  border: '8px solid pink',
  minHeight: '200px'
};

var ProseMirrorExample = (0, _autobindDecorator2.default)(_class = function (_Component) {
  _inherits(ProseMirrorExample, _Component);

  function ProseMirrorExample() {
    _classCallCheck(this, ProseMirrorExample);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ProseMirrorExample).apply(this, arguments));
  }

  _createClass(ProseMirrorExample, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ doc: undefined, selection: undefined });
    }
  }, {
    key: 'onChange',
    value: function onChange(doc, selection) {
      console.log('onChange: ', doc, selection);
      this.setState({ doc: doc, selection: selection });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state;
      var doc = _state.doc;
      var selection = _state.selection;

      var prettifiedDoc = undefined;
      try {
        prettifiedDoc = JSON.stringify(doc, null, 4).split('\n').map(function (string) {
          return "    " + string;
        }).join('\n').slice(4);
      } catch (e) {
        console.log(e);
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_ProseMirror2.default, { style: style, onChange: this.onChange, doc: doc, selection: selection }),
        _react2.default.createElement(
          _reactHighlight2.default,
          null,
          'state = {\n    selection: ' + JSON.stringify(selection) + ',\n    doc: ' + prettifiedDoc + '\n}'
        )
      );
    }
  }]);

  return ProseMirrorExample;
}(_react.Component)) || _class;

exports.default = ProseMirrorExample;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(number, 'number', 'src/ProseMirror.example.js');

  __REACT_HOT_LOADER__.register(string, 'string', 'src/ProseMirror.example.js');

  __REACT_HOT_LOADER__.register(style, 'style', 'src/ProseMirror.example.js');

  __REACT_HOT_LOADER__.register(ProseMirrorExample, 'ProseMirrorExample', 'src/ProseMirror.example.js');
})();

;