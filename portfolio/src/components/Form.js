import "./FormStyles.css"
import React from 'react'



const Form = () => {
  return (
    <>
    <div>
      <h1> Let's Connect</h1>
    </div>
    <div className="Form">
    <form action="https://getform.io/f/4abdab22-fc6c-41e2-b563-e4b90c564889" method="POST">
      <input 
      type="text" 
      name="name" 
      placeholder="your name" />
    
      <input 
      type="text" 
      name="email" 
      placeholder="your email" />
      <textarea 
      name="message" rows="10" placeholder="message"
      >
      </textarea>
      <button>
        Send 
      </button>
    </form>
    </div>
    </>
  )
}

export default Form
