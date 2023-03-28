import './ContactMe.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

const ContactMe = () => {

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_takvbc5', 'template_gcam9jy', form.current, '7xcbxa-SuSHExXP2l')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div>
      <section>
        <div className='main-form'>
          <h2 className='title-h1'>Contact Me</h2>
          <form ref = {form} className='form-container' onSubmit={sendEmail}>
            <input type="text" className='input-box' placeholder='Full Name' name='user_name' required />
            <input type="email" className='input-box' placeholder='Email' name='user_email' required />
            <input type="text" className='input-box' placeholder='Subject' name='subject' required />
            <textarea name="message" className='input-box' placeholder='Write your message!' cols="30" rows="10"></textarea>
            <button type='submit' className='btn-submit'>Send Message</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default ContactMe