/**
* Created by ge on 6/19/16.
*/

import React, {Component, PropTypes} from "react";
import Color from "color";

export default function ReactBadge(props) {
var {className="", subject, status, color, ..._props} = props;
if (className) className += " component-props-table";
var _color = Color(color);

var style = {
  fontSize: "10px",
  color: color,
  height: "1.8em",
  lineHeight: "1.8em",
  backgroundColor: _color.clearer(0.85).rgbaString(),
  border: `1px solid ${color}`,
  padding: "0 0.5em",
  display: "inline-block"
};

return (
  <span style={{display: "inline-block"}}>
    <span style={{...style, borderRight: "none", fontWeight: "500"}}>{subject}</span>
    <span style={style}>{status}</span>
  </span>
)
};
