import './App.css'
import { Fragment } from 'react'
import Header from '../Header/Header.jsx'
import Notifications from '../Notifications/Notifications.jsx'
import Footer from '../Footer/Footer.jsx'
import Login from '../Login/Login.jsx'
import {getLatestNotification} from '../utils/utils.js'

function App() {
  const markup = { __html: getLatestNotification() }
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
    html: markup
  }]
  return (
    <>
      <div className='root-notifications'>
        <Notifications notifications={notificationsList} />
      </div>
      <Fragment>
        <Header />
      </Fragment>
      <Fragment>
        <Login />
      </Fragment>
      <Fragment>
        <Footer isIndex={true} />
      </Fragment>
    </>
  )
};

export default App
