
const SunsetButton = () => {
  return (
    <button className="px-6 py-3 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white rounded-lg relative overflow-hidden group transition-all hover:from-orange-500 hover:via-red-600 hover:to-pink-600 transform hover:scale-105">
      <span className="relative z-10">Sunset</span>
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-red-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </button>
  );
};

export default SunsetButton;
