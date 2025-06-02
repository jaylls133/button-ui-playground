
const MagneticButton = () => {
  return (
    <button className="px-6 py-3 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-lg transition-all duration-300 transform hover:scale-110 hover:rotate-1 shadow-lg hover:shadow-purple-500/50 group">
      <span className="relative z-10 transition-all group-hover:translate-x-1 group-hover:-translate-y-0.5">Click Me</span>
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
    </button>
  );
};

export default MagneticButton;
