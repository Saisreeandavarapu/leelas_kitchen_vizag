import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import { ShoppingCart, Star, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface FoodGridProps {
  limit?: number;
  hideFilters?: boolean;
  customProducts?: any[]; // ✅ correct place
}

const FoodGrid = ({ limit, hideFilters, customProducts }: FoodGridProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || "All";
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});

  // ✅ USE CUSTOM DATA IF AVAILABLE
  let filteredProducts = customProducts
    ? customProducts
    : activeCategory === "All"
      ? products
      : products.filter(p => p.category === activeCategory);

  if (limit) {
    filteredProducts = filteredProducts.slice(0, limit);
  }

  const handleCategoryClick = (cat: string) => {
    setSearchParams({ category: cat }, { replace: true });
  };

  const handleAddToCart = (product: any) => {
    addToCart(product);
    setAddedItems(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${hideFilters ? '' : 'py-16'}`}>

      {/* Categories */}
      {!hideFilters && (
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat, idx) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.08 }}
              onClick={() => handleCategoryClick(cat)}
              className={`px-7 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border cursor-pointer select-none ${activeCategory === cat
                ? 'bg-red-500 text-white border-red-500 shadow-lg shadow-red-500/30 scale-105'
                : 'bg-white text-gray-700 border-gray-200 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 hover:shadow-md'
                }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      )}

      {/* Products */}
      <motion.div
        layout
        className="flex max-sm:overflow-x-auto max-sm:snap-x max-sm:snap-mandatory pb-8 sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        <AnimatePresence>
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="group relative bg-gray-50 rounded-2xl p-6 text-center hover:bg-yellow-400 transition-all duration-500 shadow-sm hover:shadow-xl max-sm:min-w-[80vw] max-sm:snap-center"
            >
              {/* Wishlist */}
              <div className="absolute top-4 left-4 w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center cursor-pointer">
                ♥
              </div>

              {/* Image */}
              <div className="flex justify-center mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-40 h-40 object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Add to Cart */}
              <div className="opacity-0 group-hover:opacity-100 transition duration-500 mb-4">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-black text-white px-6 py-2 rounded-full flex items-center justify-center gap-2 mx-auto"
                >
                  {addedItems[product.id] ? (
                    <>Added <Check size={16} /></>
                  ) : (
                    <><ShoppingCart size={16} /> Add To Cart</>
                  )}
                </button>
              </div>

              {/* Price */}
              <div className="flex justify-center items-center gap-2 mb-2">
                {product.discount && (
                  <span className="bg-white text-black text-xs px-2 py-0.5 rounded">
                    -{product.discount}%
                  </span>
                )}
                <span className="text-red-500 font-bold">
                  ₹{product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-gray-500 line-through text-sm">
                    ₹{product.originalPrice}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="font-bold uppercase text-gray-800 group-hover:text-black">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < Math.round(product.rating)
                        ? "fill-yellow-500 text-yellow-500"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <ShoppingCart size={50} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-xl font-bold">No items found</h3>
        </div>
      )}
    </div>
  );
};

export default FoodGrid;