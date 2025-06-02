
import { Facebook } from 'lucide-react';

const SocialMediaButton = () => {
  return (
    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center space-x-2 transform hover:scale-105">
      <Facebook size={20} />
      <span>Share</span>
    </button>
  );
};

export default SocialMediaButton;
