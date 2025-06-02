
const SwipeToConfirmButton = () => {
  return (
    <div className="relative w-64 h-12 bg-gray-200 rounded-full overflow-hidden group">
      <div className="absolute inset-y-1 left-1 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold cursor-pointer group-hover:translate-x-52 transition-transform duration-300">
        →
      </div>
      <div className="flex items-center justify-center h-full text-gray-600 font-medium">
        Swipe to confirm
      </div>
    </div>
  );
};

export default SwipeToConfirmButton;
