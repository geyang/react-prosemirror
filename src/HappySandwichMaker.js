/*
 * Created by ge on 6/23/16.
 */
import React, {Component, PropTypes} from "react";

var {func, bool, string, oneOf} = PropTypes;

const style = {
  backgroundColor: "red",
  margin: 0,
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

  wisdoms = {
    0: {text: "Click Me!", action: "next", color: "#49CAF5"},
    1: {text: "I can make you sandwiches!", action: "next", color: "rgb(251, 155, 165)"},
    2: {
      text: "Here are the places to pick it up!",
      action: "link",
      href: "http://www.yelp.com/c/sf/sandwiches",
      color: "#A1D490"
    }
  };

  componentWillMount() {
    this.setState({currentIndex: 0});
  }

  getCurrentState() {
    return this.wisdoms[this.state.currentIndex];
  }

  next() {
    console.log(this);
    this.setState({currentIndex: (this.state.currentIndex || 0) + 1})
  }

  render() {
    var {children} = this.props;
    var {color, text, action, href} = this.getCurrentState();
    return (
      <div style={{"display": "flex", flexDirection: "row", justifyContent: "center", width: "100%"}}>
        {(action == "next") ?
          <button style={{...style, flex: "0 0 auto", backgroundColor: color}} onClick={this.next.bind(this)}>
            {text}
          </button> :
          <a style={{...style, flex: "0 0 auto", backgroundColor: color}} href={href}>
            {text}
          </a>
        }

      </div>
    );
  }
}
