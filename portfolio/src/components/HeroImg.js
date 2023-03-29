import "./HeroImgStyles.css"
import React from 'react'
// import IntroImg from "../assets/intro.jpg"
import IntroImg from "../assets/paint.jpeg"
// import {Link} from "react-router-dom"
import Lottie from "./Lottie1.js"
const HeroImg = () => {
  return (
    
  <div className ="hero">
    <div className="mask">
      <img className="intro-img"
      src={IntroImg} alt="paint background" /> 
    </div>
    <div className="content">
        <p>AMANDA FRISK</p>
        <h1> FULL STACK DEVELOPER</h1>
        
        <a href ="https://docs.google.com/document/d/1R32tqslheIcAO2eAAmDLlt-tswckJbZFXi1uF5uy-u4/edit?usp=sharing" 
        target="_blank"
        rel="noreferrer"
        >Resume</a>
        <Lottie/>
    </div>
    </div>
    
    
  )
}

export default HeroImg
