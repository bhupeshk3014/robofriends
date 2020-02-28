import React, { Component } from "react";

class ErrorBoundar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErroro: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasErroro: true });
  }

  render() {
    if (this.state.hasErroro) {
      return <h1>Oooops. That is not good </h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundar;
