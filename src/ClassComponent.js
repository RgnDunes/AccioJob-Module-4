// Class Component

import React, { Component } from "react";

export default class ClassComponent extends Component {
  state = {
    counter: 0,
  };

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <div>
        Counter : {this.state.counter}
        <br />
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
