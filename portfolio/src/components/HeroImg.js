import "./HeroImgStyles.css"
import React from 'react'
// import IntroImg from "../assets/intro.jpg"
import IntroImg from "../assets/paint.jpeg"
// import {Link} from "react-router-dom"
import Lottie from "../components/Lottie.js"
const HeroImg = () => {
  return (
    
  <div className ="hero">
    <div className="mask">
      <img className="intro-img"
      src={IntroImg} alt="cpu background" /> 
    </div>
    <div className="content">
        <p>AMANDA FRISK</p>
        <h1> FULL STACK DEVELOPER</h1>
        <Lottie/>
    </div>
    </div>
    
    
  )
}

export default HeroImg
