/*
 * Created by ge on 6/23/16.
 */
import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import autobind from 'autobind-decorator';
import prosemirror from 'prosemirror'
import {schema} from 'prosemirror/dist/schema-basic';

var {any, func, bool, string, oneOf} = PropTypes;

/**
 * description of the component
 */
export default class ProseMirror extends Component {

  static propTypes = {
    doc: any,
    selection: any,
    onChange: func,
    options: any
  };

  static defaultProps = {
    options: {}
  };

  componentWillMount() {
    this.setState({currentIndex: 0});
  }

  _mountEditor() {
    const {doc, options} = this.props;
    this.editorNode = this.refs.editorNode;
    this.editor = new prosemirror.ProseMirror({
        place: this.editorNode,
        schema,
        doc,
        ...options
      }
    );
    this.editor.on.change.add(this.onChange);
    this.editor.on.selectionChange.add(this.onSelectionChange);
  }

  componentDidMount() {
    this._mountEditor()
  }

  componentWillReceiveProps(props) {
    const {doc, selection, options} = props;
    if (doc !== this.props.doc || selection !== this.props.selection) {
      console.log('update doc -------------');
      this._updateEditor(doc, selection)
    }
    if (options !== this.props.options) {
      console.log('update options =============');
      this._removeProseMirror();
      this._mountEditor()
    }
  }

  componentWillUnmount() {
    this._removeProseMirror();
  }

  _removeProseMirror() {
    Array.prototype.slice.call(this.editorNode.childNodes).map(this.editorNode.removeChild.bind(this.editorNode));
  }

  _updateEditor(doc, selection) {
    this._silent = true;
    this.editor.setDoc(this.editor.schema.nodeFromJSON(doc), new prosemirror.Selection(selection.from, selection.to));
    this._silent = false;
  }

  @autobind
  onChange() {
    if (this._silent) return;
    const {onChange} = this.props;
    if (onChange) onChange({
      selection: {from: this.editor.selection.from, to: this.editor.selection.to},
      doc: this.editor.doc.toJSON()
    });
  }

  @autobind
  onSelectionChange() {
    if (this._silent) return;
    const {onChange} = this.props;
    if (onChange) onChange({
      selection: {from: this.editor.selection.from, to: this.editor.selection.to},
      doc: this.editor.doc.toJSON()
    });
  }

  render() {
    var {doc, selection, onChange, options, children, ..._props} = this.props;
    return (
      <div ref="editorNode" {..._props}></div>
    );
  }
}
