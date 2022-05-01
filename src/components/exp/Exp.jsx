import React from 'react'
import './Exp.css'
import {GrMysql} from 'react-icons/gr'
import {GrReactjs} from 'react-icons/gr'
import {SiCss3} from 'react-icons/si'
import {BsFillBootstrapFill} from 'react-icons/bs'
import {SiTypescript} from 'react-icons/si'
import {SiHtml5} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {SiPython} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiCakephp} from 'react-icons/si'

const Exp = () => {
  return (
    <section id='exp'>
    <h5>Skills</h5>
    <h2>My Experience</h2>
    <div className="container exp_container">
      <div className="exp_frontend">
        <h3>Frontend Development</h3>
        <div className="exp_content">

          <article className='exp_detail'>
          <GrReactjs className='exp_detail-icon'/>
          <div>
            <h4>React JS</h4>
            <small className='text-light'>Experience</small>
          </div>
          </article>

          <article className='exp_detail'>
          <BsFillBootstrapFill className='exp_detail-icon'/>
          <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Experience</small>
          </div>
          </article>

          <article className='exp_detail'>
          <SiCss3 className='exp_detail-icon'/>
          <div>
            <h4>CSS</h4>
            <small className='text-light'>Experience</small>
          </div>
          </article>

          <article className='exp_detail'>
          <SiHtml5 className='exp_detail-icon'/>
          <div>
            <h4>HTML</h4>
            <small className='text-light'>Experience</small>
          </div>
          </article>

          <article className='exp_detail'>
          <SiTypescript className='exp_detail-icon'/>
          <div>
            <h4>TypeScript</h4>
            <small className='text-light'>Experience</small>
          </div>
          </article>
        </div>
      </div>
      

      <div className="exp_backtend">
      <h3>Backend Development</h3>
      <div className="exp_content">

        <article className='exp_detail'>
        <FaNodeJs className='exp_detail-icon'/>
        <div>
          <h4>Node Js</h4>
          <small className='text-light'>Experience</small>
        </div>
        </article>

        <article className='exp_detail'>
        <SiPython className='exp_detail-icon'/>
        <div>
          <h4>Python</h4>
          <small className='text-light'>Experience</small>
        </div>
        </article>

        <article className='exp_detail'>
        <SiJavascript className='exp_detail-icon'/>
        <div>
          <h4>JavaScript</h4>
          <small className='text-light'>Experience</small>
        </div>
        </article>

        <article className='exp_detail'>
        <GrMysql className='exp_detail-icon'/>
        <div>
          <h4>Mysql</h4>
          <small className='text-light'>Experience</small>
        </div>
        </article>

        <article className='exp_detail'>
        <SiCakephp className='exp_detail-icon'/>
        <div>
          <h4>PHP</h4>
          <small className='text-light'>Experience</small>
        </div>
        </article>
      </div>
    </div> 
  </div>
    </section>
  )
}

export default Exp