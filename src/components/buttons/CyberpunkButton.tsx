
const CyberpunkButton = () => {
  return (
    <button className="px-6 py-3 bg-black text-cyan-400 rounded border border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all font-mono font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)] relative overflow-hidden group">
      <span className="relative z-10">CYBERPUNK</span>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
    </button>
  );
};

export default CyberpunkButton;
