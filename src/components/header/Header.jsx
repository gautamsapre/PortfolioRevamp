import React from 'react'
import './header.css'
import CTA from './CTA'
import pic from '../../assets/Self.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Gautam</h1>
        <h5 className="text-light">Student | Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="myPic">
          <img src={pic} alt="My Pic" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
        
      </div>
    </header>
  )
}

export default Header