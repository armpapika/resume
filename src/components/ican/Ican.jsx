import React from 'react'
import './Ican.css'
import IMG1 from '../../assets/ican-img1.jpg'
import IMG2 from '../../assets/ican-img2.jpg'
import IMG3 from '../../assets/ican-img3.jpg'

const Ican = () => {
  return (
    <section id='ican'>
      <h5>I can do it</h5>
      <h2>Example i can do</h2>

      <div className='container ican_container'>
        <article className='ican_item'>
          <div className='ican_item-image'>
            <img src={IMG2} alt=''/>
          </div>
          <h3>E com</h3>
        </article>

        <article className='ican_item'>
          <div className='ican_item-image'>
            <img src={IMG1} alt=''/>
          </div>
          <h3>Blogger</h3>
        </article>

        <article className='ican_item'>
          <div className='ican_item-image'>
            <img src={IMG3} alt=''/>
          </div>
          <h3>School Website</h3>
        </article>

        
      </div>
    </section>
  )
}

export default Ican