
const StitchedButton = () => {
  return (
    <button className="px-6 py-3 bg-amber-100 text-amber-800 rounded-lg border-2 border-amber-600 relative transition-all hover:bg-amber-200 hover:border-amber-700 shadow-md hover:shadow-lg">
      <span className="relative z-10 font-semibold">Click Me</span>
      <div className="absolute top-1 left-1 right-1 h-0.5 bg-amber-600 opacity-50"></div>
      <div className="absolute bottom-1 left-1 right-1 h-0.5 bg-amber-600 opacity-50"></div>
      <div className="absolute top-1 bottom-1 left-1 w-0.5 bg-amber-600 opacity-50"></div>
      <div className="absolute top-1 bottom-1 right-1 w-0.5 bg-amber-600 opacity-50"></div>
      <div className="absolute top-3 left-3 w-1 h-1 bg-amber-600 rounded-full"></div>
      <div className="absolute top-3 right-3 w-1 h-1 bg-amber-600 rounded-full"></div>
      <div className="absolute bottom-3 left-3 w-1 h-1 bg-amber-600 rounded-full"></div>
      <div className="absolute bottom-3 right-3 w-1 h-1 bg-amber-600 rounded-full"></div>
    </button>
  );
};

export default StitchedButton;
