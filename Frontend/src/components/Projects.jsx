import React from 'react'
import ProjectCard from './Projectcard'
const Projects = () => {
  return (
    <section id='projects' className='min-h-screen bg-[#0d1825] text-white py-12 '>
      <h1 className='text-center text-blue-500 text-3xl font-extrabold md:text-5xl mb-12'>My Projects</h1>
      <ProjectCard />
    </section>
  )
}

export default Projects
