
const MetallicButton = () => {
  return (
    <button className="px-6 py-3 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 text-gray-800 rounded-lg relative overflow-hidden group transition-all hover:from-gray-400 hover:via-gray-500 hover:to-gray-600 shadow-lg hover:shadow-xl border border-gray-400">
      <span className="relative z-10 font-bold">Click Me</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-lg"></div>
    </button>
  );
};

export default MetallicButton;
