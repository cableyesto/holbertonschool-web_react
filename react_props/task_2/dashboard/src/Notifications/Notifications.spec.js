// import {expect, test, jest} from '@jest/globals'
import {render, fireEvent, screen} from '@testing-library/react'
import Notifications from './Notifications.jsx'

test('should render title', () => {
  render(<Notifications />)

  expect(screen.getByText(/Here is the list of notifications/i))
})

test('should render button in notifications', () => {
  render(<Notifications />)

  expect(screen.getByLabelText(/close/i)) // can get even aria-label
})

// old test prior task 2 on react props
// not working since Notifications is expecting props to have list
/*
test('should rendered 3 li elements', () => {
  render(<Notifications />)

  expect(screen.getAllByRole('listitem').length).toBe(3)
})
*/

test('blob', () => {
  const logSpy = jest.spyOn(console, 'log')
  render(<Notifications />)

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
  render(<Notifications notifications={notificationsList}/>)

  expect(screen.getAllByRole('listitem').length).toBe(3)
})
