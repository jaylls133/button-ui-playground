
const ArrowButton = () => {
  return (
    <button className="relative group">
      <div className="w-20 h-12 bg-blue-500 text-white flex items-center justify-center font-semibold transition-all hover:bg-blue-600 transform hover:scale-105"
           style={{
             clipPath: 'polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)'
           }}>
        <span className="text-xs">→</span>
      </div>
    </button>
  );
};

export default ArrowButton;
