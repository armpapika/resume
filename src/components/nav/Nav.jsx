import React from 'react'
import './Nav.css'
import {AiTwotoneHome} from 'react-icons/ai'
import {FaUserTie} from 'react-icons/fa'
import {BiBookBookmark} from 'react-icons/bi'
import {RiServiceFill} from 'react-icons/ri'
import {IoMdContact} from 'react-icons/io'
import {RiComputerFill} from 'react-icons/ri'
import {GiPunchBlast} from 'react-icons/gi'
import {useState} from 'react'

const Nav = () => {
  const[activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiTwotoneHome /></a>
      <a href='#about'onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><FaUserTie /></a>
      <a href='#services'onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceFill /></a>
      <a href='#exp'onClick={() => setActiveNav('#exp')} className={activeNav === '#exp' ? 'active' : ''}><BiBookBookmark /></a>
      <a href='#ican'onClick={() => setActiveNav('#ican')} className={activeNav === '#ican' ? 'active' : ''}><GiPunchBlast /></a>
      <a href='#test'onClick={() => setActiveNav('#test')} className={activeNav === '#test' ? 'active' : ''}><RiComputerFill /></a>
      <a href='#contact'onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><IoMdContact /></a>
    </nav>
  )
}

export default Nav