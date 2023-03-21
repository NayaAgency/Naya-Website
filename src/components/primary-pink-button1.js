import React from 'react'

import PropTypes from 'prop-types'

import './primary-pink-button1.css'

const PrimaryPinkButton1 = (props) => {
  return (
    <div className={`primary-pink-button1-container ${props.rootClassName} `}>
      <button className="primary-pink-button1-button button ButtonSmall">
        {props.button}
      </button>
    </div>
  )
}

PrimaryPinkButton1.defaultProps = {
  rootClassName: '',
  button: 'Button',
}

PrimaryPinkButton1.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default PrimaryPinkButton1
