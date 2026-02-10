import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Login from './Login.jsx'

test('should render one button', () => {
  render(<Login />)

  expect(screen.getByText(/ok/i))
})

// Additionnal tests for task 1
test('should verify that correct elements are rendered', () => {
  render(<Login />)

  const emailInput = screen.getByLabelText(/email/i)
  const passwordInput = screen.getByLabelText(/password/i)
  const labels = screen.getAllByText(/email|password/i)
  const button = screen.getByRole('button')

  expect(emailInput).toBeInTheDocument()
  expect(passwordInput).toBeInTheDocument()
  expect(labels).toHaveLength(2)
  expect(button).toBeInTheDocument()
})

test('should focus on the 2 inputs when the related label is clicked', async () => {
  render(<Login />)

  // email focus
  const emailInput = screen.getByLabelText(/email/i)
  const emailLabel = screen.getByText(/email/i)

  await userEvent.click(emailLabel)

  expect(emailInput).toHaveFocus()
   
  // password focus
  const passwordInput = screen.getByLabelText(/password/i)
  const passwordLabel = screen.getByText(/password/i)

  await userEvent.click(passwordLabel)

  expect(passwordInput).toHaveFocus()
})