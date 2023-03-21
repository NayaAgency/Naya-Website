import React from 'react'

import PropTypes from 'prop-types'

import './primary-pink-button2.css'

const PrimaryPinkButton2 = (props) => {
  return (
    <div className={`primary-pink-button2-container ${props.rootClassName} `}>
      <button className="primary-pink-button2-button button ButtonSmall">
        {props.button}
      </button>
    </div>
  )
}

PrimaryPinkButton2.defaultProps = {
  button: 'Button',
  rootClassName: '',
}

PrimaryPinkButton2.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default PrimaryPinkButton2
