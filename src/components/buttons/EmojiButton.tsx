
const EmojiButton = () => {
  return (
    <button className="px-6 py-3 bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-lg hover:from-pink-500 hover:to-purple-600 transition-all transform hover:scale-105 flex items-center space-x-2">
      <span>Click Me</span>
      <span className="text-xl animate-bounce">🚀</span>
    </button>
  );
};

export default EmojiButton;
