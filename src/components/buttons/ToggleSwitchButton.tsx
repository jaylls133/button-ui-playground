
import { useState } from 'react';

const ToggleSwitchButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <button 
      onClick={() => setIsToggled(!isToggled)}
      className={`relative w-16 h-8 rounded-full transition-all duration-300 ${
        isToggled ? 'bg-blue-500' : 'bg-gray-300'
      }`}
    >
      <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
        isToggled ? 'translate-x-8' : 'translate-x-1'
      }`}></div>
    </button>
  );
};

export default ToggleSwitchButton;
