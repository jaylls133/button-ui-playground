
const PaperFoldButton = () => {
  return (
    <button className="px-6 py-3 bg-gray-100 text-gray-800 relative group transition-all duration-300 hover:bg-gray-200"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 0 100%)',
              boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.1)'
            }}>
      <span className="relative">Click Me</span>
      <div className="absolute top-0 right-0 w-4 h-4 bg-gray-300 transform rotate-45 translate-x-2 -translate-y-2 group-hover:bg-gray-400 transition-colors"></div>
    </button>
  );
};

export default PaperFoldButton;
