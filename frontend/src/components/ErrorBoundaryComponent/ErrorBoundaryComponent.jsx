import React, { Component } from 'react'


class ErrorBoundaryComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true
    }
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ha ocurrido un error!!</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundaryComponent
