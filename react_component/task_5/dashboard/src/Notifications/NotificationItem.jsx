import { PureComponent } from 'react'
// import { Component } from 'react'

class NotificationItem extends PureComponent {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    type: 'default',
    value: '',
    html: null
  }

  render() {
    const hasHTML = this.props.html && (typeof this.props.html === 'object' || typeof this.props.html === 'string');

    return (
      <li
        data-notification-type={this.props.type}
        style={{ color: this.props.type === 'default' ? 'blue' : 'red' }}
        onClick={this.props.markAsRead}
        {...(hasHTML ? { dangerouslySetInnerHTML: typeof this.props.html === 'object' ? this.props.html : { __html: this.props.html } } : {})}
      >
        {!hasHTML ? this.props.value : null}
      </li>
    );
  }
}

export default NotificationItem;
