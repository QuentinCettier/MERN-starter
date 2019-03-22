import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Input.scss'

class Input extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  render () {
    const { name, type, placeholder, callback } = this.props
    const { value } = this.state
    return (
      <div className="input-container">
        <input
          className="input"
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={ e => this.setState({ value: e.target.value })}
        />
      </div>
    )
  }
}

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  callback: PropTypes.array
}

export default Input
