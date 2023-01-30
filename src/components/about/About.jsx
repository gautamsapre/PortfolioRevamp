import React from 'react'
import './about.css'
import self from '../../assets/self2.jpg'
import {BsLinkedin, BsFacebook, BsInstagram} from 'react-icons/bs'

const About = () => {
  return (
    <section id="about" className='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={self} alt="About Me image" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__cards">
            </article>
          </div>
          <p>

          Hi! My name is Gautam Sapre. I am currently a student at the University of Texas at Dallas. I am pursuing a Master's in Computer Science with a focus in Data Science. I have previously worked two software engineering intenships at Amazon AWS, 
          and Communications and Power Industries where I had a chance to work with some really cool technologies. <br /><br /> 
          I have experience in web-design, database design, and full-stack development and have a major interest in machine learning and NLP concepts. I have a strong passion for learning new technologies, exploring unknown solutions to complex problems, and 
          making real-world use of my knowledge. <br/><br/> Let's create something special.

          </p>
          <div className="social__media">
          <a href="https://www.linkedin.com/in/gautam-sapre" target="_blank"> <BsLinkedin /> </a>
          <a href="https://www.facebook.com/gautam.sapre.7" target="_blank"> <BsFacebook /> </a>
          <a href="https://www.instagram.com/gautam_sapre/" target="_blank"> <BsInstagram /> </a>
        </div>
        </div>

      </div>
    </section>
  )
}

export default About