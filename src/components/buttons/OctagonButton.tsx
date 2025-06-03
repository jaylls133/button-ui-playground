
const OctagonButton = () => {
  return (
    <button className="relative group">
      <div className="w-16 h-16 bg-orange-500 text-white flex items-center justify-center font-semibold transition-all hover:bg-orange-600 transform hover:scale-105"
           style={{
             clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
           }}>
        <span className="text-xs">OCT</span>
      </div>
    </button>
  );
};

export default OctagonButton;
