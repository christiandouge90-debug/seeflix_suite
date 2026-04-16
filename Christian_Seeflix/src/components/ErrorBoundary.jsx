import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    this.setState({ error, info });
    // You could also log to an external service here
    console.error("Uncaught error in React tree:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 30 }}>
          <h2>Une erreur est survenue dans l'application</h2>
          <p style={{ color: "#a00" }}>{String(this.state.error)}</p>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.info && this.state.info.componentStack}
          </details>
          <p>Regardez la console pour plus de détails.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
