import "./CurrentContentStyles.css"
import React from 'react'

import gsal from "../assets/gsal.png"
const CurrentContent = () => {
  return (
    
  <div className ="current-container">
    <h1>Current Content</h1>
    <div className= "gsal-img">
                <img className="gsal-img"src = {gsal} alt="logo"/>
            </div>
    </div>
    
    
  )
}

export default CurrentContent