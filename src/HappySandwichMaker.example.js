/**
 * Created by ge on 6/23/16.
 */
import React, {Component, PropTypes} from "react";
import HappySandwichMaker from "./HappySandwichMaker";

var {number, string} = PropTypes;
export default class HappySandwichMakerExample extends Component {
  render() {
    return (
      <HappySandwichMaker lattice={true}
                          protein="turkey"
                          cheese="PepperJack"
                          onBite={()=>alert("This is delicious!!")}
      />
    );
  }
}
