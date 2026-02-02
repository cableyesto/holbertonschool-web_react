function NotificationItem({ type='default', html='', value='' }) {
  if (value && !html) {
    return (
      <>
        <li
          data-notification-type={type}
          style={{
            color: type === 'default' ? 'blue' : 'red'
          }}
        >
          {value}
        </li>
      </>
    )
  }
  if (html && !value) {
    return (
      <>
        <li
          data-notification-type={type}
          dangerouslySetInnerHTML={html}
          style={{
            color: type === 'default' ? 'blue' : 'red'
          }}
        >
        </li>
      </>
    )
  }
}

export default NotificationItem