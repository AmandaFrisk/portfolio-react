import "./AboutContentStyles.css"

import React from 'react'
import {Link} from "react-router-dom"
import self from "../assets/selfimg.png"
const AboutContent = () => {
  return ( <div className ="about">
    <div className="left">
      <h1>Who am I?</h1>
      <p>I am a full stack software engineer currently learning Python and enjoying the challenge.</p>
    <Link to ="/contact">
        <button className="btn">Contact</button>
    </Link>
    </div>

    <div className="right">
        <div className="img-container">
            <div className= "self-img-div">
                <img className="self-img"src ={self} />
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutContent
