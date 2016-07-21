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
                                                                                                                   * Created by ge on 7/21/16.
                                                                                                                   */


function Readme(_ref) {
  _objectDestructuringEmpty(_ref);

  return _react2.default.createElement(
    _reactMarkdownit2.default,
    { stripIndent: true },
    "\n      # React-ProseMirror demo\n      ## Usage\n      ",
    _react2.default.createElement(
      _reactHighlight2.default,
      null,
      "npm install @episodeyang/react-prosemirror"
    ),
    "\n      ### How is this README written:\n      This readme is written with react and markdown. It includes:\n      1. a **live react-prosemirror component demo**\n      2. a table of the component's props that is generated automatically\n      3. **source** of the example component\n\n      ## Example Component: `ProseMirror`\n      This component provides both the selection and the serialized document json object\n      `onChange`.\n\n      ### Why is this important?\n      With an input element like this rich text editor, the cursor position (\"selection\") is part of the component\n      state. Typically when we think of updating the value of such a component we only think of updating\n      the content. However if we do that, the cursor position will be lost each time when such update happens,\n      and the user will notice that the cursor jumps to the beginning of the input box on every keystroke.\n\n      With redux's synchronous loop, it is necessary for the component to handle document value change and\n      selection changes together.\n\n      This react component does that.\n      ",
    "### Props",
    "This table below is generated automatically",
    _react2.default.createElement(
      "div",
      { className: "table-container horizontal-scroll flex-column center" },
      _react2.default.createElement(_reactComponentPropsTable2.default, { propMetaData: _ProseMirror6.default.props })
    ),
    "\n      ### Demo\n\n      Below is a live demo. You can open the Chrome React developer tool to look at the updated props.\n      ",
    _react2.default.createElement(_ProseMirror2.default, null),
    "\n      ### Known Issues\n\n      There are a few known issues that I am working on. However feel free to file whatever problem you ran into\n      on github! You can get there by clicking the issue tracker on the top right of this page.\n\n      ### Usage Example\n\n      The source code below of the example above is loaded using the webpack raw loader.",
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