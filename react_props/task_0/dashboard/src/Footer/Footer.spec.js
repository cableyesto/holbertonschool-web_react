import {render, screen} from '@testing-library/react'
import Footer from './Footer.jsx'

test('should render two paragraphs', () => {
  render(<Footer />)

  expect(screen.getByText(/Copyright 2026 - holberton School/i))
})