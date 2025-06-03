
const WaveButton = () => {
  return (
    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg relative overflow-hidden group transition-all hover:bg-blue-700">
      <span className="relative z-10">Wave Effect</span>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-[slide_1s_ease-in-out_infinite] group-hover:translate-x-full"></div>
      </div>
    </button>
  );
};

export default WaveButton;
