
const PaintSplashButton = () => {
  return (
    <button className="px-6 py-3 bg-blue-500 text-white rounded-lg relative overflow-hidden group transition-all hover:bg-blue-600">
      <span className="relative z-10">Click Me</span>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute top-2 left-3 w-3 h-3 bg-yellow-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-3 right-4 w-2 h-2 bg-pink-300 rounded-full animate-ping animation-delay-100"></div>
        <div className="absolute top-4 right-2 w-4 h-4 bg-green-300 rounded-full animate-ping animation-delay-200"></div>
      </div>
    </button>
  );
};

export default PaintSplashButton;
