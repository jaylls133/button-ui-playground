
const HexagonButton = () => {
  return (
    <button 
      className="w-16 h-14 bg-gradient-to-br from-indigo-500 to-blue-600 text-white hover:from-indigo-600 hover:to-blue-700 transition-all transform hover:scale-110 flex items-center justify-center text-xs font-bold shadow-lg hover:shadow-xl"
      style={{
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
      }}
    >
      HEX
    </button>
  );
};

export default HexagonButton;
