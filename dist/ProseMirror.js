'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _class2, _temp; /*
                                            * Created by ge on 6/23/16.
                                            */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _prosemirror = require('prosemirror');

var _prosemirror2 = _interopRequireDefault(_prosemirror);

var _schemaBasic = require('prosemirror/dist/schema-basic');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var any = _react.PropTypes.any;
var func = _react.PropTypes.func;
var bool = _react.PropTypes.bool;
var string = _react.PropTypes.string;
var oneOf = _react.PropTypes.oneOf;

/**
 * description of the component
 */

var ProseMirror = (_class = (_temp = _class2 = function (_Component) {
  _inherits(ProseMirror, _Component);

  function ProseMirror() {
    _classCallCheck(this, ProseMirror);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ProseMirror).apply(this, arguments));
  }

  _createClass(ProseMirror, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ currentIndex: 0 });
    }
  }, {
    key: '_mountEditor',
    value: function _mountEditor() {
      var _props2 = this.props;
      var doc = _props2.doc;
      var options = _props2.options;

      this.editorNode = this.refs.editorNode;
      this.editor = new _prosemirror2.default.ProseMirror(_extends({
        place: this.editorNode,
        schema: _schemaBasic.schema,
        doc: doc
      }, options));
      this.editor.on.change.add(this.onChange);
      this.editor.on.selectionChange.add(this.onSelectionChange);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._mountEditor();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      var doc = props.doc;
      var selection = props.selection;
      var options = props.options;

      if (doc !== this.props.doc || selection !== this.props.selection) {
        console.log('update doc -------------');
        // todo: more conservative update
        this._updateEditor(doc, selection);
      }
      if (options !== this.props.options) {
        console.log('update options =============');
        this._removeProseMirror();
        this._mountEditor();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._removeProseMirror();
    }
  }, {
    key: '_removeProseMirror',
    value: function _removeProseMirror() {
      Array.prototype.slice.call(this.editorNode.childNodes).map(this.editorNode.removeChild.bind(this.editorNode));
    }
  }, {
    key: '_updateEditor',
    value: function _updateEditor(doc, selection) {
      this._silent = true;
      this.editor.setDoc(this.editor.schema.nodeFromJSON(doc));
      var end = selection.from;
      if (end === selection.head) end = selection.to;
      this.editor.setTextSelection(end, selection.head);
      this.editor.flush();
      this._silent = false;
    }
  }, {
    key: 'onChange',
    value: function onChange() {
      // if (this._silent) return;
      // const {onChange} = this.props;
      // const {from, to} = this.editor.selection;
      // if (onChange) onChange(
      //   this.editor.doc.toJSON(),
      //   {from, to}
      // );
    }
  }, {
    key: 'onSelectionChange',
    value: function onSelectionChange() {
      if (this._silent) return;
      var onChange = this.props.onChange;
      var _editor$selection = this.editor.selection;
      var from = _editor$selection.from;
      var to = _editor$selection.to;
      var head = _editor$selection.head;

      if (onChange) onChange(this.editor.doc.toJSON(), { from: from, to: to, head: head });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props;
      var doc = _props3.doc;
      var selection = _props3.selection;
      var onChange = _props3.onChange;
      var options = _props3.options;
      var children = _props3.children;

      var _props = _objectWithoutProperties(_props3, ['doc', 'selection', 'onChange', 'options', 'children']);

      return _react2.default.createElement('div', _extends({ ref: 'editorNode' }, _props));
    }
  }]);

  return ProseMirror;
}(_react.Component), _class2.propTypes = {
  doc: any,
  selection: any,
  onChange: func,
  options: any
}, _class2.defaultProps = {
  options: {}
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'onChange', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'onChange'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onSelectionChange', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'onSelectionChange'), _class.prototype)), _class);
exports.default = ProseMirror;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(any, 'any', 'src/ProseMirror.js');

  __REACT_HOT_LOADER__.register(func, 'func', 'src/ProseMirror.js');

  __REACT_HOT_LOADER__.register(bool, 'bool', 'src/ProseMirror.js');

  __REACT_HOT_LOADER__.register(string, 'string', 'src/ProseMirror.js');

  __REACT_HOT_LOADER__.register(oneOf, 'oneOf', 'src/ProseMirror.js');

  __REACT_HOT_LOADER__.register(ProseMirror, 'ProseMirror', 'src/ProseMirror.js');
})();

;