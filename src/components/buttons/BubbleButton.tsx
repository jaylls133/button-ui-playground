
const BubbleButton = () => {
  return (
    <button className="px-6 py-3 bg-gradient-to-br from-blue-400 to-purple-500 text-white rounded-full relative overflow-hidden group transition-all hover:from-blue-500 hover:to-purple-600 transform hover:scale-105">
      <span className="relative z-10">Click Me</span>
      <div className="absolute top-2 left-3 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-3 right-4 w-3 h-3 bg-white/20 rounded-full animate-bounce"></div>
      <div className="absolute top-4 right-2 w-1.5 h-1.5 bg-white/40 rounded-full animate-ping"></div>
    </button>
  );
};

export default BubbleButton;
