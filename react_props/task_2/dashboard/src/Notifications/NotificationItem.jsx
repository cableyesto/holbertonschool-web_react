/*
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
          dangerouslySetInnerHTML={typeof html === 'object' ? html : { __html: html }}
          style={{
            color: type === 'default' ? 'blue' : 'red'
          }}
        >
        </li>
      </>
    )
  }
}
*/

function NotificationItem({ type = 'default', value = '', html = '' }) {
  const hasHTML = html && (typeof html === 'object' || html.length > 0);

  return (
    <li
      data-notification-type={type}
      style={{ color: type === 'default' ? 'blue' : 'red' }}
      {...(hasHTML ? { dangerouslySetInnerHTML: typeof html === 'object' ? html : { __html: html } } : {})}
    >
      {!hasHTML ? value : null}
    </li>
  );
}

export default NotificationItem