import {render, screen} from '@testing-library/react'
import Header from './Header.jsx'

test('should render title', () => {
  render(<Header />)

  expect(screen.getByRole('heading')).toHaveTextContent(/School dashboard/i)
})

// Additionnal test for task 1
test('should render the image', () => {
  render(<Header />)

  expect(screen.getByAltText(/holberton logo/i)).toBeInTheDocument()
})

