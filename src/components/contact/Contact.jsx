import React, { useRef } from 'react';
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsLinkedin, BsMessenger} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3ihljck', 'template_lge1gkw', form.current, 'sMUjy9PtDiUUtBnjn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };
  return (
    <section id="contact" className='contact'>
      <h5>Let's Work Together!</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>gautamsapre@gmail.com</h5>
            <a href="mailto:gautamsapre@gmail.com" target= "_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Gautam Sapre</h5>
            <a href="https://www.linkedin.com/in/gautam-sapre/"  target= "_blank">Connect on LinkedIn</a>
          </article>

          <article className="contact__option">
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Gautam Sapre</h5>
            <a href="https://m.me/gautam.sapre.7"  target= "_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Enter Your Name' required />
          <input type="email" name="email" placeholder='Enter Your Email' />
          <textarea name="message" cols="" rows="7" placeholder='Enter your message'></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>

    </section>
  )
}

export default Contact