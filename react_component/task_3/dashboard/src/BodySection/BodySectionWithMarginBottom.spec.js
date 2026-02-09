import {render, screen} from '@testing-library/react'
import BodySectionWithMargin from './BodySectionWithMarginBottom.jsx'

test('should render correctly the title as h2', () => {
  render(<BodySectionWithMargin />)

  const title = screen.getByRole('heading', {level: 2})
  const componentDiv = title.closest('.bodySectionWithMargin')

  expect(componentDiv).toHaveClass('bodySectionWithMargin')
  expect(componentDiv).toBeInTheDocument()
})

test('should render BodySection component ', () => {
  render(<BodySectionWithMargin />)

  const title = screen.getByRole('heading', {level: 2})
  const componentDiv = title.closest('.bodySection')

  expect(componentDiv).toHaveClass('bodySection')
  expect(componentDiv).toBeInTheDocument()
})
