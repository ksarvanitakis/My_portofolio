import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUserSwitch} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'




const Nav = () => {
  return (
    <nav>
       <a href='#'><AiOutlineHome /></a>
       <a href='#about'><AiOutlineUserSwitch /></a>
       <a href='#experience'><BiBook /></a>
       <a href='#contact'><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav