import React from 'react'
import './header.css'
import CV from './upCV'
import ME from '../../assets/me.png'
import Social from './Headersocial'
import ImageShadow from 'react-image-shadow';
import 'react-image-shadow/assets/index.css';

const header = () => {
  return (
    <header>
        <div className='container header__container'>
          <h5>Hello I'm</h5>
          <h1>Suebsagool Namkaew</h1>
          <h5 className='text-light'>Fontend Developer</h5>
          <CV />
          <Social />
        
            <div className="me">
              <ImageShadow src={ME} alt="me" />
            </div>

            <a href='#contact' className='scroll_down'>Scroll Down</a>

        </div>
    </header>
  )
}

export default header