'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _Readme = require('./Readme');

var _Readme2 = _interopRequireDefault(_Readme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var string = (0, _server.renderToString)(_react2.default.createElement(_Readme2.default, null)); /**
                                                                                                  * Created by ge on 6/26/16.
                                                                                                  */

console.log(string);