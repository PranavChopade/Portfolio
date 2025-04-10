import React, { useEffect, useState } from 'react'
import logo from '../assets/pc_logo.jpg'
import { AiOutlineArrowUp, AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [scroll, setScroll] = useState(false)
  const [topArrow, setTopArrow] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setToggle(false)
  }, [location])
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true)
        setTopArrow(true)
      }
      else {
        setScroll(false)
        setTopArrow(false)

      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const handleTopArrow = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSmoothScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <nav className={`w-full fixed top-0 left-0 z-50 flex justify-between 
        items-center p-2 md:px-14 text-white
        ${scroll ? "bg-[#0d1825]/90 shadow-lg backdrop-blur-lg" : "bg-[#0d1825]"}`}>

        <div>
          <img onClick={() => handleSmoothScroll('home')} src={logo} className='w-16 rounded-xl cursor-pointer hover:shadow-lg transition duration-300' alt="logo" />
        </div>

        <ul className='hidden md:flex gap-5 text-xl'>
          <li>
            <Link to="#" onClick={() => handleSmoothScroll('home')} className='cursor-pointer hover:text-blue-300 transition duration-200'>Home</Link>
          </li>
          <li>
            <Link to="#" onClick={() => handleSmoothScroll('projects')} className='cursor-pointer hover:text-blue-300 transition duration-200'>Projects</Link>
          </li>
          <li>
            <Link to="#" onClick={() => handleSmoothScroll('about')} className='cursor-pointer hover:text-blue-300 transition duration-200'>About</Link>
          </li>
          <li>
            <Link to="#" onClick={() => handleSmoothScroll('contact')} className='cursor-pointer hover:text-blue-300 transition duration-200'>Contact</Link>
          </li>
        </ul>

        <div className='md:hidden mr-4 text-white cursor-pointer' onClick={() => setToggle(!toggle)}>
          {toggle ? <AiOutlineClose size={36} /> : <GiHamburgerMenu size={36} />}
        </div>

        {toggle && (
          <ul className='fixed top-16 left-0 w-full flex flex-col items-center justify-around space-y-4 bg-gradient-to-b from-cyan-200/50 to-black/80 backdrop-blur-lg border border-white/20 rounded-xl  shadow-lg z-50 text-white py-5 px-4 transition-all duration-300  '>
            <li onClick={() => handleSmoothScroll('home')}>
              <Link to="#" className='cursor-pointer text-lg hover:text-blue-400 transition duration-200'>Home</Link>
            </li>
            <li onClick={() => handleSmoothScroll('projects')}>
              <Link to="#" className='cursor-pointer text-lg hover:text-blue-400 transition duration-200'>Projects</Link>
            </li>
            <li onClick={() => handleSmoothScroll('about')}>
              <Link to="#" className='cursor-pointer text-lg hover:text-blue-400 transition duration-200'>About</Link>
            </li>
            <li onClick={() => handleSmoothScroll('contact')}>
              <Link to="#" className='cursor-pointer text-lg hover:text-blue-400 transition duration-200'>Contact</Link>
            </li>
          </ul>
        )}
      </nav>

      {topArrow && (
        <div onClick={handleTopArrow} className='h-12 w-12 border rounded-full bg-transparent fixed bottom-6 right-7 flex justify-center items-center text-white cursor-pointer'>
          <AiOutlineArrowUp size={24} />
        </div>
      )}
    </header>
  );
};

export default Navbar;
