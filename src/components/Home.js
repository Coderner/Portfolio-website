import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className='bg-[#0a192f] w-full h-screen'>
         <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#00a693]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl text-[#ccd6f6] font-bold'>Shreya Shukla</h1>
            <h2 className='text-4xl sm:text-7xl text-[#8892b0] font-bold'>I am a Front-end Developer.</h2>
            <p className='py-4 text-[#8892b0] max-w-[800px]'>I am a frontend developer specializing in building exceptional digital experiences. Currently
               I am focused on building responsive user experiences.
            </p>
            <div>
                <button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00a693] hover:border-[#00a693]'>
                    View Work <HiArrowNarrowRight className='ml-2 group-hover:rotate-90'/>
                </button>
            </div>
         </div>
    </div>
  )
}

export default Home