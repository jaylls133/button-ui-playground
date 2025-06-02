
const LightModeButton = () => {
  return (
    <button className="px-6 py-3 bg-white text-gray-800 rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-lg hover:shadow-gray-200/50">
      <span className="flex items-center space-x-2">
        <span>☀️</span>
        <span>Light Mode</span>
      </span>
    </button>
  );
};

export default LightModeButton;
