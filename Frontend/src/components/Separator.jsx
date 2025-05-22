const Separator = ({ currentSectionId }) => {
  const handleScroll = () => {
    const currentSection = document.getElementById(currentSectionId);
    if (currentSection && currentSection.nextElementSibling) {
      currentSection.nextElementSibling.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="scroll-smooth absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
      <button
        onClick={handleScroll}
        className="animate-bounce text-cyan-400 text-3xl mb-1 cursor-pointer"
      >
        ↓
      </button>
      <div className="w-36 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 opacity-70 animate-fade-in" />
    </div>
  );
};

export default Separator;
