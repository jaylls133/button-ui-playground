
import { Play } from 'lucide-react';

const PlayButton = () => {
  return (
    <button className="w-16 h-16 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all flex items-center justify-center transform hover:scale-110 shadow-lg hover:shadow-xl">
      <Play size={24} fill="white" />
    </button>
  );
};

export default PlayButton;
