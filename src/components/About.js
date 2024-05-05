import React from 'react'

const About = () => {
  return (
    <div name="about" className='bg-[#0a192f] w-full h-screen text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#00a693]'>About</p>
                </div>
                <div>

                </div>
            </div>
            <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                  <p className='text-4xl font-bold'>
                    Hi, I am Shreya, Nice to meet you. Please take a look around.
                  </p> 
                </div>
                <div>
                  <p>
                    I am a final year undergraduate pursuing my bachelors in Computer Science and Engineering.
                    I am react.js developer and love to create interactive UIs. I have interned as a
                    ui developer and have a hands on experience with frontend development. Apart from my time on screens,
                    I also love to compose and perform poetry.
                  </p> 
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default About