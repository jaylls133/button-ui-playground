
const TriangleButton = () => {
  return (
    <button className="relative group">
      <div className="w-16 h-16 bg-red-500 text-white flex items-center justify-center font-semibold transition-all hover:bg-red-600 transform hover:scale-105"
           style={{
             clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
           }}>
        <span className="text-xs mt-4">△</span>
      </div>
    </button>
  );
};

export default TriangleButton;
