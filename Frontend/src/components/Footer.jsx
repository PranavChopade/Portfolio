import React, { useState } from 'react'
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Footer = () => {
  const [btnClick, setBtnClick] = useState(false)
  const [newsLetterEmail, setNewsLetterEmail] = useState('')

  const handleBtnClick = (e) => {
    e.preventDefault()
    setBtnClick(true)
    setNewsLetterEmail('')
  }

  const handleSmoothScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="about" className=' bg-[#0d1825]  py-10 px-5 md:px-10 lg:px-20 text-white '>
      <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-4'>

        <div>
          <h1 className='text-4xl text-orange-500 font-semibold  
        '> PC</h1>
          <p className='mt-2 text-gray-400'>
            Join the best Tech Solutions, we Innovate , inspire and delivers the best in industry.
          </p>
        </div>

        <div>
          <h2 className='text-2xl text-blue-400 mb-4'>Quick Links</h2>
          <ul className='space-y-2'>
            <li>
              <Link to="#" onClick={() => handleSmoothScroll("home")} className='text-center'>Home</Link>
            </li>
            <li>
              <Link to="#" onClick={() => handleSmoothScroll("projects")} className='text-center'>Projects</Link>
            </li>
            <li>
              <Link
                to="#" onClick={() => handleSmoothScroll("about")} className='text-center' >About</Link>
            </li>
            <li>
              <Link to="#" onClick={() => handleSmoothScroll("contact")} className='text-center'  >Contact</Link>
            </li>
          </ul>
        </div>


        <div>
          <h1 className='text-2xl text-blue-400 mb-4  '>Follow Us</h1>
          <div className='flex  gap-6'>
            <Link to={"https://www.linkedin.com/in/pranav-chopade-140b6a245/"} target='_blank'>
              <AiOutlineLinkedin size={36} className='hover:text-blue-400 cursor-pointer hover:scale-110 transition transform' />
            </Link>
            <Link to={"https://wa.me/8669279290"} target='_blank'>
              <AiOutlineWhatsApp size={36} className='hover:text-green-500 cursor-pointer hover:scale-110 transition transform' />
            </Link>
            <Link to={"https://github.com/PranavChopade"} target='_blank'>
              <AiOutlineGithub size={36} className='hover:text-gray-400 cursor-pointer hover:scale-110 transition transform' />
            </Link>

            <a href="mailto:pranavchopade129@gmail.com" target="_blank" rel="noopener noreferrer">
              <AiOutlineMail
                size={36}
                className='hover:text-red-300 cursor-pointer hover:scale-110 transition transform'
              />
            </a>


          </div>
        </div>

        <div>
          <h2 className="text-2xl text-blue-400 mb-4">Subscribe</h2>
          <form className=' space-y-3 '>
            <input
              type="email"
              value={newsLetterEmail}
              onChange={(e) => setNewsLetterEmail(e.target.value)}
              className="border border-gray-600 p-2 rounded focus:ring-1 focus:ring-blue-500 focus:outline-none focus:border-blue-500"
              placeholder='enter your email'
              required />
            <button
              type="submit"
              onClick={newsLetterEmail.trim().length >= 10 && handleBtnClick}
              className={`
          ${btnClick ? "border border-pink-500/50 text-pink-400" : "bg-red-500 hover:bg-red-600"} 
           px-7 py-2 rounded font-semibold cursor-pointer transition shadow-sm hover:shadow-pink-500/50 ml-2
          `}>
              {btnClick ? "Subscribed 🎉" : "Subscribe"}
            </button>
          </form>

        </div>

      </div >
    </section >
  )
}

export default Footer
