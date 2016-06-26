/*
 * Created by ge on 6/23/16.
 */
import React, {Component, PropTypes} from "react";

var {func, bool, string, oneOf} = PropTypes;

const style = {
  backgroundColor: "red",
  color: "white",
  fontSize: "23px",
  fontWeight: 600,
  lineHeight: "23px",
  padding: "12px",
  border: "none",
  borderRight: "solid 2px #444",
  borderBottom: "solid 2px #444",
  borderRadius: "4px"
};
/**
 * description of the component
 */
export default class HappySandwichMaker extends Component {

  static propTypes = {
    /** Whether we add lattice */
    lattice: bool,
    /** Which kind of cheese? */
    cheese: oneOf(["PepperJack", "Swiss", "American"]).isRequired,
    /**
     * The protein we add into the sandwich.
     * For example:
     * - Teriyaki Chicken
     * - Phily-cheese Steak
     * - Tuna Salad
     * - Seafood Salad
     * - fake chicken patty (veg)
     * */
    protein: string.isRequired,
    /**
     * the bite event handler. Called when you bite into the sandwich
     */
    onBite: func
  };

  static defaultProps = {
    lattice: true
  };

  render() {
    var {children} = this.props;
    return (
      <div style={{"display": "flex", flexDirection: "row", justifyContent: "center", width: "100%"}}>
        <button style={{...style, flex: "0 0 auto"}}>
          I am a giant red button
        </button>
      </div>
    );
  }
}
