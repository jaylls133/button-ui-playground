
const AnimatedButton = () => {
  return (
    <button className="px-6 py-3 bg-indigo-500 text-white rounded-lg relative overflow-hidden group transition-all hover:bg-indigo-600">
      <span className="relative z-10">Click Me</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
    </button>
  );
};

export default AnimatedButton;
