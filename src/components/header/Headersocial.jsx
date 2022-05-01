import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Headersocial = () => {
  return (
    <div className='header__social'>
        <a href='https://www.facebook.com/profile.php?id=100054543559596' target="_blank"> <BsFacebook /> </a>
        <a href='https://github.com/armpapika/resume' target="_blank"><BsGithub /> </a>
        <a href='https://www.instagram.com/arm.papika/' target="_blank"><BsInstagram/> </a>
    </div>
  )
}

export default Headersocial