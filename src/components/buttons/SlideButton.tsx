
const SlideButton = () => {
  return (
    <button className="px-6 py-3 bg-green-600 text-white rounded-lg relative overflow-hidden group transition-all hover:bg-green-700">
      <span className="relative z-10 transition-transform group-hover:translate-x-2">Click Me</span>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">→</div>
    </button>
  );
};

export default SlideButton;
