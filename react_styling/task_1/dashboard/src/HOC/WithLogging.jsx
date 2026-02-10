import { Component } from 'react'

const WithLogging = (WrappedComponent) => {
  const wrappedName =
  WrappedComponent.name ||
  'Component'

  class EnhancedWithLogging extends Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        console.log(`Component ${wrappedName} is mounted`)
    }

    componentWillUnmount() {
        console.log(`Component ${wrappedName} is going to unmounted`)
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
        />
      )
    }
  }
  EnhancedWithLogging.displayName = `WithLogging(${wrappedName})`
  return EnhancedWithLogging
}

export default WithLogging
