import {render, screen} from '@testing-library/react'
import NotificationItem from './NotificationItem.jsx'

test('should render default NotificationItem in blue', () => {
  render(
    <NotificationItem
      type='default'
      value='Bob'
      html=''
    />
  )

  const liElement = screen.getByText(/Bob/i)

  expect(liElement.dataset.notificationType).toBe('default')
  expect(liElement.style.getPropertyValue('color')).toBe('blue')
})

test('should render urgent NotificationItem in red', () => {
  render(
    <NotificationItem
      type='urgent'
      value='Bob'
      html=''
    />
  )

  const liElement = screen.getByText(/Bob/i)

  expect(liElement.dataset.notificationType).toBe('urgent')
  expect(liElement.style.getPropertyValue('color')).toBe('red')
})
