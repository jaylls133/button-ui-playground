
import { useState } from 'react';

const FavoriteButton = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <button 
      onClick={() => setIsFavorited(!isFavorited)}
      className={`px-6 py-3 rounded-lg transition-all transform hover:scale-105 ${
        isFavorited 
          ? 'bg-red-500 text-white shadow-lg' 
          : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
      }`}
    >
      <span className="flex items-center space-x-2">
        <span className={`text-xl ${isFavorited ? 'text-white' : 'text-red-500'}`}>
          {isFavorited ? '❤️' : '🤍'}
        </span>
        <span>{isFavorited ? 'Favorited' : 'Favorite'}</span>
      </span>
    </button>
  );
};

export default FavoriteButton;
