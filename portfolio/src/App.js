import React from "react";
// import "./index.css"

import NavBar from "./components/Navbar.js"
import Home from "./components/Home.js"
import AboutContent from "./components/AboutContent.js"

// import Project from "./routes/Project";
// import About from "./routes/About";
// import Contact from "./routes/Contact";
// import {Route, Routes } from "react-router-dom"
function App() {
  return (
    <>
      <div>
        <NavBar/>
        <Home/>
        <AboutContent/>
      </div>
     {/* <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes> */}
    </>
  );
}

export default App;
