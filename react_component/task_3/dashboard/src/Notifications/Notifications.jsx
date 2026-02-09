import { Component } from 'react'
import closeButton from '../assets/close-button.png'
import './Notifications.css'
import NotificationItem from './NotificationItem.jsx'

class Notifications extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    notifications: [],
    displayDrawer: false
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`)
  }

  render() {
    return (
      <>
        <div className='notification-title'>
          Your notifications
        </div>
        { this.props.displayDrawer ? (
          <>
            { this.props.notifications.length === 0 ? (
              <>
                <div className='notification-items'>
                  <p>No new notification for now</p>
                </div>
              </>
            ) : (
              <>
                <div className='notification-items'>
                  <p>Here is the list of notifications</p>
                  <ul>
                    {
                      this.props.notifications.map(notification => {
                        return <NotificationItem 
                          key={notification.id}
                          type={notification.type}
                          value={notification.value}
                          html={notification.html}
                          markAsRead={() => {this.markAsRead(notification.id)}}
                        />
                      })
                    }
                  </ul>
                </div>
                <button
                  style={{
                    width: '8px',
                    height: '8px',
                    border: '0px',
                    background: 'none',
                    position: 'absolute',
                    top: '10px',
                    right: '20px'
                  }}
                  aria-label='Close'
                  onClick={() => console.log('Close button has been clicked')}
                >
                  <img src={closeButton} alt='close-button' />
                </button>
              </>
            )}
          </>
        ) : (
          <></>
        )
        }
      </>
    )
  }
}

export default Notifications