
import { ShoppingCart } from 'lucide-react';

const AddToCartButton = () => {
  return (
    <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all flex items-center space-x-2 transform hover:scale-105 shadow-md hover:shadow-lg">
      <ShoppingCart size={20} />
      <span>Add to Cart</span>
    </button>
  );
};

export default AddToCartButton;
