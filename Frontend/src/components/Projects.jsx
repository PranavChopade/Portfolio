import React from 'react'
import ProjectCard from './Projectcard'
const Projects = () => {
  return (
    <section id='projects'
      className='bg-[#0d1825] text-white px-5 md:px-20  scroll-mt-15   '>
      <h1 className='text-center text-blue-500 text-3xl font-extrabold md:text-5xl mb-6'>My Projects</h1>
      <ProjectCard />
    </section>
  )
}

export default Projects
