
const Separator = () => {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center" >
      <span className="animate-bounce text-cyan-400 text-3xl mb-1">
        ↓
      </span>
      <div className="w-36 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 opacity-70 animate-fade-in" />
    </div>
  )
}

export default Separator;
