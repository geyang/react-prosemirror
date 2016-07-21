"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Readme;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactMarkdownit = require("react-markdownit");

var _reactMarkdownit2 = _interopRequireDefault(_reactMarkdownit);

var _reactHighlight = require("@episodeyang/react-highlight.js");

var _reactHighlight2 = _interopRequireDefault(_reactHighlight);

var _reactComponentPropsTable = require("react-component-props-table");

var _reactComponentPropsTable2 = _interopRequireDefault(_reactComponentPropsTable);

var _ProseMirror = require("../ProseMirror.example");

var _ProseMirror2 = _interopRequireDefault(_ProseMirror);

var _ProseMirror3 = require("!!raw!../ProseMirror.example");

var _ProseMirror4 = _interopRequireDefault(_ProseMirror3);

var _ProseMirror5 = require("!!react-docgen!../ProseMirror");

var _ProseMirror6 = _interopRequireDefault(_ProseMirror5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); } /**
                                                                                                                   * Created by ge on 6/24/16.
                                                                                                                   */


function Readme(_ref) {
  _objectDestructuringEmpty(_ref);

  return _react2.default.createElement(
    _reactMarkdownit2.default,
    { stripIndent: true },
    "\n      # React ES6 Component Template\n\n      [![github](https://img.shields.io/github/downloads/episodeyang/react-prosemirror/total.svg?style=flat-square&maxAge=2592000)]()\n\n      A template repo for react components written with es6 syntax.\n\n      ## Usage (as a template)\n\n      ~~~shell\n      git clone https://github.com/episodeyang/react-prosemirror <name of your new component>\n      cd <name of your new component>\n      rm -rf .git\n      rm -rf dist\n\n      # now do your git init, git add/coommit/push\n      # replace \"react-prosemirror\" with your own\n      # replace \"react es6 template\" with your own\n      # replace \"react es6 component\" with you own etc.\n      ~~~\n\n      After cloning from gitHub, you can run the example by doing\n      ~~~shell\n      npm run serve-docs\n      ~~~\n\n      And then open your browser at [http://localhost:5000](http://localhost:5000).\n\n      This one calls webpack (you should look at the `package.json` source) and uses the\n      webpack-dev-server to serve from `./src/example/` with hot module reloading.\n\n      ### How is this README written:\n      This readme is written with react and markdown. It includes:\n      1. a **live react component demo**\n      2. a table of the component's props that is generated automatically\n      3. **source** of the example component\n\n      ## Example Component: `ProseMirror`\n      This component makes you a delicious Subway sandwich.\n      ",
    _react2.default.createElement(_ProseMirror2.default, null),
    "### Props",
    "This table below is generated automatically",
    _react2.default.createElement(
      "div",
      { className: "table-container horizontal-scroll flex-column center" },
      _react2.default.createElement(_reactComponentPropsTable2.default, { propMetaData: _ProseMirror6.default.props })
    ),
    "\n      ### Usage Example\n\n      The source code below of the example above is loaded using the webpack raw loader.",
    _react2.default.createElement(
      _reactHighlight2.default,
      null,
      _ProseMirror4.default
    ),
    "\n      ## Develop\n\n      1. First make your changes, then git commit. Use `serve-docs` to view live update at [http://localhost:5000](http://localhost:5000).\n      2. run `build-docs`, `build-static-docs`, `gh-pages`\n      3. Then remember to push to master.\n\n      "
  );
}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Readme, "Readme", "src/example/Readme.js");
})();

;
