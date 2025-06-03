
const SparkleButton = () => {
  return (
    <button className="px-6 py-3 bg-purple-600 text-white rounded-lg relative overflow-hidden group transition-all hover:bg-purple-700">
      <span className="relative z-10">Sparkle Effect</span>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
        <div className="absolute top-2 left-4 w-1 h-1 bg-yellow-300 rounded-full animate-ping"></div>
        <div className="absolute top-6 left-2 w-0.5 h-0.5 bg-pink-300 rounded-full animate-ping animation-delay-100"></div>
        <div className="absolute bottom-3 left-6 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-ping animation-delay-200"></div>
        <div className="absolute top-3 right-3 w-1 h-1 bg-green-300 rounded-full animate-ping animation-delay-300"></div>
        <div className="absolute bottom-2 right-5 w-0.5 h-0.5 bg-orange-300 rounded-full animate-ping animation-delay-400"></div>
      </div>
    </button>
  );
};

export default SparkleButton;
