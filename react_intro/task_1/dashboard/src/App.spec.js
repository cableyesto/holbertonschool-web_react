import {expect, test} from '@jest/globals';
import {render, screen} from '@testing-library/react'
import App from './App.jsx'

test('should render title', () => {
  render(<App />)

  expect(screen.getByRole('heading')).toHaveTextContent(/School dashboard/i)
})

test('should render two paragraphs', () => {
  render(<App />)

  const paragraphs = screen.getAllByRole('paragraph')

  expect(paragraphs[0]).toHaveTextContent(/Login to access the full dashboard/i)
  expect(paragraphs[1]).toHaveTextContent(/Copyright 2026 - holberton School/i)
})

test('should render the image', () => {
  render(<App />)

  expect(screen.getByRole('img')).toHaveAttribute(
    'alt',
    expect.stringMatching(/holberton logo/i)
  )
})