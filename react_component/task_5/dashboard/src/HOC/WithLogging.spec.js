import {Component} from 'react'
import {render, screen, cleanup} from '@testing-library/react'
import WithLogging from './WithLogging.jsx'

class MockApp extends Component {
  render () {
    return (
      <h1>
        Hello from Mock App Component
      </h1>
    )
  }
}

afterEach(cleanup)

test('should render a title', () => {
  const WithLoggingHOC = WithLogging(MockApp)

  render(<WithLoggingHOC/>)

  expect(screen.getByRole('heading', {level: 1})).toBeInTheDocument()
  expect(screen.getByText(/Hello from Mock App Component/i)).toBeInTheDocument()
})
