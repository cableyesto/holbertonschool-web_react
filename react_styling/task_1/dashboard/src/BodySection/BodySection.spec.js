import {render, screen} from '@testing-library/react'
import BodySection from './BodySection.jsx'

test('should render correctly the title as h2', () => {
  render(<BodySection title='This is the title' />)

  const title = screen.getByRole('heading', {level: 2})
  expect(title).toBeInTheDocument()
  expect(title).toHaveTextContent('This is the title')
})

test('should render two children passed to the component', () => {
  render(
    <BodySection title='This is the title'>
      <div>Children 1</div>
      <p>Children 2</p>
    </BodySection>
  )

  const title = screen.getByRole('heading', {level: 2})
  const numberOfChildren = title.parentElement.children.length

  expect(numberOfChildren - 1).toBe(2)
})
