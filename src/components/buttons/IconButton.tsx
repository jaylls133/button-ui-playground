
const IconButton = () => {
  return (
    <button className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-all flex items-center space-x-2">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 12l-6-6h12l-6 6z"/>
      </svg>
      <span>Download</span>
    </button>
  );
};

export default IconButton;
