import React from 'react'
import blog from '../assets/blog.png'
import eventManagement from '../assets/eventmanagement.png'
import stopWatch from '../assets/stopWatch.png'
import responsive from '../assets/responsive.jpg'
import calender from '../assets/calender.png'
import Todo from '../assets/Todo.png'
import notes from '../assets/notes.jpg'
const ProjectCard = () => {

  const Projects = [
    { img: notes, name: "Redux-Notes-App", githubLink: "https://github.com/PranavChopade/React-Projects/tree/main/Projects/Redux-Notes-App" },
    { img: blog, name: "blog", githubLink: "https://github.com/PranavChopade/React-Projects/tree/main/Projects/blog" },
    { img: eventManagement, name: "eventManagement", githubLink: "https://github.com/PranavChopade/React-Projects/tree/main/Projects/event-management-app" },
    { img: responsive, name: "responsive", githubLink: "https://Github.com/https://github.com/PranavChopade/Tailwind-Responsiveness" },
    { img: stopWatch, name: "stopWatch", githubLink: "https://github.com/PranavChopade/React-Projects/tree/main/Projects/Stopwatch" },
    { img: calender, name: "calender", githubLink: "https://Github.com/PranavChopade" },
    { img: Todo, name: "Todo", githubLink: "https://github.com/PranavChopade/React-Projects/tree/main/Projects/Todo" },
  ]
  return (
    <div className='grid place-content-center place-items-center md:grid-cols-3 lg:grid-cols-4'>
      {Projects.map((data, index) => (
        <div className=' bg-[#0d1825] w-[200px] rounded border border-[#ddd] transition duration-100  text-white hover:border-blue-500 shadow-md  hover:shadow-cyan-500/50 mb-5 hover:scale-105 '>
          <img key={index} src={data.img} alt="Project image" />
          <div className='p-2 break-words'>
            <h1 className='capitalize '>{data.name}</h1>
            <a href={data.githubLink} className=' text-blue-400'>View Project {"->"}</a>
          </div>
        </div>
      ))}

    </div >
  )
}

export default ProjectCard
