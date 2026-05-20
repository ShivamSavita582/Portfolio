import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../assets/assets'
import ProjectCard from './ProjectCard'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Project = () => {

    
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id='project'
      className='  py-20 mt-50 '>
        <div className="container mx-auto px-6 ">
            <h2 className='text-5xl font-bold text-center mb-4 '>My <span className='text-purple-500'>Projects</span></h2>
            <p className='text-gray-400 text-center max-w-2xl  mx-auto mb-16 text-2xl font-semibold'>A selection of my recent work</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                {/*--ProjectCards--*/}

                {
                    projects.map((project,index)=>(
                        <ProjectCard key={index} {...project}/>
                    ))
                }
            </div>
            <div className='text-center mt-12 '>
                <a  href="#" className=' text-white text-xl inline-flex items-center px-16 py-5 border border-purple-500 rounded-lg font-medium
                transition-transform duration-300 hover:translatate-y-20'>
                    <span>View More Projects</span>
                    <FaArrowRight className='ml-2'/>
                </a>
            </div>

        </div>

    </motion.div>
  )
}

export default Project