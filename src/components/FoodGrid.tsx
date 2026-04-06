import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import { ShoppingCart, Star, Plus, Minus, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface FoodGridProps {
  limit?: number;
  hideFilters?: boolean;
  customProducts?: any[];
  columns?: 2 | 3 | 4;
}

const FoodGrid = ({ limit, hideFilters, customProducts, columns = 4 }: FoodGridProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || "All";
  const { cart, addToCart, updateQuantity } = useCart();

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

  const getProductQuantity = (id: string) => {
    return cart.find(item => item.id === id)?.quantity || 0;
  };

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${hideFilters ? '' : 'py-12'}`}>

      {/* Categories */}
      {!hideFilters && (
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, idx) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleCategoryClick(cat)}
              className={`px-6 py-2 rounded-full text-xs font-black transition-all duration-300 border cursor-pointer select-none ${activeCategory === cat
                ? 'bg-red-600 text-white border-red-600 shadow-lg shadow-red-600/20 scale-105'
                : 'bg-white text-gray-700 border-gray-100 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 hover:shadow-md'
                }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      )}

      {/* Products Grid */}
      <motion.div
        layout
        className={`grid grid-cols-2 md:grid-cols-3 ${columns === 4 ? 'lg:grid-cols-4' : columns === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} gap-4 md:gap-6 lg:gap-8`}
      >
        <AnimatePresence mode='popLayout'>
          {filteredProducts.map((product, idx) => {
            const qty = getProductQuantity(product.id);
            
            return (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: idx * 0.03, duration: 0.3 }}
                className="group relative bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 h-full flex flex-col"
              >
                {/* Product Image Wrapper */}
                <div className="relative aspect-square overflow-hidden shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity" />

                  {/* Top Actions */}
                  <div className="absolute top-3 inset-x-3 flex justify-between items-start">
                    {product.discount ? (
                      <span className="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded-lg shadow-lg">
                        {product.discount}% OFF
                      </span>
                    ) : <div />}
                    <button className="w-8 h-8 bg-white/30 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg group/heart">
                      <Heart size={14} className="group-hover/heart:fill-white" />
                    </button>
                  </div>

                  {/* Rating Overlay */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/40 backdrop-blur-md px-1.5 py-0.5 rounded-md text-white text-[10px] border border-white/20">
                    <Star size={10} className="fill-yellow-400 text-yellow-400" />
                    <span className="font-bold">{product.rating}</span>
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-black text-gray-900 text-base mb-1 truncate group-hover:text-red-600 transition-colors">{product.name}</h3>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex flex-col">
                      <span className="text-red-600 font-black text-lg leading-none">₹{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-gray-400 line-through text-[10px] font-medium">₹{product.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  {/* Dynamic Action Area: Button or Quantity Selector */}
                  <div className="mt-auto relative h-11 overflow-hidden">
                    <AnimatePresence mode="wait" initial={false}>
                      {qty === 0 ? (
                        <motion.button
                          key="add-btn"
                          initial={{ y: 30, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -30, opacity: 0 }}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          onClick={() => addToCart(product, 1)}
                          className="w-full h-full bg-red-600 text-white rounded-xl flex items-center justify-center gap-2 text-xs font-black shadow-lg shadow-red-100 hover:bg-red-700 transition-all active:scale-95"
                        >
                          <ShoppingCart size={16} strokeWidth={3} />
                          <span>ADD</span>
                        </motion.button>
                      ) : (
                        <motion.div
                          key="qty-selector"
                          initial={{ y: 30, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -30, opacity: 0 }}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          className="w-full h-full bg-gray-50 border-2 border-red-600 rounded-xl flex items-center justify-between p-0.5 shadow-sm"
                        >
                          <button
                            onClick={() => updateQuantity(product.id, qty - 1)}
                            className="w-8 h-8 flex items-center justify-center bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 active:scale-90 transition-all"
                          >
                            <Minus size={14} strokeWidth={3} />
                          </button>
                          
                          <div className="flex flex-col items-center">
                            <span className="font-black text-red-600 text-sm leading-none">{qty}</span>
                          </div>

                          <button
                            onClick={() => updateQuantity(product.id, qty + 1)}
                            className="w-8 h-8 flex items-center justify-center bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 active:scale-90 transition-all"
                          >
                            <Plus size={14} strokeWidth={3} />
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-24"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-50 mb-6">
            <ShoppingCart size={32} className="text-gray-300" />
          </div>
          <h3 className="text-xl font-black text-gray-900 mb-2">No items found</h3>
          <p className="text-sm text-gray-500">Try adjusting your filters or search terms.</p>
        </motion.div>
      )}
    </div>
  );
};

export default FoodGrid;