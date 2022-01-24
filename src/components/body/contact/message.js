import React, { useState } from 'react'
import './message.css'



function Message() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className='contactmessage'>
      <label className='msgme'>Message Me</label>
      <form action="https://formsubmit.co/nadundilsh31@gmail.com" method="POST">
      <div className="form-group">
        
        <label htmlFor="name">
          Your Name
          <input
            type="text"
            id="name"
            placeholder='Name'
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="email">
          Your Email
          <input
            type="email"
            id="email"
            placeholder='Email'
            name="email"
            value={email}

            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="message">
          Your Message
          <textarea
            type="text"
            id="message"
            placeholder='Type your message'
            name="message"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
      </div>
      <input type="hidden" name="_next" value="https://ndilsh.github.io/"></input>
        <input type="hidden" name="_captcha" value="false"></input>
      <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Message
