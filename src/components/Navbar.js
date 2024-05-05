import React, {useState} from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from "../assets/logo.png";
import { Link } from 'react-scroll';

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
            <li>
                <Link to="home" smooth={true} duration={500} >
                    Home
                </Link>
            </li>
            <li>
                <Link to="about" smooth={true} duration={500} >
                    About
                </Link>
            </li>
            <li>
                <Link to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li>
                <Link to="work" smooth={true} duration={500}>
                    Work
                </Link>
            </li>
            <li>
                <Link to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>
        
        {/* hamburger */}
        <div className='md:hidden z-10' onClick={handleMenu}>
            {menuOpen?<FaTimes/>:<FaBars/>}
        </div>

        {/* mobile menu */}
       
        {menuOpen && (
           <ul className='absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'>
                <li className='py-6 text-3xl'>
                    <Link to="home" onClick={handleMenu} smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li className='py-6 text-3xl'>
                    <Link to="about" onClick={handleMenu} smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li className='py-6 text-3xl'>
                    <Link to="skills" onClick={handleMenu} smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-3xl'>
                    <Link to="work" onClick={handleMenu} smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='py-6 text-3xl'>
                    <Link to="contact" onClick={handleMenu} smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
           </ul>
        )}
        
        <div className='hidden lg:flex flex-col left-0 top-[35%] fixed'>
            <ul>
                <li className='flex justify-between items-center w-[160px] h-[60px]'>
                    <a href="https://www.linkedin.com/in/shreya-shukla010/" className='w-full p-2 flex justify-between items-center ml-[-100px] hover:ml-[-20px] duration-300 bg-[#0a66c2] rounded'>
                        Linked In <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='flex justify-between items-center w-[160px] h-[60px]'>
                    <a href="https://github.com/Coderner" className='w-full p-2 flex justify-between items-center ml-[-100px] hover:ml-[-20px] duration-300 bg-[#333333] rounded'>
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='flex justify-between items-center w-[160px] h-[60px]'>
                    <a href="mailto:shreyashukla680@gmail.com" className='w-full p-2 flex justify-between items-center ml-[-100px] hover:ml-[-20px] duration-300 bg-[#00a693] rounded'>
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='flex justify-between items-center w-[160px] h-[60px]'>
                    <a href="https://drive.google.com/file/d/14LsgcG9Qv-KZOj-x9SGw_mgSpxkRIogs/view?usp=sharing" className='w-full p-2 flex justify-between items-center ml-[-100px] hover:ml-[-20px] duration-300 bg-[#565f69] rounded'>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar