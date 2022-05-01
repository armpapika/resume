import React from 'react'
import './Test.css'
import T1 from '../../assets/t1.jpg'
import T2 from '../../assets/t2.jpg'
import T3 from '../../assets/t3.jpg'
import T4 from '../../assets/t4.jpg'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
   {
     avatar :T1,
     name: 'Mr.Taned LEGO CLOUD SERVICES COMPANY Owner',
     review: 'Mr. Seubsagool is very active at work. get along well with coworkers and keep improving yourself.'
   },
   {
    avatar :T2,
    name: 'Mr.Pichit',
    review: 'Mr Seubsagool is punctual. Respect everyone.'
  },
  {
    avatar :T3,
    name: 'Mr.Keng',
    review: 'Mr. Seubsagool is generous always trust others intend to work Keep going ! brother!'
  },
  {
    avatar :T4,
    name: 'Mr.Sanhawat',
    review: 'Mr. Seubsagool is a peace-loving person, Sumit work on time. Sometimes I wonder if he slept or not.'
  },
]

const test = () => {
  return (
    <section id='test'>
      <h5>Review</h5>
      <h2>Testimonails</h2>

      <Swiper className='container test_container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }} >

        {
          data.map(({avatar , name , review},index) => {
            return (
              <SwiperSlide key={index} className='test'>
              <div className='test_avatar'>
                <img src={avatar} alt='AVATAR ONE' />
              </div>
              <h5 className='test_name'>{name}</h5>
              <small className='test_review'>{review}</small>
              </SwiperSlide>
            )
          })
       
       }
      </Swiper>
    </section>
  )
}

export default test