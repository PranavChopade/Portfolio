import React, { useEffect, useState } from 'react'
import logo from '../assets/pc_logo.jpg'
import { AiOutlineArrowUp, AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link, NavLink, useLocation } from 'react-router-dom'
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [scroll, setScroll] = useState(false)
  const [topArrow, setTopArrow] = useState(false)
  const [activeTab, setActiveTab] = useState('home')
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

  useEffect(() => {
    const sections = ['home', 'projects', 'contact'];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      }
      )
    }, { threshold: 0.3 })

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section)
      }
    })
    return () => observer.disconnect()
  }, [])
  return (
    <header>
      <nav className={`w-full fixed top-0 left-0 z-50 flex justify-between 
  items-center p-3 md:px-24 text-white transition-all duration-300
  ${scroll ? "bg-[#0d1825]/80 backdrop-blur-lg shadow-xl border-b border-white/10"
          : "bg-[#0d1825]"}`}>

        <div>
          <img
            onClick={() => { handleSmoothScroll('home'); setActiveTab('home') }}
            src={logo}
            className={`w-14 rounded-xl cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 ${activeTab === "home" ? "text-cyan-400" : "hover:decoration-cyan-500"} `}
            alt="logo"
          />
        </div>

        <ul className="hidden md:flex gap-10 text-lg font-semibold tracking-wide">
          <li>
            <NavLink
              to="#"
              onClick={() => { handleSmoothScroll('home'); setActiveTab('home') }}
              className={`cursor-pointer hover:underline underline-offset-4 transition-all duration-200 ${activeTab === "home" ? "text-cyan-400" : "hover:decoration-cyan-500"}`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              onClick={() => { handleSmoothScroll('projects'); setActiveTab('projects') }}
              className={`cursor-pointer  hover:underline underline-offset-4  transition-all duration-200 ${activeTab === "projects" ? "text-cyan-400" : "hover:decoration-cyan-500"}`}
            >
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink
              to="#"
              onClick={() => { handleSmoothScroll('contact'); setActiveTab('contact') }}
              className={`cursor-pointer  hover:underline underline-offset-4  transition-all duration-200 ${activeTab === "contact" ? "text-cyan-400" : "hover:decoration-cyan-500"}`}
            >
              Contact
            </NavLink>
          </li>

        </ul>

        <div
          className="md:hidden mr-4 text-white cursor-pointer transition-transform duration-300 hover:scale-110"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <AiOutlineClose size={30} /> : <GiHamburgerMenu size={30} />}
        </div>

        {toggle && (
          <ul className="fixed top-16 left-0 w-full flex flex-col items-center space-y-6 bg-[#0d1825]/90 backdrop-blur-md border-t border-white/10 z-50 text-white py-6 px-4 rounded-b-2xl shadow-2xl">
            <li onClick={() => { handleSmoothScroll('home'); setActiveTab('home') }}>
              <Link
                to="#"
                className={`text-lg font-medium hover:text-cyan-400 transition-all duration-200 ${activeTab === "home" ? "text-cyan-400" : "hover:decoration-cyan-500"}`}
              >
                Home
              </Link>
            </li>
            <li onClick={() => { handleSmoothScroll('projects'); setActiveTab('projects') }}>
              <NavLink
                to="#"
                className={`text-lg font-medium hover:text-cyan-400 transition-all duration-200 ${activeTab === "projects" ? "text-cyan-400" : "hover:decoration-cyan-500"}`}
              >
                Projects
              </NavLink>
            </li>
            <li onClick={() => { handleSmoothScroll('contact'); setActiveTab('contact') }}>
              <NavLink
                to="#"
                className={`text-lg font-medium hover:text-cyan-400 transition-all duration-200 ${activeTab === "contact" ? "text-cyan-400" : "hover:decoration-cyan-500"}`}>
                Contact
              </NavLink>
            </li>


          </ul>
        )}
      </nav>

      {
        topArrow && (
          <div
            onClick={handleTopArrow}
            className="h-12 w-12 z-9999 rounded-full fixed bottom-6 right-6 flex items-center justify-center bg-gradient-to-tr from-cyan-400 to-purple-500 text-white shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300"
          >
            <AiOutlineArrowUp size={24} />
          </div>
        )
      }

    </header >
  );
};

export default Navbar;
