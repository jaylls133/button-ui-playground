
const GradientBorderButton = () => {
  return (
    <button className="px-6 py-3 bg-white text-gray-700 rounded-lg relative overflow-hidden group transition-all hover:text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute inset-[2px] bg-white rounded-lg group-hover:bg-transparent transition-all"></div>
      <span className="relative z-10">Click Me</span>
    </button>
  );
};

export default GradientBorderButton;
