
const SketchButton = () => {
  return (
    <button className="px-6 py-3 bg-white text-gray-800 rounded-none border-2 border-gray-800 relative transform hover:rotate-1 transition-all" 
            style={{
              borderStyle: 'dashed',
              boxShadow: '3px 3px 0px #000',
              fontFamily: 'Comic Sans MS, cursive'
            }}>
      <span className="relative">Click Me</span>
      <div className="absolute -top-1 -right-1 w-2 h-2 border border-gray-800 rounded-full bg-white"></div>
    </button>
  );
};

export default SketchButton;
