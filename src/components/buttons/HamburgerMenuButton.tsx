
import { Menu } from 'lucide-react';

const HamburgerMenuButton = () => {
  return (
    <button className="p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all transform hover:scale-105">
      <Menu size={24} />
    </button>
  );
};

export default HamburgerMenuButton;
