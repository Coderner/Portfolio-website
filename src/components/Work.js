import React from 'react'
import PlantsVsZombies from "../assets/plants.png";
import NetflixGpt from "../assets/netflixgpt.png";
import FoodBytes from "../assets/foodbytes.png";

const Work = () => {
  return (
    <div name="work" className='bg-[#0a192f] text-gray-300 w-full md:h-screen'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#00a693]'>Works</p>
                <p className='py-6'>Check out some of my recent works</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div  style={{backgroundImage: `url(${FoodBytes})`}}
                      className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100 flex flex-col items-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                              Food Ordering website
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://foodbytes.vercel.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 hover:bg-[#00a693] hover:text-white font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href="https://github.com/Coderner/FoodBytes">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 hover:bg-[#00a693] hover:text-white  font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div  style={{backgroundImage: `url(${NetflixGpt})`}}
                      className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100 flex flex-col items-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                              Netflix Clone
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://netflix-gpt-two-psi.vercel.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 hover:bg-[#00a693] hover:text-white font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href="https://github.com/Coderner/netflix-gpt">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 hover:bg-[#00a693] hover:text-white  font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div  style={{backgroundImage: `url(${PlantsVsZombies})`}}
                      className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100 flex flex-col items-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                              Plants vs Zombies Game
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://wonderful-malabi-30160d.netlify.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 hover:bg-[#00a693] hover:text-white font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href="https://github.com/Coderner/Plants-vs-Zombies">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 hover:bg-[#00a693] hover:text-white  font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work