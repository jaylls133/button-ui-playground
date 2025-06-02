
const MenuButton = () => {
  return (
    <button className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-all relative group">
      <span>Menu</span>
      <div className="absolute top-full left-0 w-full bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity rounded-b-lg">
        <div className="py-2 px-4 text-sm">Option 1</div>
        <div className="py-2 px-4 text-sm">Option 2</div>
      </div>
    </button>
  );
};

export default MenuButton;
