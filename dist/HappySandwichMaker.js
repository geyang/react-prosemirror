"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2; /*
                     * Created by ge on 6/23/16.
                     */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var func = _react.PropTypes.func;
var bool = _react.PropTypes.bool;
var string = _react.PropTypes.string;
var oneOf = _react.PropTypes.oneOf;


var style = {
  backgroundColor: "red",
  margin: 0,
  color: "white",
  fontSize: "23px",
  fontWeight: 600,
  lineHeight: "23px",
  padding: "12px",
  border: "none",
  borderRight: "solid 2px #444",
  borderBottom: "solid 2px #444",
  borderRadius: "4px"
};
/**
 * description of the component
 */
var HappySandwichMaker = (_temp2 = _class = function (_Component) {
  _inherits(HappySandwichMaker, _Component);

  function HappySandwichMaker() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, HappySandwichMaker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(HappySandwichMaker)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.wisdoms = {
      0: { text: "Click Me!", action: "next", color: "#49CAF5" },
      1: { text: "I can make you sandwiches!", action: "next", color: "rgb(251, 155, 165)" },
      2: {
        text: "Here are the places to pick it up!",
        action: "link",
        href: "http://www.yelp.com/c/sf/sandwiches",
        color: "#A1D490"
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HappySandwichMaker, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({ currentIndex: 0 });
    }
  }, {
    key: "getCurrentState",
    value: function getCurrentState() {
      return this.wisdoms[this.state.currentIndex];
    }
  }, {
    key: "next",
    value: function next() {
      console.log(this);
      this.setState({ currentIndex: (this.state.currentIndex || 0) + 1 });
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;

      var _getCurrentState = this.getCurrentState();

      var color = _getCurrentState.color;
      var text = _getCurrentState.text;
      var action = _getCurrentState.action;
      var href = _getCurrentState.href;

      return _react2.default.createElement(
        "div",
        { style: { "display": "flex", flexDirection: "row", justifyContent: "center", width: "100%" } },
        action == "next" ? _react2.default.createElement(
          "button",
          { style: _extends({}, style, { flex: "0 0 auto", backgroundColor: color }), onClick: this.next.bind(this) },
          text
        ) : _react2.default.createElement(
          "a",
          { style: _extends({}, style, { flex: "0 0 auto", backgroundColor: color }), href: href },
          text
        )
      );
    }
  }]);

  return HappySandwichMaker;
}(_react.Component), _class.propTypes = {
  /** Whether we add lattice */
  lattice: bool,
  /** Which kind of cheese? */
  cheese: oneOf(["PepperJack", "Swiss", "American"]).isRequired,
  /**
   * The protein we add into the sandwich.
   * For example:
   * - Teriyaki Chicken
   * - Phily-cheese Steak
   * - Tuna Salad
   * - Seafood Salad
   * - fake chicken patty (veg)
   * */
  protein: string.isRequired,
  /**
   * the bite event handler. Called when you bite into the sandwich
   */
  onBite: func
}, _class.defaultProps = {
  lattice: true
}, _temp2);
exports.default = HappySandwichMaker;