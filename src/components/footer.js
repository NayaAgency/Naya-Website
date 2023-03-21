import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer-footer ${props.rootClassName} `}>
      <div className="footer-container">
        <div className="footer-container1">
          <span className="footer-text">SOFT</span>
          <span className="">Copyright © 2021 Soft by Creative Tim.</span>
        </div>
        <div className="footer-container2">
          <div className="footer-container3">
            <span className="footer-text02 Large">Company</span>
            <span className="footer-text03 Large">About Us</span>
            <span className="footer-text04 Large">Careers</span>
            <span className="footer-text05 Large">Press</span>
          </div>
          <div className="footer-container4">
            <span className="footer-text06 Large">Pages</span>
            <span className="footer-text07 Large">Login</span>
            <span className="footer-text08 Large">Register</span>
            <span className="footer-text09 Large">About</span>
          </div>
          <div className="footer-container5">
            <span className="footer-text10 Large">Products</span>
            <span className="footer-text11 Large">Free</span>
            <span className="footer-text12 Large">PRO</span>
            <span className="footer-text13 Large">Latest</span>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/waves-white.svg"
        className="footer-image"
      />
    </footer>
  )
}

Footer.defaultProps = {
  rootClassName: '',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
}

export default Footer
