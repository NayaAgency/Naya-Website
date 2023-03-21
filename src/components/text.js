import React from 'react'

import PropTypes from 'prop-types'

import './text.css'

const Text = (props) => {
  return (
    <div className={`text-container ${props.rootClassName} `}>
      <span className="text-text">{props.Text}</span>
    </div>
  )
}

Text.defaultProps = {
  Text: 'Interested in joining Naya?',
  rootClassName: '',
}

Text.propTypes = {
  Text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Text
