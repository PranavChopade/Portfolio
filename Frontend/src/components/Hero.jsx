import Separator from "./Separator";
import profile3 from "../../public/profile3.png"

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between bg-[#0d1825] px-6 md:px-24 py-20 text-white"
    >
      <div className="absolute w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full top-0 left-[1%] animate-pulse pointer-events-none"></div>
      <div className="absolute w-80 h-80 bg-purple-600/20 blur-3xl rounded-full bottom-[-10%] right-[2%] animate-pulse pointer-events-none"></div>


      <div className="md:w-1/2 flex flex-col justify-center space-y-6">
        <h2 className="text-lg text-cyan-400 tracking-widest uppercase font-semibold">
          Welcome to my portfolio
        </h2>

        <h1 className="text-4xl font-extrabold text-white leading-tight">
          Hi, I'm <span className="text-cyan-300">Pranav Chopade</span>
        </h1>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-md">
          A <span className="text-white font-medium">React Developer</span> and <span className="text-white font-medium">UI Enthusiast</span>, passionate about building intuitive, responsive, and user-friendly web applications.
        </p>

        <div className="flex space-x-4 pt-4">
          <a
            href="#projects"
            className="px-5 py-2.5 bg-cyan-600 hover:bg-cyan-700 rounded-md font-semibold transition shadow-md"
          >
            View Projects
          </a>
          <a
            href="./Pranav_Chopade.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-gray-400 hover:border-cyan-600 text-gray-200 hover:text-cyan-400 rounded-md font-semibold transition"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
        <div className="w-64 h-64 bg-[#1e293b] rounded-full flex items-center justify-center shadow-lg border border-cyan-800 overflow-hidden">
          <img
            src={profile3}
            alt="userProfile"
            className="object-cover w-full h-full rounded-full border-2 border-[#00d8ff] shadow-[0_0_25px_#00d8ff80]"
          />
        </div>
      </div>

      <Separator />
    </section >
  );
};

export default Hero;
