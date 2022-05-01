import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaBirthdayCake} from 'react-icons/fa'
import {GiElephant} from 'react-icons/gi'
import {MdOutlineComputer} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
        <h5>Seubsagool Namkaew</h5>
        <h2>About Me</h2>

        <div className='container about__container'>
          <div className='about__me'>
            <div className='about__me-image'>
              <img src={ME} alt='About Image'/>
            </div>
          </div>

          <div className='about__content'>
            <div className='about__card_1'>
              <article className='about__card_2'>
                <GiElephant className='about__icon'/>
                <h5>SURIN</h5>
                <small>My hometown</small>
              </article>
          
              <article className='about__card_2'>
                <MdOutlineComputer className='about__icon'/>
                <h5>Com-Sci</h5>
                <small>SRRU</small>
              </article>

              <article className='about__card_2'>
                <FaBirthdayCake className='about__icon'/>
                <h5>28</h5>
                <small>Years old</small>
              </article>

            </div>

            <p>Hello ! . My name is Suebsagool Namkaew . You can call me Arm . I’m 28 years old. My birthday is the 28th of August 1993. 
              I have completed my graduation from Surindra Rajabhat University with Computer Science as the subject.
            </p>
            <a href='#contact' className='btn btn-primary'>Contact me</a>
             
          </div>
        </div>
    </section>
  )
}
export default About