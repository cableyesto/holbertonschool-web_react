import {render, screen} from '@testing-library/react'
import NotificationsItem from './NotificationsItem.jsx'

test('should render default NotificationsItem in blue', () => {
  render(
    <NotificationsItem
      type='default'
      value='Bob'
      html=''
    />
  )

  const liElement = screen.getByText(/Bob/i)

  expect(liElement.dataset.notificationType).toBe('default')
  expect(liElement.style.getPropertyValue('color')).toBe('blue')
})

test('should render urgent NotificationsItem in red', () => {
  render(
    <NotificationsItem
      type='urgent'
      value='Bob'
      html=''
    />
  )

  const liElement = screen.getByText(/Bob/i)

  expect(liElement.dataset.notificationType).toBe('urgent')
  expect(liElement.style.getPropertyValue('color')).toBe('red')
})
