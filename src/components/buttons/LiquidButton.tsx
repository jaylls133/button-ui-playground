
const LiquidButton = () => {
  return (
    <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full relative overflow-hidden group transition-all hover:from-cyan-500 hover:to-blue-600 transform hover:scale-105">
      <span className="relative z-10">Liquid</span>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full animate-pulse"></div>
      </div>
    </button>
  );
};

export default LiquidButton;
