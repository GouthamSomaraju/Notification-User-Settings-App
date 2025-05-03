import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: "center", padding: "20px", color: "red" }}>
          <h2>Oops! Something went wrong.</h2>
          <p>Try refreshing the page or contact support.</p>
        </div>
      );
    }
    return this.props.children;
  }
}
