import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NotificationItem from './NotificationItem.jsx';

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

// Clean up
afterEach(() => {
  jest.restoreAllMocks()
})

test('should called the prop function on click event', async () => {
  const mockProp = jest.fn()

  render(<NotificationItem type="urgent" value="New resume available" markAsRead={mockProp} />);

  const item = screen.getByRole('listitem');
  const user = userEvent.setup()
  await user.click(item)

  expect(mockProp).toHaveBeenCalledTimes(1)
})
