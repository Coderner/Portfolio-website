import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='bg-[#0a192f] text-gray-300 w-full h-screen flex justify-center items-center p-4'>
         <form action="https://getform.io/f/jawxkyjb" method='POST' className='flex flex-col items-center max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#00a693]'>
                        Contact
                    </p>
                </div>
                <p className='py-4'>Submit the form below or shoot me an email at 
                    <span className='text-[#00a693] font-semibold'> shreyashukla680@gmail.com</span>
                </p>
                <input className="mb-4 bg-[#ccd6f6] p-2 rounded w-full text-black" type="text" name="name" placeholder="Name"/>
                <input className="mb-4 bg-[#ccd6f6] p-2 rounded w-full text-black" type="email" name="email" placeholder="Email"/>
                <textarea className='mb-4 bg-[#ccd6f6] p-2 rounded w-full text-black' name="message" rows="10" placeholder='Message'>
                </textarea>
                <button className='rounded p-3 text-white font-semibold bg-[#00a693] hover:text-[#00a693] hover:bg-white w-[30%] hover:text-[110%]'>
                    Let's Collaborate
                </button>
         </form>
    </div>
  )
}

export default Contact