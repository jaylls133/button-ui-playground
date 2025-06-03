
const VintageButton = () => {
  return (
    <button className="px-6 py-3 bg-amber-600 text-amber-100 rounded border-2 border-amber-700 relative transition-all hover:bg-amber-700 hover:border-amber-800 shadow-lg font-serif">
      <span className="relative z-10">Vintage</span>
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/20 to-transparent rounded"></div>
      <div className="absolute inset-x-2 top-1 h-px bg-amber-400/50"></div>
      <div className="absolute inset-x-2 bottom-1 h-px bg-amber-800/50"></div>
    </button>
  );
};

export default VintageButton;
