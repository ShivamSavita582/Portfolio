import React from 'react'

const ProjectCard = ({title,description,image,tech}) => {
  return (
    <div className='bg-gray-600  rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer'>
        <img src={image} alt={title} className='w-full h-60 object-cover' />
        <div className='p-6 '>
            <h3  className='text-xl font-semibold mb-2'>{title}</h3>
            <p className='text-gray-400 mb-4'>{description}</p>
            <div className='flex flex-wrap gap-2 mb-4 '>
                {tech.map((item,index)=>(
                    <span key={index} className='px-3 py-1 bg-gray-400 rounded-2xl'>
                        {item}
                    </span>
                ))}
                
            </div>
            <div className='flex  gap-2'>
                <a href='#' className='flex-1 text-center px-4 py-2 bg-purple-500 rounded-lg  font-medium hover:bg-purple-700 transition duration-300'>View Demo</a>
                <a href='#' className='flex-1 text-center px-4 py-2 border-2 border-purple-500 rounded-lg  font-medium hover:bg-purple-500 transition duration-300'>Code</a>
            

            </div>
        </div>
    </div>
  )
}

export default ProjectCard