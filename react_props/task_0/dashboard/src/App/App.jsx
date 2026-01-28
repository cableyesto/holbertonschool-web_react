import './App.css'
import { Fragment } from 'react'
import Header from '../Header/Header.jsx'
import Notifications from '../Notifications/Notifications.jsx'
import Footer from '../Footer/Footer.jsx'
import Login from '../Login/Login.jsx'

function App() {
  return (
    <>
      <div className='root-notifications'>
        <Notifications />
      </div>
      <Fragment>
        <Header />
      </Fragment>
      <Fragment>
        <Login />
      </Fragment>
      <Fragment>
        <Footer />
      </Fragment>
    </>
  )
};

export default App
