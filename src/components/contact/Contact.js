import React from 'react'
import './contact.css'
import { MdEmail } from 'react-icons/md'
import { FiPhoneCall } from 'react-icons/fi'


const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

<div className='container contact__container'>
  <div className='contact__options'>
<article className='contact__option'>
  < MdEmail />
  <h4>Email</h4>
  <h5>ksarvanitakis@hotmail.com</h5>
  <a href='mailto:ksarvanitakis@hotmail.com'>Send a message</a>
</article>
<article className='contact__option'>
  < FiPhoneCall />
  <h4>Telephone</h4>
  <h5>+46(0)739308640</h5>
  <a href=''>Call me</a>
</article>
  </div>
  <form action=''>
    <input type='text' name='name' placeholder='Your Full Name' required />
    <input type='email' name='email' placeholder='Your Email' required />
    <textarea name='message' rows='7' placeholder='Your message'required></textarea>
    <button type='submit' className='btn btn-primary'>Send Message</button>
  </form>
</div>




    </section>
  )
}

export default Contact