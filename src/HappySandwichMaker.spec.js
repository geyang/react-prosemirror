/**
 * Created by ge on 6/23/16.
 */
import React, {Component, PropTypes} from "react";

var {number, string} = PropTypes;
export default class HappySandwichMaker extends Component {
  static propTypes = {
    style: string.isRequired,
  };

  render() {
    return (
      <div>
        <button style={{
        }}>I am a giant red button (and I'm not flat)</button>
      </div>
    );
  }
}
