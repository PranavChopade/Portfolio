import React from 'react';
import blog from '../assets/blog.jpg';
import eventManagement from '../assets/eventmanagement.png';
import responsive from '../assets/responsive.jpg';
import Todo from '../assets/Todo.jpg';
import notes from '../assets/notes.jpg';
import expense from '../assets/expense.png';
import UserAuthentication from '../assets/User-Authentication.jpg';

const ProjectCard = () => {
  const Projects = [
    { img: expense, name: "Expense Tracker", githubLink: "https://github.com/PranavChopade/React-Projects/tree/main/Projects/Expense-Tracker", liveLink: 'https://react-projects-frontend-e0a9.onrender.com/' },
    { img: notes, name: "Redux Notes", githubLink: "https://github.com/PranavChopade/React-Projects/tree/main/Projects/Redux-Notes-App" },
    { img: Todo, name: "Todo", githubLink: "https://github.com/PranavChopade/React-Projects/tree/main/Projects/Todo" },
    { img: UserAuthentication, name: "User Authentication", githubLink: "https://github.com/PranavChopade/React-Projects/tree/main/Projects/UserAuthentication" },
    { img: responsive, name: "Responsive Web", githubLink: "https://github.com/PranavChopade/Tailwind-Responsiveness", liveLink: '' },
    { img: blog, name: "Blog", githubLink: "https://github.com/PranavChopade/React-Projects/tree/main/Projects/blog" },
    { img: eventManagement, name: "Event Management", githubLink: "https://github.com/PranavChopade/React-Projects/tree/main/Projects/event-management-app" },
  ];

  return (
    <div className="grid place-items-center md:grid-cols-2 lg:grid-cols-4 gap-10">
      {Projects.map((data, index) => (
        <div
          key={index}
          className="relative group bg-gradient-to-br from-[#101e2e] to-[#0d1825] w-[250px] rounded-2xl overflow-hidden border border-cyan-700/20 hover:border-cyan-400/70 shadow-lg shadow-cyan-800/10 hover:shadow-cyan-500/30 transform transition-all duration-300 hover:scale-[1.03]"
        >
          <div className="relative">
            <img
              src={data.img}
              alt={data.name}
              className="w-70 h-40 object-fill brightness-90 group-hover:brightness-90 transition duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-20 transition duration-300"></div>
          </div>
          <div className='flex justify-between items-center gap-3 group h-full'>

            <div className="p-3">
              <h2 className="text-md font-semibold text-white capitalize mb-2 tracking-wide group-hover:text-cyan-400 transition duration-300">
                {data.name}
              </h2>
              <div className='flex gap-3'>
                <a
                  href={data.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-cyan-300 hover:text-white font-base bg-cyan-500/10 hover:bg-cyan-400/20 px-4 py-2 rounded-lg transition duration-300"
                >
                  Code
                </a>
                {data.liveLink &&
                  <a
                    href={data.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm text-cyan-300 hover:text-white font-base bg-cyan-500/10 hover:bg-cyan-400/20 px-4 py-2 rounded-lg transition duration-300"
                  >
                    Demo
                  </a>}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
