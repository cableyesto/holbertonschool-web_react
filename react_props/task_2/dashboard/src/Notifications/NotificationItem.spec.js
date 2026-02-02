/*
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
*/

import NotificationItem from './NotificationItem';
import { render, screen } from '@testing-library/react';

describe('NotificationItem', () => {
  test('li has blue color and data-notification-type is default when type is default', () => {
    render(<NotificationItem type="default" value="New course available" />);
    const item = screen.getByRole('listitem');
    expect(item).toHaveStyle({ color: 'blue' });
    expect(item).toHaveAttribute('data-notification-type', 'default');
  });

  test('li has red color and data-notification-type is urgent when type is urgent', () => {
    render(<NotificationItem type="urgent" value="New resume available" />);
    const item = screen.getByRole('listitem');
    expect(item).toHaveStyle({ color: 'red' });
    expect(item).toHaveAttribute('data-notification-type', 'urgent');
  });
});
