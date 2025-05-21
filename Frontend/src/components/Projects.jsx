import Separator from "./Separator";
import ProjectCard from './Projectcard';
const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full min-h-screen bg-[#0d1825] text-white px-6 md:px-20 scroll-mt-32 py-16 overflow-hidden"
    >
      {/* Decorative Background Glows */}
      <div className="absolute w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full top-0 left-[1%] animate-pulse pointer-events-none"></div>
      <div className="absolute w-80 h-80 bg-purple-600/20 blur-3xl rounded-full bottom-[-10%] right-[2%] animate-pulse pointer-events-none"></div>

      <h1 className="text-center text-[44.5px] md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent tracking-wide leading-tight drop-shadow-xl animate-fade-in-down">
        My Projects
      </h1>
      <p className="text-center text-gray-400 mt-4 mb-12 text-base md:text-lg font-light max-w-2xl mx-auto animate-fade-in-up">
        Handcrafted builds that blend performance, design, and passion.
      </p>
      <div className="animate-fade-in-up min-h-screen mb-10">
        <ProjectCard />
      </div>
      <Separator />
    </section>
  );
};

export default Projects;
