import * as React from 'react'

interface IState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false } as IState
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true }
  }

  componentDidCatch(error: any, errorInfo: any) {}

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary
