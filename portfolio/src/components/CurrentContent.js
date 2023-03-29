import "./CurrentContentStyles.css"
import React from 'react'
// import IntroImg from "../assets/paint.jpeg"
import gsal from "../assets/gsal.png"
import python from "../assets/python.jpeg"
import scrum from "../assets/scrum.png"

const CurrentContent = () => {
  return (
    
  <>
    {/* <div className="mask3">
      <img className="intro-img2"
      src={IntroImg} alt="cpu background" /> 
    </div> */}
    <div className="current-container">
        <h1 className="current">In Development</h1>
        <div className="gsal-container">
          <div className="gsal-img-container">
            <div className="gsal-img">
           <img 
             src={gsal} alt="Go Save A Life Logo" /> 
            </div>
              <h6 className="gsal-info"> Go Save A Life is a non-profit in Colorado with a mission to help individuals in need of a kidney donation to connect with those willing to be a live donor.</h6>
            
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
      <div className="python-container">
            <div className="python-img">
           <img 
             src={python} alt="Python Logo" /> 
            </div> 
            <div className="scrum-img">
           <img 
             src={scrum} alt="Scrum Master Logo" /> 
            </div>          
      </div>
      </div>
    </div>  
    </>
    
  
    
    
  )
}

export default CurrentContent