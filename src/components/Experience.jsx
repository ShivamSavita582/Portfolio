// import React from 'react'
// import { motion } from 'framer-motion'
// import { workData } from '../assets/assets'

// const Experience = () => {
//   return (
//     <motion.div
//     initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.1, ease: "easeOut" }}
//       viewport={{ once: false, amount: 0.2 }}
//       id='project'
//       className='bg-gray-800  py-20 '>
//         <div className='container mx-auto px-6'>
//         <h3 className='text-4xl text-white text-center font-bold mb-4'>Work <span className='text-purple-500'>Experience</span></h3>
//         <p className='text-gray-300  text-center max-w-2xl mx-auto  mb-16'>My professional journey  so far</p>
//         <div className='max-w-3xl  mx-auto'>
//             <div className='space-y-12'>
//                 {
//                     workData.map((data,index)=>(
//                         <div key={index} className="relative pl-12 before:content-[''] 
//                         before:absolute before:left-0 before:top-0 before:w-[2px] 
//                         before:h-full  before:bg-purple-500 cursor-pointer hover:-translate -y-2 transition-all duration-300">
//                             {/* TimeLine*/}
//                             <div className='absolute left[0.5rem] top-0
//                             w-6 h-6 rounded-full bg-purple-500'></div>

//                             {/* Box */}
//                             <div className='bg-gray-400 rounded-2xl p-6 '>
//                                 <div className='flex justify-between items-start mb-2'>
//                                     <h3 className='text-xl font-semibold'>{data.role}</h3>
//                                     <span className='px-3 py-1 bg-purple-500/20 text-purple-500 
//                                     rounded-full text-xs md:text-sm '>{data.duration}</span>
//                                 </div>
//                                 <p className='text-gray-400 mb-2'>{data.company}</p>
//                                 <p className='text-gray-300'>{data.description}</p>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>

//         </div>
//       </motion.div>
//   )
// }

// export default Experience