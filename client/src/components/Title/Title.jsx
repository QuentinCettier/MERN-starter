import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Title.scss'

class Title extends Component {
  render () {
    const { name } = this.props

    return (
      <h1 className='main-title'>{ name }</h1>
    )
  }
}

Title.propTypes = {
  name: PropTypes.string
}

export default Title
