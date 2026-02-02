function NotificationItem({ type = 'default', value = '', html = null }) {
  const hasHTML = html && (typeof html === 'object' || typeof html === 'string');

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

export default NotificationItem;
