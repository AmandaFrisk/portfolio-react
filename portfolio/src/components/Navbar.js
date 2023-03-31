import "./NavbarStyles.css"

import React, {useState} from 'react'
import {Link} from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"
import logo from "../assets/logo.png"

// const Navbar = () => {
//     const [click, setClick] = useState(false);
//     const handleClick = () => setClick(!click);

//     const[color, setColor] = useState(false);
//     const changeColor = () =>{
//       if(window.scrollY >=100){
//          setColor(true);
//   } else{
//     setColor(false)
//   } 
//   }

//   window.addEventListener("scroll", changeColor)
//   return (
//     <div className={color ? "header header-bg":
//     "header"}>
//       <Link to="/">
//        <img src={logo} className="logo"></img>
//       </Link>
//       <ul className={click ? "nav-menu active" : 
//       "nav-menu"}>
//         <li>
//             <Link to ="/">Home</Link>
//         </li>
//         <li>
//             <Link to ="/project" smooth duration={500}>Project</Link>
//         </li>
//         <li>
//             <Link to ="/about">About</Link>
//         </li>
//         <li>
//             <Link to ="/contact">Contact</Link>
//         </li>
//       </ul>
//       <div className="hamburger" onClick=
//       {handleClick}>
//       {click ? (
//         <FaTimes size={20} style={{color:
//         "#fff"}}/>
//         ) : (
//         <FaBars size={20} style={{color:"#fff"
//         }}/>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Navbar



const Navbar = () => {
  
  const [nav, setNav]= useState(false);
  // array that contains objects with id and link for nav links
  const links =[
  {
 id: 1,
 link:'home'
  },
  {
    id: 2,
    link:'about'
     },
     {
      id: 3,
      link:'in development'
       },
       {
        id: 4,
        link:'projects'
         },
         {
          id: 5,
          link:'contact'
           },
]
  
  
  
  return (
                        //  -justify along main axis w/ equal space between   w100% h80px               -align items along the center of the container's cross axis
    <div className="flex justify-between item-center w-full h-20 px-4 text-white bg-black fixed"> 
      <div className="ml-2 ">
      <Link to="/">
        <img src={logo} alt="logo"className="w-24 h-24 "></img>
       </Link>
     </div>
      <ul className="hidden md:flex">
       {/* map over links array- create li and content is the link from array object */}
       {links.map(({id, link }) => (
        <li key={id}
        className="px-4 curser-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 ">
        {link}</li>

       )
       )}
        
       </ul>
{/* on click of hamburger menu- setNav to true */}
       <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        {/* if true -open-              otherwise */}
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
       </div>
      
      {/* if nav is true then only ...false show nothing */}
        {nav &&(
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-teal-500 text-white-500">
        {links.map(({id, link }) => (
        <li key={id}
        className="px-4 curser-pointer capitalize py-6 text-4xl hover:scale-105 duration-200 ">
        {link}
        </li>

       )
       )}
        </ul>
        )}
    
    </div>
  )
}

export default Navbar
