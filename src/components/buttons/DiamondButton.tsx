
const DiamondButton = () => {
  return (
    <button className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 text-white transform rotate-45 hover:rotate-0 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl">
      <span className="transform -rotate-45 hover:rotate-0 transition-transform duration-300 text-sm font-bold">CLICK</span>
    </button>
  );
};

export default DiamondButton;
