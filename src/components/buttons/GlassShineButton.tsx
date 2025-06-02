
const GlassShineButton = () => {
  return (
    <button className="px-6 py-3 bg-gradient-to-r from-blue-500/80 to-purple-500/80 backdrop-blur-sm text-white rounded-lg relative overflow-hidden group transition-all hover:from-blue-600/80 hover:to-purple-600/80">
      <span className="relative z-10">Click Me</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
    </button>
  );
};

export default GlassShineButton;
