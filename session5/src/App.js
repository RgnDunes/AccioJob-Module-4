import React, { Component } from "react";

import ToBeUnmounted from "./ToBeUnmounted";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { hello: "World!", inp: "", mounted: true };
    console.log("initialization");
  }

  UNSAFE_componentWillMount() {
    console.log("Component will mount.");
  }

  componentDidMount() {
    console.log("Component did mount.");
  }

  changeState() {
    this.setState({ hello: "Doraemon!" });
  }

  render() {
    console.log("render");
    return (
      <div>
        State Value : {this.state.hello}
        <div>
          <input
            type="text"
            value={this.state.inp}
            onChange={(e) => {
              const updatedState = { ...this.state };
              updatedState.inp = e.target.value;
              this.setState(updatedState);
            }}
          />
          <button
            onClick={() => {
              const updatedState = { ...this.state };
              updatedState.mounted = false;
              this.setState(updatedState);
            }}
          >
            Unmount the component from the DOM
          </button>
        </div>
        {this.state.mounted && <ToBeUnmounted />}
      </div>
    );
  }

  shouldComponentUpdate(newProps, newState) {
    console.log("should component update : ", newProps, newState);
    return true;
  }

  UNSAFE_componentWillUpdate() {
    console.log("component will update");
  }

  componentDidUpdate() {
    console.log("component did update");
  }
}
