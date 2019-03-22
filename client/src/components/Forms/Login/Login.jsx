import React, { Component } from 'react'
import './Login.scss'
import { register } from '../../../services/callApi'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: '',
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    register(this.state)
      .then(response => this.setState({ data: response }))
  }
  render () {
    const { firstName, lastName, email, password } = this.state
    return (
      <div className="register__form">

        <h2 className="register__form--title">S'inscrire</h2>
        <form className="register__form-container" onSubmit={this.handleSubmit}>
          <input
            className="input"
            type="text"
            name="firstName"
            placeholder="Prénom"
            value={firstName}
            onChange={ e => this.setState({ firstName: e.target.value })}
          />
          <input
            className="input"
            type="text"
            name="lastName"
            placeholder="Nom"
            value={lastName}
            onChange={ e => this.setState({ lastName: e.target.value })}
          />
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={ e => this.setState({ email: e.target.value })}
          />
          <input
            className="input"
            type="password"
            name="email"
            placeholder="Password"
            value={password}
            onChange={ e => this.setState({ password: e.target.value })}
          />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default Login
