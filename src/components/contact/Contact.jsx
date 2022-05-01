import React from 'react'
import './Contact.css'
import {MdAttachEmail} from 'react-icons/md'
import {BsFacebook} from 'react-icons/bs'
import {FiPhoneCall} from 'react-icons/fi'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_brkb0pv', 'template_1h1ywru', form.current, '-9PWcjyORj2PTvA5W')
    .then((result) => {
      Swal.fire(
        'Success!',
        'Please wait for a reply from me via email.',
        'success'
      );
    },(error) => {
      alert('again');
    });

    e.target.reset()
  };

  return (

    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_opton1'>
          <article className='contact_option'>
            <MdAttachEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>armpapika@gmail.com</h5>
            <a>Look at right side</a>
          </article>

          <article className='contact_option'>
            <BsFacebook className='contact_option-icon'/>
            <h4>Facebook</h4>
            <h5>Messenger</h5>
            <a href='https://m.me/100054543559596/' target="_blank">Send Message</a>
          </article>

          <article className='contact_option'>
            <FiPhoneCall className='contact_option-icon'/>
            <h4>Call</h4>
            <h5>0902599745</h5>
          </article>
        </div>

        <form ref={form} onSubmit = {sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' row='7' placeholder='Let Message me' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact