
const BeamButton = () => {
  return (
    <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg relative overflow-hidden group transition-all hover:bg-indigo-700">
      <span className="relative z-10">Beam Effect</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
    </button>
  );
};

export default BeamButton;
