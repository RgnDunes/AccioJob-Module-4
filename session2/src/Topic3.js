// workaround using setState callback function parameter

import React, { Component } from "react";

export default class Topic3 extends Component {
  state = {
    inp: "",
    consoledValue: "",
  };

  handleOnClick = () => {
    console.log("1 : ", this.state.consoledValue);
    this.setState({ consoledValue: this.state.inp }, () => {
      console.log("2 : ", this.state.consoledValue);
    });
    console.log("3 : ", this.state.consoledValue);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inp}
          onChange={(e) => {
            this.setState({ inp: e.target.value });
          }}
        />
        <button onClick={this.handleOnClick}>Console me out!</button>
      </div>
    );
  }
}
