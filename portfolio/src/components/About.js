
import React from 'react'

import self from "../assets/selfimg.png"
const About = () => {
  return ( 
  <div 
  name="about"
  className='w-full h-screen -mt-18 -mb-16'
  >
    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
   
    
    <div>
      <h2 className='text-5xl  flex flex-col items-center justify-center border-b-4 border-green-500  '>About</h2>
      
      <p className='mt-10'>As a Software Developer and a seasoned Project Manager, I am thrilled to bring a unique blend of technical expertise and top-notch organization skills to any role. 
       Let's join forces and create something amazing together!
      </p>
</div>
<div>
  <img className=' rounded-3xl mx-auto w-2/3 mt-16'src={self} alt='my profile'/>
</div>

    
    </div>
    </div>
  )
}

export default About
