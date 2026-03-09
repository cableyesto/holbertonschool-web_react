import React from 'react';
import WithLogging from '../HOC/WithLogging';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.email || '',
      password: props.password || '',
      enableSubmit: false,
    };
  }

  isValidEmail = (email) => {
    if (!email || typeof email !== 'string') {
      return false
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(email)
  }

  isValidPassword = (password) => {
    if (password.length >= 8)  {
      return true
    }
    return false
  }

  validateForm = (email, password) => {
    if (email !== '' && password !== '' && this.isValidEmail(email) && this.isValidPassword(password)) {
      return true
    }
    return false
  }

  handleChangeEmail = (event) => {
    const updatedEmail = event.target.value
    const isValid = this.validateForm(updatedEmail, this.state.password)
    this.setState({ 
      email: updatedEmail,
      enableSubmit: isValid
     })
  }

  handleChangePassword = (event) => {
    const updatedPassword = event.target.value
    const isValid = this.validateForm(this.state.email, updatedPassword)

    this.setState({ 
      password: updatedPassword,
      enableSubmit: isValid
     })
  }

  handleLoginSubmit = (event) => {
    event.preventDefault()
    this.props.logIn(this.state.email, this.state.password)
  }
  render() {
    const { email, password, enableSubmit } = this.state
    return (
      <div className="App-body flex flex-col p-5 pl-1 h-[45vh] border-t-4 border-[color:var(--main-color)]">
        <p className="text-xl mb-4">Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit} >
          <div className="text-lg flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0">
            <label htmlFor="email" className="sm:pr-2">
              Email:
            </label>
            <input type="email" value={email} onChange={this.handleChangeEmail} name="user_email" id="email" className="border rounded w-3/5 sm:w-auto px-2 py-1" />
            <label htmlFor="password" className="sm:pl-2 sm:pr-2">
              Password:
            </label>
            <input type="password" value={password} onChange={this.handleChangePassword} name="user_password" id="password" className="border rounded w-3/5 sm:w-auto px-2 py-1" />
            <button type='submit' disabled={!enableSubmit} className="cursor-pointer border px-1 rounded sm:ml-2 w-fit">OK</button>
          </div>
        </form>
      </div>
    );
  }
}
const LoginWithLogging = WithLogging(Login)
export default LoginWithLogging;
