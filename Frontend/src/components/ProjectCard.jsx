import React from 'react';
import blog from '../assets/blog.jpg';
import eventManagement from '../assets/eventmanagement.png';
import stopWatch from '../assets/stopWatch.png';
import responsive from '../assets/responsive.jpg';
import calender from '../assets/calender.png';
import Todo from '../assets/Todo.jpg';
import notes from '../assets/notes.jpg';
import expense from '../assets/expense.png';
import UserAuthentication from '../assets/User-Authentication.jpg';

const ProjectCard = () => {
  const Projects = [
    { img: notes, name: "Redux Notes App", githubLink: "https://github.com/PranavChopade/React-Projects/tree/main/Projects/Redux-Notes-App" },
    { img: Todo, name: "Todo", githubLink: "https://github.com/PranavChopade/React-Projects/tree/main/Projects/Todo" },
    { img: expense, name: "Expense Tracker", githubLink: "https://github.com/PranavChopade/React-Projects/tree/main/Projects/Expense-Tracker" },
    { img: blog, name: "Blog", githubLink: "https://github.com/PranavChopade/React-Projects/tree/main/Projects/blog" },
    { img: eventManagement, name: "Event Management", githubLink: "https://github.com/PranavChopade/React-Projects/tree/main/Projects/event-management-app" },
    { img: responsive, name: "Responsive Web", githubLink: "https://github.com/PranavChopade/Tailwind-Responsiveness" },
    { img: UserAuthentication, name: "User Authentication", githubLink: "https://github.com/PranavChopade/React-Projects/tree/main/Projects/UserAuthentication" },
    { img: stopWatch, name: "Stopwatch", githubLink: "https://github.com/PranavChopade/React-Projects/tree/main/Projects/Stopwatch" },
    { img: calender, name: "Calendar", githubLink: "https://github.com/PranavChopade" },
  ];

  return (
    <div className="grid place-items-center md:grid-cols-2 lg:grid-cols-3 gap-10">
      {Projects.map((data, index) => (
        <div
          key={index}
          className="relative group bg-gradient-to-br from-[#101e2e] to-[#0d1825] w-[340px] rounded-2xl overflow-hidden border border-cyan-700/20 hover:border-cyan-400/70 shadow-lg shadow-cyan-800/10 hover:shadow-cyan-500/30 transform transition-all duration-300 hover:scale-[1.03]"
        >
          <div className="relative">
            <img
              src={data.img}
              alt={data.name}
              className="w-full h-52 object-fill brightness-90 group-hover:brightness-90 transition duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-20 transition duration-300"></div>
          </div>

          <div className="p-5">
            <h2 className="text-xl font-semibold text-white capitalize mb-2 tracking-wide group-hover:text-cyan-400 transition duration-300">
              {data.name}
            </h2>
            <a
              href={data.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-cyan-300 hover:text-white font-medium bg-cyan-500/10 hover:bg-cyan-400/20 px-4 py-2 rounded-lg transition duration-300"
            >
              🔗 View Project →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
