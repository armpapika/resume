import React from 'react'
import CV from '../../assets/cv.pdf'

const upCV = () => {
  return (
    <div className='cvtest'>
        <a href={CV} download className='btn'>Download CV</a>
        
    </div>
  )
}

export default upCV