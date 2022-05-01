import React from 'react'
import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import {SiVercel} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>ARM DEVELOPER</a>

      <ul className='permalink'>
        <li><a href='#'>home</a></li>
        <li><a href='#about'>about</a></li>
        <li><a href='#exp'>experience</a></li>
        <li><a href='#services'>services</a></li>
        <li><a href='#ican'>ican</a></li>
        <li><a href='#test'>testimonials</a></li>
        <li><a href='#contact'>contact</a></li>
      </ul>

      <div className='footer_social'>
        <a href='https://www.facebook.com/profile.php?id=100054543559596'><BsFacebook/></a>
        <a href='https://www.instagram.com/arm.papika/'><AiFillInstagram/></a>
        <a href='https://github.com/armpapika/resume'><BsGithub/></a>
        <a href='https://reactproject-resume.vercel.app/'><SiVercel/></a>
      </div>
    </footer>
  )
}

export default Footer