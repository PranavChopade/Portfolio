import React from 'react'

const Hero = () => {
  return (
    <section id='home' className='w-full min-h-screen bg-[#0d1825] flex flex-col justify-center items-center text-white px-5 md:px-20'>

      <h1 className='text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-snug text-center'>
        Hey, I'm <br />
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-400 animate-pulse'>
          Pranav Chopade
        </span>
      </h1>

      <p className='text-md sm:text-lg md:text-xl text-gray-400 mb-10 text-center'>
        A <span className='text-blue-400 font-medium'>React Developer | UI Enthusiast</span> 🚀
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <a href="#projects" className="px-8 py-3 text-md sm:text-lg bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-400/50">
          🚀 Explore Projects
        </a>
        <a href="./Pranav_Chopade.pdf" target="_blank" className="px-8 py-3 text-md sm:text-lg border border-cyan-400 rounded-xl hover:bg-cyan-400/20 hover:scale-105 transition-all duration-300">
          📄 View Resume
        </a>
      </div>

      <div className="absolute w-[200px] h-[200px] bg-blue-500 rounded-full opacity-20 blur-3xl top-16 left-10"></div>
      <div className="absolute w-[200px] h-[200px] bg-purple-600 rounded-full opacity-20 blur-3xl bottom-16 right-10"></div>

    </section>
  )
}

export default Hero
