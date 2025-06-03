
const PentagonButton = () => {
  return (
    <button className="relative group">
      <div className="w-16 h-16 bg-teal-500 text-white flex items-center justify-center font-semibold transition-all hover:bg-teal-600 transform hover:scale-105"
           style={{
             clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'
           }}>
        <span className="text-xs">PENT</span>
      </div>
    </button>
  );
};

export default PentagonButton;
