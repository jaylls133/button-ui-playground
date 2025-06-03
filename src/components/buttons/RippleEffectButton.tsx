
const RippleEffectButton = () => {
  return (
    <button className="px-6 py-3 bg-green-500 text-white rounded-lg relative overflow-hidden group transition-all hover:bg-green-600">
      <span className="relative z-10">Ripple Effect</span>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
        <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-white/30 rounded-full group-hover:w-full group-hover:h-full group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 transition-all duration-500"></div>
      </div>
    </button>
  );
};

export default RippleEffectButton;
