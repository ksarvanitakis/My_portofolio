import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Hello I am</h1>
        <h2>Konstantinos Αrvanitakis</h2>
        <h3 className="text-light">Javascript Fullstack Developer</h3>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt='My self portrait' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header