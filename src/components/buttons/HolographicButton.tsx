
const HolographicButton = () => {
  return (
    <button className="px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white rounded-lg relative overflow-hidden group transition-all hover:shadow-2xl transform hover:scale-105">
      <span className="relative z-10 font-semibold">Holographic</span>
      <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
    </button>
  );
};

export default HolographicButton;
