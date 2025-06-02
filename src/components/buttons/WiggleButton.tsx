
const WiggleButton = () => {
  return (
    <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg transition-all hover:bg-yellow-600 hover:animate-[wiggle_0.5s_ease-in-out_infinite] transform">
      <style jsx>{`
        @keyframes wiggle {
          0%, 7% { transform: rotateZ(0) }
          15% { transform: rotateZ(-15deg) }
          20% { transform: rotateZ(10deg) }
          25% { transform: rotateZ(-10deg) }
          30% { transform: rotateZ(6deg) }
          35% { transform: rotateZ(-4deg) }
          40%, 100% { transform: rotateZ(0) }
        }
      `}</style>
      Click Me
    </button>
  );
};

export default WiggleButton;
