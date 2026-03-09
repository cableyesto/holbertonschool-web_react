### Task 5. Modernizing the Parent

</summary>

In this task, you'll continue modernizing the project components by updating the `App.jsx` file

**Instructions:**

Apply the same class-to-function component conversion pattern, focusing on state management in functional components.

**Migrate the state management from class-based to functional components by:**

- Converting the class state object into individual hooks using the appropriate React hooks:
  - Initialize a state variable `displayDrawer` and its setter function `setDisplayDrawer` with an initial value of `true`
  - Initialize a state variable `user` and its setter function `setUser` with an initial value of the `context user object`
  - Initialize a state variable `notifications` and its setter function `setNotifications` with an initial value of the `notificationsList array`
  - Update the rest of the code to reflect the changes mentioned above
- Remove the `handleKeydown` function and its associated lifecycle methods
- Update the handler functions (`logIn`, `logOut`, and `markNotificationAsRead`) to follow the functional component patterns:
  - Ensure all functionality remains identical to the previous implementation
  - Follow React's immutability principles for state updates

**Tip:**

- Memoize callback functions to maintain reference stability and prevent unnecessary re-renders

**Tests:**

- Test the functionality of `handleDisplayDrawer` and `handleHideDrawer`
- Test user state mutations in logIn function (verify email, password, and isLoggedIn are updated)
- Test user state mutations in logOut function (verify isLoggedIn is set to false, email and password are cleared)

**Requirements:**

- Ensure all the application's features work as expected and function correctly
- All unit tests must be updated/refactored to reliably test the transition from class-based to functional components
- Ensure there are no console errors or warnings
- The code should have no lint errors

<img src="readme_screenshot_1.gif">
