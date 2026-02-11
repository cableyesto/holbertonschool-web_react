import {render, screen} from '@testing-library/react'
import Footer from './Footer.jsx'

test('should render copyright', () => {
  render(<Footer isIndex={true} />)

  const date = new Date();
  const year = date.getFullYear();

  expect(screen.getByText(new RegExp(`^Copyright ${year} - holberton School$`, 'i')))
})

// Additionnal test for task 1
test('should render the paragraph element with correct copyright', () => {
  render(<Footer isIndex={true} />)

  const date = new Date();
  const year = date.getFullYear();

  expect(screen.getByRole('paragraph')).toHaveTextContent(
    new RegExp(`^Copyright ${year} - holberton School$`, 'i')
  )
})