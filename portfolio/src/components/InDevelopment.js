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
   <h2 className='text-4xl max-w-screen-md mx-auto border-b-4 border-green-500 flex flex-col items-center justify-center -ml-17 '>In Development</h2>
    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 '>
        
        
        <div className='mt-0' >
          <div >
            <div >
           <img 
           className=' mx-auto max-w-sm -mt-18 -mb-14 '
             src={gsal} alt="Go Save A Life Logo" /> 
            </div>
              <h6 > What began as my independent capstone for General Assembly has blossomed.</h6>
             
              <h6 >I have welcome a UX/UI Designer and 3 Developers to join me in continuing to</h6>
              <h6>create a MERN Stack application for this amazing Colorado based non-profit. The</h6>
              <h6>application will be a tool the organization will use to connect those who are in need</h6>
              <h6>of a kidney transplant with those willing to donate theirs.</h6>

          </div>
          <div className='flex items-center'> 
            
              <div className='ml-2 mr-2 text-blue-500 hover:text-blue-700'>
                <a href ="https://gsal-app.herokuapp.com/" 
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                  >View</a>
            </div>
            <div className='text-blue-500 hover:text-blue-700'>
                <a href ="https://github.com/AmandaFrisk/GSAL-frontend" 
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                  >Github</a>
            </div>
          </div>
      </div>
      <div>
      <div className='flex items-center'>
            <div className='mt-6' >
           <img 
           className='max-h-28'
             src={python} alt="Python Logo" /> 
            </div> 
            <div >
           <img 
           className='max-h-28'
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