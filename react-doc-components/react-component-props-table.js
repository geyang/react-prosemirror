/**
 * Created by ge on 6/19/16.
 */

import React, {Component, PropTypes} from "react";
import Markdown from "react-markdownit";

export default function ComponentPropsTable(props) {
  var {className="", propMetaData=[], ..._props} = props;
  if (className) className += " component-props-table";

  return (
    <table className={className} src={'some list'} {..._props}>
      <thead>
      <tr>
        <th>Prop Name</th>
        <th>Type</th>
        <th>Is Required</th>
        <th>Default Value</th>
        <th>Description</th>
      </tr>
      </thead>
      <tbody>
      {Object.keys(propMetaData).map((key)=> {
        var prop = propMetaData[key];
        return (
          <tr key={key}>
            <td style={{color: "rgb(17, 147, 154)"}}>{key}</td>
            <td>{(prop.type ? prop.type.name : "")}</td>
            {(prop.required ?
              <td style={{color: "rgb(255, 76, 34)"}}>required</td>
              : <td style={{color: "#c6c6c6"}}>optional</td>)}
            {(prop.defaultValue ?
              <td style={{color: "rgb(236, 171, 32)"}}>{prop.defaultValue.value}</td>
              : <td style={{color: "#c6c6c6"}}>none</td>)}
            <Markdown tagName="td">{prop.description}</Markdown>
          </tr>
        );
      })}
      </tbody>
    </table>
  )
}
