import React from "react";
import { motion } from "framer-motion";
import HeroImg from "../assets/shivambhai.png";
import { FaDribbble,  FaLinkedinIn,  FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
const Hero = () => {
  // const [count,setCount] = useState(0)
  // setCount(count + 1)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16  from [#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] "
    >
      <div className="container  mx-auto px-6 flex flex-col md:flex-row  items-center justify-between">
        <div className="w-full md:w1/2 text-gray-200 mb-10 md: ">
          <h1 className="text-2xl md:text-7xl font-bold">
            Hi, I'm <span className="text-purple-600">Shivam Savita</span>
          </h1>
          <h2 className=" text-2xl md:text-5xl font-bold mt-5" >Full Stack Developer</h2>
          <p className=" text-sm md:text-2xl font-semibold mt-5">
            {" "}
            I'm a MERN stack developer who loves turning ideas into real
            websites. <br /> I use MongoDB, Express.js, React, and Node.js to
            build awesome web apps. <br /> I enjoy creating things that look
            good and work smoothly. Let's build something cool together!
          </p>
          {/* <div className="flex spaxe-x-4 gap-10 mt-10">
            <a
              href="#"
              className="h-20 w-20 rounded-full bg-gray-700 flex justify-center items-center text-white hover:bg-purple-700 transition duration-300 "
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="#"
              className="w-20 h-20 rounded-full bg-gray-700 flex justify-center items-center text-white hover:bg-purple-700 transition duration-300 "
            >
              <FaLinkedinIn className="text-3xl" />
            </a>
            <a
              href="#"
              className="w-20 h-20 rounded-full bg-gray-700 flex justify-center items-center text-white hover:bg-purple-700 transition duration-300 "
            >
              <CgMail className="text-3xl" />
            </a>
            <a
              href="#"
              className="w-20 h-20 rounded-full bg-gray-700 flex justify-center items-center text-white hover:bg-purple-700 transition duration-300 "
            >
              <FaDribbble className="text-3xl" />
            </a>
          </div> */}
          <div className="flex space-x-6 mt-5">
            <a
              href="#projects"
              className="md:px-25 md:py-5 px-8 md:text-2xl text-xl text-black font-semibold bg-purple-500 mt-4 rounded-2xl  hover:bg-purple-700"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="md:px-25 md:py-5 px-8 md:text-2xl text-xl text-black  font-semibold border-2 border-purple-600 mt-4 rounded-2xl hover:bg-purple-700"
            >
              Contact Me
            </a>
          </div>
        </div>
        {/* --right side image*/}
        <div className="w-full md:w-1/2 flex  justify-center">
          <div className="relative w-80 h-80 md:w-100 md:h-100">
            <div className="absolute inset-0 rounded-full  bg-gradient-to-r from-purle to-pink-500 animate-pulse-slow opacity-200">
              <motion.img
                animate={{ y: [0, -40, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                className="relative rounded-full md:w-100 md:h-100 w-70 h-70 object-cover z-10 animate-float"
                src={HeroImg}
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </div>
      J
    </motion.div>
  );
};

export default Hero;
