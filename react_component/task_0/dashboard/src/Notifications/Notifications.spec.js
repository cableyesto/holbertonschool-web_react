// import {expect, test, jest} from '@jest/globals'
import {render, fireEvent, screen} from '@testing-library/react'
import Notifications from './Notifications.jsx'

// old test prior to task 5
/*
test('should render title', () => {
  render(<Notifications />)

  expect(screen.getByText(/Here is the list of notifications/i))
})

test('should render button in notifications', () => {
  render(<Notifications />)

  expect(screen.getByLabelText(/close/i)) // can get even aria-label
})
*/

// old test prior task 2 on react props
// not working since Notifications is expecting props to have list
/*
test('should rendered 3 li elements', () => {
  render(<Notifications />)

  expect(screen.getAllByRole('listitem').length).toBe(3)
})
*/

test('blob', () => {
  const notificationsList = [
    { id: 1, type: 'default', value: 'New course available' }
  ]
  const logSpy = jest.spyOn(console, 'log')
  render(<Notifications notifications={notificationsList}  displayDrawer={true} />)

  fireEvent.click(screen.getByLabelText(/close/i))

  expect(logSpy).toHaveBeenCalledWith(
    expect.stringMatching(/Close button has been clicked/i)
  )
})

test('should render the 3 li elements', () => {
  const notificationsList = [{
    id: 1,
    type: 'default',
    value: 'New course available'
  }, {
    id: 2,
    type: 'urgent',
    value: 'New course available'
  }, {
    id: 3,
    type: 'urgent',
    html: { __html: '<div>Hello world</div>' }
  }]
  render(<Notifications notifications={notificationsList} displayDrawer={true} />)

  expect(screen.getAllByRole('listitem').length).toBe(3)
})

test('should not render notification when displayDrawer is false', () => {
  render(<Notifications notifications={[]} displayDrawer={false} />)

  expect(screen.getByText(/Your Notifications/i)).toBeInTheDocument()
  expect(screen.queryByLabelText(/close/i)).not.toBeInTheDocument()
  expect(screen.queryByText(
    /Here is the list of notifications/i
  )).not.toBeInTheDocument()
  expect(screen.queryByRole('listitem')).not.toBeInTheDocument()
})

test('should render notifications when displayDrawer is true', () => {
  const notificationsList = [{
    id: 1,
    type: 'default',
    value: 'New course available'
  }, {
    id: 2,
    type: 'urgent',
    value: 'New course available'
  }, {
    id: 3,
    type: 'urgent',
    html: { __html: '<div>Hello world</div>' }
  }]
  render(<Notifications notifications={notificationsList} displayDrawer={true} />)

  expect(screen.getByText(/Your Notifications/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/close/i)).toBeInTheDocument()
  expect(screen.getByText(
    /Here is the list of notifications/i
  )).toBeInTheDocument()
  expect(screen.getAllByRole('listitem')[0]).toBeInTheDocument()
  expect(screen.getAllByRole('listitem')[1]).toBeInTheDocument()
  expect(screen.getAllByRole('listitem')[2]).toBeInTheDocument()
})

test('should render notifications when displayDrawer is true and empty notifications', () => {
  const notificationsList = []
  render(<Notifications notifications={notificationsList} displayDrawer={true} />)

  expect(screen.getByText(/Your Notifications/i)).toBeInTheDocument()
  expect(screen.getByText(
    /No new notification for now/i
  )).toBeInTheDocument()
})

