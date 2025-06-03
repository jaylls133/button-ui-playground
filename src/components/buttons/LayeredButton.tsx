
const LayeredButton = () => {
  return (
    <div className="relative group">
      <button className="px-6 py-3 bg-red-500 text-white rounded-lg relative z-10 transition-all hover:bg-red-600 transform group-hover:-translate-y-1 group-hover:-translate-x-1">
        Click Me
      </button>
      <div className="absolute top-1 left-1 w-full h-full bg-red-400 rounded-lg z-0 transition-all group-hover:translate-y-1 group-hover:translate-x-1"></div>
      <div className="absolute top-2 left-2 w-full h-full bg-red-300 rounded-lg -z-10 transition-all group-hover:translate-y-2 group-hover:translate-x-2"></div>
    </div>
  );
};

export default LayeredButton;
