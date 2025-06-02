
const ThreeDTiltButton = () => {
  return (
    <button 
      className="px-6 py-3 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-lg transition-all duration-300 transform hover:rotate-x-12 hover:rotate-y-12 shadow-xl hover:shadow-2xl"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    >
      <span className="relative z-10">Click Me</span>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg transform translate-z-2"></div>
    </button>
  );
};

export default ThreeDTiltButton;
