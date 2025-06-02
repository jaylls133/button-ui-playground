
const LiquidButton = () => {
  return (
    <button className="px-6 py-3 bg-cyan-400 text-white rounded-full relative overflow-hidden group transition-all duration-500 hover:bg-cyan-500 transform hover:scale-110">
      <span className="relative z-10">Click Me</span>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
    </button>
  );
};

export default LiquidButton;
