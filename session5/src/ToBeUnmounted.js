import React, { Component } from "react";

export default class ToBeUnmounted extends Component {
  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    return <div>ToBeUnmounted</div>;
  }
}
