
const ParticleButton = () => {
  return (
    <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg relative overflow-hidden group transition-all hover:bg-indigo-700 transform hover:scale-105">
      <span className="relative z-10">Click Me</span>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-2 left-4 w-1 h-1 bg-yellow-300 rounded-full animate-ping animation-delay-0"></div>
        <div className="absolute top-4 left-2 w-0.5 h-0.5 bg-pink-300 rounded-full animate-ping animation-delay-100"></div>
        <div className="absolute bottom-3 left-6 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-ping animation-delay-200"></div>
        <div className="absolute top-3 right-3 w-1 h-1 bg-green-300 rounded-full animate-ping animation-delay-300"></div>
        <div className="absolute bottom-2 right-5 w-0.5 h-0.5 bg-purple-300 rounded-full animate-ping animation-delay-400"></div>
        <div className="absolute top-5 center w-1 h-1 bg-orange-300 rounded-full animate-ping animation-delay-500"></div>
      </div>
    </button>
  );
};

export default ParticleButton;
