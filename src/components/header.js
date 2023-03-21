import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import PrimaryPinkButton from './primary-pink-button'
import './header.css'

const Header = (props) => {
  return (
    <div data-role="Header" className="header-header">
      <nav className="header-nav">
        <div className="header-container">
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="header-image"
          />
          <div className="header-menu">
            <Link to="/" className="header-navlink Large">
              Home
            </Link>
            <Link to="/profile" className="header-navlink1 Large">
              About 
            </Link>
            <Link to="/profile" className="header-navlink2 Large">
              Services 
            </Link>
            <Link to="/coming-soon" className="header-navlink3 Large">
              Success Stories
            </Link>
            <Link to="/coming-soon" className="header-navlink4 Large">
              FAQ
            </Link>
          </div>
          <div className="header-container1">
            <div className="header-container2">
              <PrimaryPinkButton
                button="Apply now"
                rootClassName="primary-pink-button-root-class-name"
              ></PrimaryPinkButton>
            </div>
            <div data-role="BurgerMenu" className="header-burger-menu">
              <svg viewBox="0 0 1024 1024" className="header-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <div data-role="MobileMenu" className="header-mobile-menu">
        <div className="header-top">
          <Link to="/" className="header-navlink5 Large">
            Soft UI Design System
          </Link>
          <div data-role="CloseMobileMenu" className="header-close-menu">
            <svg viewBox="0 0 1024 1024" className="header-icon2">
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </div>
        </div>
        <div className="header-mid">
          <div className="header-menu1">
            <Link to="/" className="header-navlink6 Large">
              Home
            </Link>
            <Link to="/profile" className="header-navlink7 Large">
              Profile
            </Link>
            <Link to="/coming-soon" className="header-navlink8 Large">
              Coming Soon
            </Link>
          </div>
        </div>
        <div className="header-bot">
          <PrimaryPinkButton button="buy now"></PrimaryPinkButton>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {
  image_alt1: 'image',
  image_src1: '/playground_assets/12_naya_main_logo_tight_transparent-200h.png',
}

Header.propTypes = {
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
}

export default Header
