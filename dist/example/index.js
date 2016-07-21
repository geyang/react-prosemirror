"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactHotLoader = require("react-hot-loader");

var _Readme = require("./Readme");

var _Readme2 = _interopRequireDefault(_Readme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by ge on 6/23/16.
 */
var readmeContainer = document.body.querySelector('#readme-container');
(0, _reactDom.render)(_react2.default.createElement(
  _reactHotLoader.AppContainer,
  null,
  _react2.default.createElement(_Readme2.default, null)
), readmeContainer);

if (module.hot) {
  module.hot.accept('./Readme', function () {
    var NextReadme = require('./Readme').default;
    (0, _reactDom.render)(_react2.default.createElement(
      _reactHotLoader.AppContainer,
      null,
      _react2.default.createElement(NextReadme, null)
    ), readmeContainer);
  });
}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(readmeContainer, "readmeContainer", "src/example/index.js");
})();

;