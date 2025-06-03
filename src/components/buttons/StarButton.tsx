
const StarButton = () => {
  return (
    <button className="relative group">
      <div className="w-16 h-16 bg-yellow-500 text-white flex items-center justify-center font-semibold transition-all hover:bg-yellow-600 transform hover:scale-105"
           style={{
             clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
           }}>
        <span className="text-xs">★</span>
      </div>
    </button>
  );
};

export default StarButton;
