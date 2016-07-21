/**
 * Created by ge on 6/23/16.
 */
import React, {Component, PropTypes} from "react";
import autobind from 'autobind-decorator';
import ProseMirror from "./ProseMirror";

var {number, string} = PropTypes;
const style = {
  border: '8px solid pink',
  height: '500px'
};
@autobind
export default class ProseMirrorExample extends Component {
  componentWillMount() {
    console.log('will mount');
    this.setState({doc: undefined, selection: {}});
  }

  onChange(state) {
    const {doc, selection} = state;
    // console.log(doc, selection);
    this.setState({doc, selection})
  }

  render() {
    const {doc, selection} = this.state;
    return (
      <ProseMirror style={style} onChange={this.onChange} doc={doc} selection={selection}/>
    );
  }
}
