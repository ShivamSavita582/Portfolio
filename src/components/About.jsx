import React from "react";
import { motion } from "framer-motion";
import { aboutInfo, assets } from "../assets/assets";
import Photo from '../assets/ShivamImg.jpeg'
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-10 "
    >
      <div className="container mx-0 px-6 text-center">
        {/* Heading */}
        <h2 className=" text-3xl md:text-5xl text-center font-bold  mb-4 md:-mr-100 text-white ">
          About <span className="text-yellow-500 "> Me</span>
        </h2>
        <p className="text-gray-50 text-center  text-2xl mr-0  max-w-2xl mx-auto mb-15">
         
        </p>

        <div className="flex flex-col md:flex-row items-center gap-20 md:m-10 md:p-10">
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden ">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full h-1/2 object-cover"
              src={Photo}
              alt="Profile"
            />
          </div>
          <motion.div
          initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="md:w-1/2"
          >
            <div className="rounded-2xl p-3 md:p-5  ">
                {/* <h3 className="text-4xl font-bold mb-20  ">My Journey</h3> */}
                <p className="text-gray-200 mb-6 md:text-xl font-semibold">Hi, I’m a passionate Frontend Developer who enjoys building clean, responsive, and user-friendly web interfaces. I specialize in creating modern web applications using React and Tailwind CSS, focusing on performance, accessibility, and smooth user experience.</p>
                <p className="text-gray-200 mb-6 md:text-xl font-semibold">I love turning ideas into interactive digital experiences and continuously learning new technologies to improve my skills. From crafting responsive layouts to optimizing UI components, I aim to write scalable and maintainable code.</p>
                <p className="text-gray-200 mb-6 md:text-xl font-semibold">I’m currently exploring advanced frontend concepts and working on real-world projects to strengthen my development expertise. Feel free to explore my work and connect with me!</p>

                {/*Card*/}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {
                        aboutInfo.map((data,index)=>(
                            <div key={index} className="bg-gray-800 
                            rounded-2xl p-3 md:p-6 transition-transform duration-300 hover:translate-y-5 cursor-pointer">
                                <div className="text-purple-500 text-4xl mb-4 text-center">
                                    <data.icon/>
                                    <h3 className="text-2xl font-semibold text-gray-100 -mt-5">{data.title}</h3>
                                </div>
                                {/* <h3 className="text-xl text-gray-100 mb-3">{data.title}</h3> */}
                                <p className=" text-gray-400 text-xl"> {data.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
