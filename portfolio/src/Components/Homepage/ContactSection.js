import React from 'react'

const ContactSection = () => {
  return (
    <div style={{backgroundColor:'white'}}>
      <h1 style={{fontWeight:'bold', color:'black', paddingTop:'1rem', paddingBottom:'1rem'}}>Contact Me</h1>
      <p><span style={{fontWeight:'bold'}}>Email:</span> <a className='lead' href='mailto:joerhodesv2025@gmail.com'>joerhodesv2025@gmail.com</a></p>
      <p style={{paddingBottom:'1rem'}}><span style={{fontWeight:'bold'}}>Phone:</span> <a className='lead' href='mailto:joerhodesv2025@gmail.com'>(310) 863-9920</a></p>

      <form>
        <input placeholder='name'></input>
        <input placeholder='email'></input>
        <input placeholder='phone'></input>
        <textarea placeholder='message'></textarea>
        <button>Submit</button>
      </form>

      
    </div>
  )
}

export default ContactSection