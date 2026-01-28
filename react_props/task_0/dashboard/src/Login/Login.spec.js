import {render, screen} from '@testing-library/react'
import Login from './Login.jsx'

test('should render one button', () => {
  render(<Login />)

  expect(screen.getByText(/ok/i))
})