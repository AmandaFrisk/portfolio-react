import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Footer from "../components/Footer"
import Project from "../routes/Project"
import About from "../routes/About"
import Current from "../routes/Current"
const Home = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg />
    <About />
    <Current />
    <Project />
    <Footer />
    </div>
  )
}

export default Home
