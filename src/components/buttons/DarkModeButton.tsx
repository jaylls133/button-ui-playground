
const DarkModeButton = () => {
  return (
    <button className="px-6 py-3 bg-gray-800 text-gray-100 rounded-lg border border-gray-700 hover:bg-gray-700 hover:border-gray-600 transition-all shadow-lg hover:shadow-gray-900/50">
      <span className="flex items-center space-x-2">
        <span>🌙</span>
        <span>Dark Mode</span>
      </span>
    </button>
  );
};

export default DarkModeButton;
