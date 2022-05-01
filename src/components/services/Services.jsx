import React from 'react'
import './Services.css'
import {AiOutlineCheck} from 'react-icons/ai'

const services = () => {
  return (
    <section id='services'>
    <h5>What I offer</h5>
    <h2>Services</h2>

      <div className='container sv_container'>
        <article className='sv'>
          <div className='sv_head'>
            <h3>UX / UI Design</h3>
          </div>

          <ul className='sv_list'>
            <li>
              <AiOutlineCheck className='sv_list-icon'/>
              <p>Collect, research, design, test and evaluate.</p>
            </li>
            <li>
              <AiOutlineCheck className='sv_list-icon'/>
              <p>Manage work and estimating time to perform well</p>
            </li>
            <li>
              <AiOutlineCheck className='sv_list-icon'/>
              <p>Make the website awsome !</p>
            </li>
            <li>
              <AiOutlineCheck className='sv_list-icon'/>
              <p>Meet the needs of users.</p>
            </li>
            <li>
              <AiOutlineCheck className='sv_list-icon'/>
              <p>Make the website look credible.</p>
            </li>
          </ul>
        </article>


        <article className='sv'>
          <div className='sv_head'>
            <h3>Creativity</h3>
          </div>
          <ul className='sv_list'>
            <li>
              <AiOutlineCheck className='sv_list-icon'/>
              <p>Be creative with work</p>
            </li>
            <li>
              <AiOutlineCheck className='sv_list-icon'/>
              <p>Think of a new way of solving the problem.</p>
            </li>
            <li>
              <AiOutlineCheck className='sv_list-icon'/>
              <p>Mess Finding.</p>
            </li>
            <li>
              <AiOutlineCheck className='sv_list-icon'/>
              <p>Idea Finding</p>
            </li>
            <li>
              <AiOutlineCheck className='sv_list-icon'/>
              <p>Acceptance Finding</p>
            </li>
            <li>
              <AiOutlineCheck className='sv_list-icon'/>
              <p>Positive thinking.</p>
            </li>
          </ul>
        </article>


        <article className='sv'>
          <div className='sv_head'>
            <h3>Activity</h3>
          </div>
          <ul className='sv_list'>
            <li>
              <AiOutlineCheck className='sv_list-icon'/>
              <p>Self-motivated.</p>
            </li>
            <li>
              <AiOutlineCheck className='sv_list-icon'/>
              <p>Never stop developing yourself.</p>
            </li>
            <li>
              <AiOutlineCheck className='sv_list-icon'/>
              <p>Keep up with technology.</p>
            </li>
            <li>
              <AiOutlineCheck className='sv_list-icon'/>
              <p>There's nothing we can't do</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default services