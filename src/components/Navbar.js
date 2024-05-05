import React, {useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from "../assets/logo.png";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => setMenuOpen(prev => !prev);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-200'>
        <div>
            <img src={Logo} alt="logo" className='w-[50px]'/> 
        </div>

        {/* menu */}
        
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>
        
        {/* hamburger */}
        <div className='md:hidden z-10' onClick={handleMenu}>
            {menuOpen?<FaTimes/>:<FaBars/>}
        </div>

        {/* mobile menu */}
       
        {menuOpen && (
           <ul className='absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'>
                <li className='py-6 text-3xl'>Home</li>
                <li className='py-6 text-3xl'>About</li>
                <li className='py-6 text-3xl'>Skills</li>
                <li className='py-6 text-3xl'>Work</li>
                <li className='py-6 text-3xl'>Contact</li>
           </ul>
        )}
        
    </div>
  )
}

export default Navbar