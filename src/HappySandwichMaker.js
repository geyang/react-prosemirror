/*
 * Created by ge on 6/23/16.
 */
import React, {Component, PropTypes} from "react";

var {func, bool, string, oneOf} = PropTypes;

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
    // console.log([children]);
    return (
      <div>
        <button style={{     }}>
          I am a giant red button (and I'm not flat)
        </button>
        <pre>
          {children}
        </pre>
      </div>
    );
  }
}
