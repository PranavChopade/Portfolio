import React from 'react'
import blog from '../assets/blog.png'
import eventManagement from '../assets/eventmanagement.png'
import stopWatch from '../assets/stopWatch.png'
import tailwindImg from '../assets/tailwindImg.png'
import calender from '../assets/calender.png'
import calculator1 from '../assets/calculator1.png'
import notes from '../assets/notes.png'
const ProjectCard = () => {

  const Projects = [
    { img: blog, name: "blog", githubLink: "https://Github.com/PranavChopade" },
    { img: eventManagement, name: "eventManagement", githubLink: "https://Github.com/PranavChopade" },
    { img: stopWatch, name: "stopWatch", githubLink: "https://Github.com/PranavChopade" },
    { img: tailwindImg, name: "tailwindImg", githubLink: "https://Github.com/PranavChopade" },
    { img: calender, name: "calender", githubLink: "https://Github.com/PranavChopade" },
    { img: calculator1, name: "calculator1", githubLink: "https://Github.com/PranavChopade" },
    { img: notes, name: "Redux-Notes-App", githubLink: "https://Github.com/PranavChopade" }
  ]
  return (
    <div className='grid place-content-center place-items-center md:grid-cols-3 lg:grid-cols-4'>
      {Projects.map((data, index) => (
        <div className=' bg-[#0d1825] w-[200px] rounded border border-[#ddd] transition duration-100  text-white hover:border-blue-500 shadow-md  hover:shadow-cyan-500/50 mb-5 hover:scale-105 '>
          <img key={index} src={data.img} alt="Project image" />
          <div className='p-2 break-words'>
            <h1 className='capitalize '>{data.name}</h1>
            <a href={data.githubLink} className=' text-blue-400'>{data.githubLink} {"—>"}</a>
          </div>
        </div>
      ))}

    </div >
  )
}

export default ProjectCard
