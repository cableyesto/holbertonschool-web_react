import notificationsReducer, { markNotificationAsRead, showDrawer, hideDrawer, fetchNotifications } from "../../features/notifications/notificationsSlice"
import mockAxios from 'jest-mock-axios';

afterEach(() => {
  mockAxios.reset();
});

const mockNotificationsResponse = {
  notifications: [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: '' } }
  ]
};

const initialState = {
  notifications: [],
  displayDrawer: true
}

const markedAsReadNotificationsResponse = {
  notifications: [
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: '' } }
  ]
};

test("Returns the correct initial state by default", () => {
  const state = notificationsReducer(undefined, { type: 'unknown' });
  expect(state.notifications).toStrictEqual([]);
  expect(state.displayDrawer).toBe(true);
})

test("fetches notifications data correctly", async () => {
  // 1. Create a fake dispatch to track what actions are sent
  const dispatch = jest.fn();
  const getState = jest.fn();

  // 2. Call fetchNotifications (it returns a function, so we call that too)
  const promise = fetchNotifications()(dispatch, getState, null);

  // 3. Mock what the API returns
  mockAxios.mockResponse({
    data: mockNotificationsResponse
  });

  // 4. Wait for the promise to finish
  await promise;

  // 5. Expect that dispatch is called during pending and fulfilledAction (2 times total)
  expect(dispatch).toHaveBeenCalledTimes(2);

  // 6. Get the fulfilledAction from the second dispatch call
  const fulfilledAction = dispatch.mock.calls[1][0];

  // 7. Test the structure: Expect payload to be an array with 3 items
  expect(fulfilledAction.payload).toHaveLength(3);
  expect(Array.isArray(fulfilledAction.payload)).toBe(true);
  expect(fulfilledAction.payload.length).toBeGreaterThan(0);

  // 8. Test that notification id 3 was updated with getLatestNotification()
  const notificationId3 = fulfilledAction.payload.find(notif => notif.id === 3);
  expect(notificationId3).toBeDefined();
  expect(notificationId3.html.__html).toBe("<strong>Urgent requirement</strong> - complete by EOD");

  // 9. Test that other notifications (id 1 and 2) are still there unchanged
  expect(fulfilledAction.payload[0]).toEqual({ id: 1, type: 'default', value: 'New course available' });
  expect(fulfilledAction.payload[1]).toEqual({ id: 2, type: 'urgent', value: 'New resume available' });
})

test('Handle fetchNotifications.pending correctly', () => {
  const action = { type: fetchNotifications.pending.type };
  const state = notificationsReducer(initialState, action);

  expect(state).toEqual({
    notifications: [],
    displayDrawer: true
  });
})