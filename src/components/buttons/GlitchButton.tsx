
const GlitchButton = () => {
  return (
    <button className="px-6 py-3 bg-black text-green-400 rounded-lg relative overflow-hidden group font-mono border border-green-400/30 hover:bg-gray-900 transition-all">
      <span className="relative z-10 group-hover:animate-pulse">Click Me</span>
      <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-20 animate-pulse duration-75"></div>
      <div className="absolute top-0 left-0 w-full h-0.5 bg-cyan-400 opacity-0 group-hover:opacity-100 animate-bounce"></div>
      <div className="absolute bottom-0 right-0 w-full h-0.5 bg-magenta-400 opacity-0 group-hover:opacity-100 animate-bounce animation-delay-100"></div>
    </button>
  );
};

export default GlitchButton;
