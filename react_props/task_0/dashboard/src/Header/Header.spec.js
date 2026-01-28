import {render, screen} from '@testing-library/react'
import Header from './Header.jsx'

test('should render title', () => {
  render(<Header />)

  expect(screen.getByRole('heading')).toHaveTextContent(/School dashboard/i)
})