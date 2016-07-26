/**
 * Created by ge on 6/23/16.
 */
import React, {Component, PropTypes} from "react";
import Highlight from '@episodeyang/react-highlight.js';
import autobind from 'autobind-decorator';
import ProseMirror from "./ProseMirror";
import {schema} from 'prosemirror/src/schema-basic';
// todo: update to 'prosemirror/dist/commands' for >v0.8.3
import {commands} from 'prosemirror/src/edit/commands';
import 'prosemirror/dist/menu/menubar'
import 'prosemirror/dist/menu/tooltipmenu'
import 'prosemirror/dist/menu/menu'
import {Flex, FlexItem} from "layout-components";

var {number, string} = PropTypes;
const style = {
  border: '8px solid pink',
  minHeight: '200px'
};
const options = {
  menuBar: true,
  historyDepth: 1000
};
@autobind
export default class ProseMirrorExample extends Component {
  componentWillMount() {
    this.setState({doc: undefined, selection: undefined});
  }

  componentDidMount() {
    this.pm = this.refs.ProseMirror.editor;
  }

  onChange(doc, selection) {
    console.log('onChange: ', doc, selection);
    this.setState({doc, selection});
  }

  toggleMark(mark, attr) {
    return ()=> {
      return commands.toggleMark(schema.marks[mark], attr)(this.pm);
    }
  }

  indent() {
    return commands.sinkListItem(schema.node.doc)(this.pm)
  }

  outdent() {
    return commands.liftListItem(schema.node.doc)(this.pm)
  }

  setList(node, attrs) {
    return () => {
      return commands.wrapInList(schema.node[node], attrs)(this.pm)
    }
  }

  render() {
    const {doc, selection} = this.state;
    var prettifiedDoc = undefined;
    try {
      prettifiedDoc = JSON.stringify(doc, null, 4).split('\n')
        .map(string=>("    " + string)).join('\n').slice(4);
    } catch (e) {
      console.log(e);
    }
    return (
      <div>
        <Flex className="control-group" row>
          <FlexItem fixed tagName="button" className="control-button" onClick={this.toggleMark('em')}>Italic</FlexItem>
          <FlexItem fixed tagName="button" className="control-button"
                    onClick={this.toggleMark('strong')}>strong</FlexItem>
          <FlexItem fixed tagName="button" className="control-button"
                    onClick={this.toggleMark('link', {href: 'https://www.episodeyang.com'})}>link</FlexItem>
          <FlexItem fixed tagName="button" className="control-button" onClick={this.toggleMark('code')}>code</FlexItem>
          <FlexItem fixed tagName="button" className="control-button" onClick={this.setList('list_item')}>list</FlexItem>
          <FlexItem fixed tagName="button" className="control-button" onClick={this.indent}>indent</FlexItem>
          <FlexItem fixed tagName="button" className="control-button" onClick={this.outdent}>outdent</FlexItem>
          <FlexItem fluid className="spacer"></FlexItem>
        </Flex>
        <ProseMirror ref='ProseMirror'
                     style={style}
                     onChange={this.onChange}
                     doc={doc}
                     selection={selection}
                     options={options}
        />
        <Highlight>
          {`state = {
    selection: ${JSON.stringify(selection)},
    doc: ${prettifiedDoc}
}`}
        </Highlight>
      </div>
    );
  }
}
