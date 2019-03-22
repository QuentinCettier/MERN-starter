import React, { Component } from 'react'
import './Home.scss'
import { getHomePage } from './../../services/callApi'
import Title from './../../components/Title/Title'
import LoginForm from './../../components/Forms/Login/Login'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {}
    }
  }

  componentDidMount () {
    getHomePage()
      .then(response => this.setState({ data: response }))
  }

  render () {
    const { data } = this.state
    console.log(data)
    return (
      <div className="home-container">
        <Title name={'MERN Starter'}>
        </Title>
        <LoginForm></LoginForm>
      </div>
    )
  }
}

export default Home
