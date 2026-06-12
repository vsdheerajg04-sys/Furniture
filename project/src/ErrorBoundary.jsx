import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "20px" }}>
          <h2>Something went wrong.</h2>
          <p>
            Unable to load furniture products at the moment.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;