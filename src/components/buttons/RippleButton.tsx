
const RippleButton = () => {
  return (
    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg relative overflow-hidden group transition-all hover:bg-blue-700">
      <span className="relative z-10">Click Me</span>
      <div className="absolute inset-0 bg-white opacity-0 group-active:opacity-20 group-active:animate-ping rounded-full"></div>
    </button>
  );
};

export default RippleButton;
