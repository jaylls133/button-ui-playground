
const GlassDarkButton = () => {
  return (
    <button className="px-6 py-3 bg-black/20 backdrop-blur-lg border border-white/10 text-white rounded-lg hover:bg-black/30 hover:border-white/20 transition-all shadow-xl">
      <span className="relative z-10">Dark Glass</span>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-black/30 rounded-lg"></div>
    </button>
  );
};

export default GlassDarkButton;
