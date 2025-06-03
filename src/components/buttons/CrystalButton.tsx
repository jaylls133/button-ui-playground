
const CrystalButton = () => {
  return (
    <button className="px-6 py-3 bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 text-blue-900 rounded-lg relative overflow-hidden group transition-all hover:shadow-xl border border-blue-300 backdrop-blur-sm">
      <span className="relative z-10 font-semibold">Crystal</span>
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
      <div className="absolute top-2 left-3 w-2 h-2 bg-white/60 rounded-full"></div>
      <div className="absolute bottom-3 right-4 w-1 h-1 bg-white/40 rounded-full"></div>
    </button>
  );
};

export default CrystalButton;
