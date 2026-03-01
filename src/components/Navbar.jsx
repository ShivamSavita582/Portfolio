import React,{useState} from "react";

import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { div } from "framer-motion/client";

const Navbar = () => {
const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className="fixed w-full  text-center z-50 bg-gray-600 backdrop-blur-sm py-6 px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center ">
        <div>
          <a href="#" className="md:text-5xl sm:text-2xl font-bold text-white ">
            Portfolio
          
            {/* <div className="w-4  h-4 bg-purple-600 rounded-full"></div> */}
          </a>
        </div>
        <div className="hidden  text-2xl font-semibold md:flex space-x-10">
          <a
            href="#home"
            className="relative text-white/80 transition-duration-300 hover:text-purple-500 group"
          >
            <span>Home</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#about"
            className="relative text-white/80 transition-duration-300 hover:text-purple-500 group"
          >
            <span>About</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#skills"
            className="relative text-white/80 transition-duration-300 hover:text-purple-500 group"
          >
            <span>Skills</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#project"
            className="relative text-white/80 transition-duration-300 hover:text-purple-500 group"
          >
            <span>Projects</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#experience"
            className="relative text-white/80 transition-duration-300 hover:text-purple-500 group"
          >
            <span>Experience</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="relative text-white/80 transition-duration-300 hover:text-purple-500 group"
          >
            <span>Contact</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          
     </div>
     <div className='md:hidden'>
           {showMenu ? 
            <FaXmark  onClick={()=>setShowMenu(!showMenu)} className="text-2xl cursor-pointer"/>:
            <FaBars  onClick={()=>setShowMenu(!showMenu)}  className="text-2xl cursor-pointer"/>
           }
        </div>
     </div>
      {/*Mobile menu*/}

      {
        showMenu && (
          <div className="md:hidden mt-4  bg-dark-300 h-screen rounded-lg
          p-4 flex flex-col space-y-4">

            <a
            href="#home"
            className="relative text-white/80 transition-duration-300 hover:text-purple-500 group"
          >
            <span>Home</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#about"
            className="relative text-white/80 transition-duration-300 hover:text-purple-500 group"
          >
            <span>About</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#skills"
            className="relative text-white/80 transition-duration-300 hover:text-purple-500 group"
          >
            <span>Skills</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#project"
            className="relative text-white/80 transition-duration-300 hover:text-purple-500 group"
          >
            <span>Projects</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#experience"
            className="relative text-white/80 transition-duration-300 hover:text-purple-500 group"
          >
            <span>Experience</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="relative text-white/80 transition-duration-300 hover:text-purple-500 group"
          >
            <span>Contact</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          </div>
        )
      }
    </nav>
  );
};

export default Navbar;
