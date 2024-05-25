import React from 'react'

const Experience = () => {
  return (
    <div name="about" className='bg-[#0a192f] w-full h-screen text-gray-300'>
        <div className='flex flex-col justify-center items-center gap-8 w-full h-full'>
                <p className='text-4xl font-bold inline border-b-4 border-[#00a693]'>
                    Work Experience
                </p>
                <div className='max-w-[1000px] w-full px-4'>
                    <div className='flex justify-between text-xl'>
                      <div>SDE Intern</div><div>Feb 2024-Present</div>
                    </div>
                    <div className='flex justify-between text-lg'>
                      <div>Kinesiis System Inc.</div><div>Remote In</div>
                    </div>
                    <p> 
                        - Created frontend from scratch for a HRMS web app aligning closely with Figma designs, using React Js and
                        Material UI
                    </p>
                    <p>
                        - Implemented Firebase Authentication for onboarding and Google maps Api for geofencing.
                    </p>
                </div>  
                <div className='max-w-[1000px] w-full px-4'>
                    <div className='flex justify-between text-xl'>
                      <div>Frontend Developer Intern</div><div>Oct 2023 - Dev 2023</div>
                    </div>
                    <div className='flex justify-between text-lg'>
                      <div>Neolen</div><div>Remote In</div>
                    </div>
                    <p> 
                        - Created a responsive frontend for an all-in-one sales platform, utilizing Next.js and Tailwind CSS.
                    </p>
                    <p>
                        - Implemented Firebase Authentication and applied ESLint for code formatting, significantly improving code
                    readability and maintainability.
                    </p>
                    <p>
                        - Followed industry best practices in development, incorporating code splitting, lazy loading, and server-side
                    rendering for optimal performance
                    </p>
                </div> 
        </div> 
    </div>
  )
}

export default Experience