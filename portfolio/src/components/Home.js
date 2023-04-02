// import "./HomeImgStyles.css"

import React from 'react'
// import IntroImg from "../assets/intro.jpg"
// import {Link} from "react-router-dom"
import Lottie1 from "./Lottie1.js"
import Lottie3 from "./Lottie3.js"

const Home = () => {
  return (
    // name is for smooth scroll
  <div name="home"
   className="h-screen w-full bg-white">
    
    
    <Lottie1/>
    <div className="max-w-screen-lg mx-auto flex flex-col item-center justify-center h-full px-4 
    ">
    <h2 className="text-4xl sm:text-7xl font-bold text-black"> I'm 
   <span> Amanda</span> 
    , a Full Stack Developer. </h2>
    <p className='py-4 max-w-md'>I have a passion for collaborating with innovative minds to solve problem. </p>
    <div className="bg-black outline-1 w-fit h-fit rounded hover:bg-teal-400 " >
      <a className="text-white p-4 hover:text-black"href ="https://docs.google.com/document/d/1R32tqslheIcAO2eAAmDLlt-tswckJbZFXi1uF5uy-u4/edit?usp=sharing" 
        target="_blank"
        rel="noreferrer"
        >Resume
        </a>
    </div>
    <div className='w-fit h-fit mx-auto  md:w-full'>
      <Lottie3/>
    </div>
    </div> 

    </div>
   
    
    
  )
}

export default Home
