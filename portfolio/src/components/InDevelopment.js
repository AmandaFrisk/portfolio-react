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
    <h3 className=' mx-auto flex flex-col items-center justify-center px-4 text-blue-400'>Projects and certifications I'm currently pursuing:</h3>
    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 '>
        
        {/* <h2 className='text-4xl  border-r-4 border-green-500 pr-2 '>In Development</h2> */}
        
        <div className='mt-0' >
          <div >
            <div >
           <img 
           className=' mx-auto max-w-sm -mt-24 -mb-10'
             src={gsal} alt="Go Save A Life Logo" /> 
            </div>
              <h6 > What began as my independent capstone for General Assembly has blossomed. Go Save A Life is a non-profit in Colorado with a mission to help individuals in need of a kidney donation to connect with those willing to be a live donor.</h6>
            
          </div>
          <div> 
            
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