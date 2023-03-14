import "./HeroImgStyles.css"
import React from 'react'
import IntroImg from "../assets/intro.jpg"
// import {Link} from "react-router-dom"

const HeroImg = () => {
  return (
  <div className ="hero">
    <div className="mask">
      <img className="intro-img"
      src={IntroImg} alt="cpu background" /> 
    </div>
    <div className="content">
        <p>HI, I'M AMANDA FRISK</p>
        <h1> FULL STACK DEVELOPER</h1>
        
    </div>
    </div>
  )
}

export default HeroImg
