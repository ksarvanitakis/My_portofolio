import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

function Footer() {
  return (
    <footer>
{/*       <a href='#' className='footer__logo'> @Konstantinos Arvanitakis</a>
 */}
      <ul className='links'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portofolio'>Portofolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.facebook.com/kostas.arvanitakis.7/'><FaFacebookF /></a>
        <a href='https://www.instagram.com/kostasarv/'><FiInstagram /></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Konstantinos Arvanitakis 2022</small>
      </div>
    </footer>
  )
}

export default Footer