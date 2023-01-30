import React from 'react'
import './footer.css'
import {BsTwitter, BsFacebook, BsInstagram} from 'react-icons/bs'
const Footer = () => {
  return (
    <section id="footer" className='foot'>
      <footer>
      <a href="#" className='footer__logo'>Gautam</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/gautam.sapre.7" target="_blank"> <BsFacebook /> </a>
        <a href="https://twitter.com/GautamSapre" target="_blank"> <BsTwitter/> </a>
        <a href="https://www.instagram.com/gautam_sapre/" target="_blank"> <BsInstagram /> </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Gautam Sapre</small>
      </div>

    </footer>
    </section>

  )
}

export default Footer