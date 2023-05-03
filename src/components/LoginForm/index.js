// Write your JS code here
import {Component} from 'react'

import './index.css'

const initialState = {
  username: '',
  password: '',
  errorMsg: '',
  isShowErrorMsg: false,
}

class LoginForm extends Component {
  state = initialState

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  userNameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="label" htmlFor="username">
          USERNAME
        </label>
        <br />
        <input
          type="text"
          className="input-field"
          onChange={this.onChangeUserName}
          id="username"
          value={username}
        />
      </>
    )
  }

  passwordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="label" htmlFor="password">
          PASSWORD
        </label>
        <br />
        <input
          type="password"
          className="input-field"
          onChange={this.onChangePassword}
          id="password"
          value={password}
        />
      </>
    )
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.push('/')
  }

  onSubmitFailure = error => {
    this.setState({
      errorMsg: error,
      isShowErrorMsg: true,
      username: '',
      password: '',
    })
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {method: 'POST', body: JSON.stringify(userDetails)}
    const url = 'https://apis.ccbp.in/login'

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    console.log(response)

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {errorMsg, isShowErrorMsg} = this.state
    return (
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-login-lg-image"
        />
        <div className="login-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website-logo"
            className="website-logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website-login"
            className="website-login-sm-image"
          />
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <div className="input-field-container">{this.userNameField()}</div>
            <div className="input-field-container">{this.passwordField()}</div>
            <button type="submit" className="button">
              Login
            </button>
            {isShowErrorMsg && <p className="error">{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
