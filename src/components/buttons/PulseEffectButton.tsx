
const PulseEffectButton = () => {
  return (
    <button className="px-6 py-3 bg-emerald-500 text-white rounded-lg relative overflow-hidden transition-all hover:bg-emerald-600">
      <span className="relative z-10">Click Me</span>
      <div className="absolute inset-0 bg-emerald-400 opacity-0 animate-ping rounded-lg"></div>
      <div className="absolute inset-0 bg-emerald-300 opacity-0 animate-pulse rounded-lg animation-delay-150"></div>
    </button>
  );
};

export default PulseEffectButton;
