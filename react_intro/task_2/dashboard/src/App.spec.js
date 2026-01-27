import {expect, test} from '@jest/globals';
import {render, screen} from '@testing-library/react'
import App from './App.jsx'

test('should render title', () => {
  render(<App />)

  expect(screen.getByRole('heading')).toHaveTextContent(/School dashboard/i)
})

test('should render two paragraphs', () => {
  render(<App />)

  expect(screen.getByText(/Login to access the full dashboard/i))
  expect(screen.getByText(/Copyright 2026 - holberton School/i))
})

test('should render the image', () => {
  render(<App />)

  expect(screen.getByRole('img')).toHaveAttribute(
    'alt',
    expect.stringMatching(/holberton logo/i)
  )
})

test('should render two inputs for login', () => {
  render(<App />)

  const pwdInput = screen.getByLabelText(/password/i)

  expect(
    screen.getByRole('textbox', { name: /email/i })
  ).toBeInTheDocument()
  expect(
    pwdInput.closest('input').value
  ).toEqual('')
})

test('should render two label elements', () => {
  render(<App />)

  expect(screen.getByLabelText(/Email/i))
  expect(screen.getByLabelText(/Password/i))
})

test('should render one button', () => {
  render(<App />)

  expect(screen.getByRole('button')).toHaveTextContent('OK')
})
