import React from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { skills } from "../assets/assets";
const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className='py-20 '
    >
        <div className="container mx-auto px-6">
            <h2 className=" text-3xl md:text-5xl font-bold text-white mb-4 text-center">My <span className=" text-purple-600">Skills</span></h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 md:text-2xl font-semibold">Technologies I work with to bring idea to file</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8   md:w-400  md:h-50  ">
               {
                skills.map((skill,index)=>(
                    <div key={index} className=" bg-gray-700 rounded-2xl p-6 transition-transform duration-300 hover:translate-y-20 cursor-pointer">
                        <div className="flex items-center mb-4 ">
                            <skill.icon className="w-12 h-12 text-purple-500 mr-6"/>
                            <h3 className="text-white text-2xl font-semibold ">{skill.title}</h3>
                        </div>
                        <p className="text-gray-300  text-xl mb-14">{skill.description}</p>
                        <div className="flex flex-wrap gap-2 mb-10">
                            {skill.tags.map((tech)=>(
                                <span key={tech} className="px-5 py-2 bg-gray-600 rounded-full text-xl ">{tech}</span>
                            ))}
                        </div>

                    </div>
                ))
               }
            </div>
        </div>
    </motion.div>
  );
};

export default Skills;
