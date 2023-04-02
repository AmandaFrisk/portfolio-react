// import "./AboutContentStyles.css"
// import Lottie2 from "./Lottie2"
import React from 'react'

// import self from "../assets/selfimg.png"
const AboutContent = () => {
  return ( 
  <div 
  name="about"
  className='w-full h-screen'>
    <div className=''>
      <h1 className='text-4xl inline border-b-4'>About</h1>
      
    {/* <Lottie2/> */}
    </div>
    <p>As a Software Developer and a seasoned Project Manager, I am thrilled to bring a unique blend of technical expertise and top-notch organization skills to any role. With a background in education, I pride myself on being compassionate, patient, and always willing to connect with and support individuals from all walks of life. I genuinely enjoy collaborating and learning alongside others and am confident that my diverse skill set and adaptability will enable me to thrive in any role that comes my way. So let's join forces and create something amazing together!</p>
 

    {/* <div className="right">
        <div className="img-container">
            <div className= "self-img-div">
                <img className="self-img"src ={self} />
            </div>
        </div>
    </div> */}
    </div>
  )
}

export default AboutContent
