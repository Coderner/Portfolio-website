import React from 'react'
import ReactImg from '../assets/react.png';
import Javascript from '../assets/javascript.png';
import Tailwind from '../assets/tailwind.png';
import CSS from '../assets/css.png';
import HTML from '../assets/html.png';
import Github from '../assets/github.png';
import GitHubCalendar from 'react-github-calendar';

const Skills = () => {
  return (
    <div name="skills" className='bg-[#0a192f] text-gray-300 w-full h-screen'>
     <div className='max-w-[1000px] w-full h-full p-4 mx-auto flex flex-col justify-center items-center'>
        <div className='sm:text-center'>
            <p className='text-4xl font-bold inline border-b-4 border-[#00a693]'>Skills</p>
            <p className='py-4'>These are the technologies I worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center py-8 '>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={ReactImg} alt="React Image" className='w-20 mx-auto'/>
                <p className='my-4'>React</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={Javascript} alt="Javascript Image" className='w-20 mx-auto'/>
                <p className='my-4'>Javascript</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={Tailwind} alt="Tailwind Image" className='w-20 mx-auto'/>
                <p className='my-4'>Tailwind</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={CSS} alt="CSS Image" className='w-20 mx-auto'/>
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={HTML} alt="HTML Image" className='w-20 mx-auto'/>
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={Github} alt="Github Image" className='w-20 mx-auto'/>
                <p className='my-4'>Github</p>
            </div>
        </div>
        <div className='w-full py-8 flex justify-center'>
            <GitHubCalendar username="coderner" blockSize={14}/>
        </div>
     </div>
    </div>
  )
}

export default Skills