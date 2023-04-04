import React from 'react'
import gsal from "../assets/gsal.png"
import python from "../assets/python.jpeg"
import scrum from "../assets/scrum.png"

const InDevelopment = () => {
  return (
    
  <>
    
    <div 
    name="InDevelopment"
  className='w-full h-screen'
  
    >
   <h2 className='text-4xl max-w-screen-lg mx-auto border-b-4 border-green-500 flex flex-col items-center justify-center '>In Development</h2>

    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 '>
        
        {/* <h2 className='text-4xl  border-r-4 border-green-500 pr-2 '>In Development</h2> */}
        
        <div className='mt-0' >
          <div >
            <div >
           <img 
           className=' mx-auto max-w-md mt-16'
             src={gsal} alt="Go Save A Life Logo" /> 
            </div>
              <h6 > Go Save A Life is a non-profit in Colorado with a mission to help individuals in need of a kidney donation to connect with those willing to be a live donor.</h6>
            
          </div>
          <div> 
            <h3>I am the Lead Software Developer and Scrum Master for this non-profit's web development team. This project began as a solo passion project and my capstone for General Assembly. I have teamed up with a UX Designer and 3 Software Developers to continue building out the application.</h3>
              <div>
                <a href ="https://gsal-app.herokuapp.com/" 
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                  >View </a>
            </div>
            <div>
                <a href ="https://github.com/AmandaFrisk/GSAL-frontend" 
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                  >Github Repo </a>
            </div>
          </div>
      </div>
      <div>
      <div >
            <div >
           <img 
           className='mx-auto max-w-md '
             src={python} alt="Python Logo" /> 
            </div> 
            <div >
           <img 
           className='mx-auto'
             src={scrum} alt="Scrum Master Logo" /> 
            </div>          
      </div>
      </div>
    </div>  
    </div>
    </>
    
  
    
    
  )
}

export default InDevelopment