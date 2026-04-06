import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Plus, Minus, Trash2, Send } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  const handleCheckout = () => {
    const cartDetails = cart
      .map(item => `* ${item.name} (x${item.quantity}) - ₹${item.price * item.quantity}`)
      .join('\n');

    const message = `Hi Leela's Kitchen, I would like to place an order:\n\n${cartDetails}\n\n*Total Amount: ₹${totalPrice}*\n\nPlease confirm my order.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918688756757?text=${encodedMessage}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-[110] backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white z-[120] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-brand-gray/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center text-white shadow-lg">
                  <ShoppingCart size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-xl text-brand-dark uppercase tracking-tight">Your Cart</h3>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{totalItems} Items selected</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white text-brand-dark flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300 shadow-md border border-gray-100"
              >
                <X size={20} className="stroke-[3px]" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-brand-gray rounded-full flex items-center justify-center text-gray-400">
                    <ShoppingCart size={40} strokeWidth={1} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xl text-brand-dark">Your cart is empty</h4>
                    <p className="text-gray-500 text-sm max-w-[250px] mx-auto mt-2">Add some delicious items from our shop to get started!</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="bg-brand-yellow text-brand-dark px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    key={item.id}
                    className="flex gap-4 p-4 rounded-3xl bg-white border border-gray-100 group shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-brand-gray/30 shadow-sm flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div className="flex justify-between items-start gap-2">
                        <div className="pr-4">
                          <h4 className="font-heading font-extrabold text-brand-dark line-clamp-2 leading-tight text-sm sm:text-base">{item.name}</h4>
                          <p className="text-xs font-bold text-gray-400 mt-1 uppercase tracking-wider">{item.category}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-300 hover:text-red-500 transition-colors p-1"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center bg-brand-gray/50 rounded-full p-1 border border-gray-100">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center bg-white shadow-sm hover:bg-brand-red hover:text-white text-brand-dark transition-all"
                          >
                            <Minus size={14} strokeWidth={3} />
                          </button>
                          <span className="w-8 text-center font-bold text-sm text-brand-dark">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center bg-white shadow-sm hover:bg-brand-red hover:text-white text-brand-dark transition-all"
                          >
                            <Plus size={14} strokeWidth={3} />
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] text-gray-400 font-bold line-through">₹{(item.originalPrice || item.price) * item.quantity}</p>
                          <p className="font-heading font-black text-brand-red text-lg leading-none">₹{item.price * item.quantity}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Total & Checkout */}
            {cart.length > 0 && (
              <div className="p-2 border-t border-gray-100 bg-brand-gray/20">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-500 font-medium">
                    <span>Subtotal</span>
                    <span>₹{totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-gray-500 font-medium pb-3 border-b border-gray-200">
                    <span>Delivery</span>
                    <span className="text-green-600 font-bold uppercase text-xs">Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between items-end pt-1">
                    <span className="font-heading font-extrabold text-brand-dark text-md uppercase">Total Amount</span>
                    <span className="font-heading font-extrabold text-brand-red text-2xl">₹{totalPrice}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-[#25D366] hover:bg-brand-dark text-white font-heading font-extrabold text-md py-4 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-[#25D366]/20 group"
                >
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Checkout via WhatsApp
                </button>
                <p className="text-center text-[10px] text-gray-400 mt-2 uppercase tracking-widest font-bold">
                  Secure checkout directly with Leela's Kitchen
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
