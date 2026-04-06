import { useState } from 'react';
import { ShoppingCart, Search, Menu, Phone, AlignRight, ChefHat, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import SidebarDrawer from './SidebarDrawer';
import CartDrawer from './CartDrawer';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const openCart = () => {
    setIsDrawerOpen(false);
    setIsMobileMenuOpen(false);
    setIsCartOpen(true);
  };

  const openDrawer = () => {
    setIsCartOpen(false);
    setIsMobileMenuOpen(false);
    setIsDrawerOpen(true);
  };

  const toggleMobileMenu = () => {
    setIsCartOpen(false);
    setIsDrawerOpen(false);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="flex items-center gap-2 group" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-brand-red/30">
                  <ChefHat className="text-white" size={24} strokeWidth={2.5} />
                </div>
                <span className="font-heading font-black text-2xl text-brand-dark tracking-tight">Leela's Kitchen</span>
              </Link>
            </motion.div>

            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`font-sans font-medium transition-colors ${isActive ? 'text-brand-red font-bold' : 'text-gray-700 hover:text-brand-red'
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 lg:gap-4 border-l border-gray-200 pl-4"
            >
              <div className="hidden lg:flex items-center gap-2 mr-4">
                <div className="w-10 h-10 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase font-semibold">Delivery Order</span>
                  <span className="text-sm font-bold text-brand-dark">+91 86887 56757</span>
                </div>
              </div>

              <button className="p-2 text-gray-700 hover:text-brand-red transition-colors relative hidden sm:block">
                <Search size={22} />
              </button>
              
              <button
                onClick={openCart}
                className="p-2 text-gray-700 hover:text-brand-red transition-colors relative group"
              >
                <ShoppingCart size={22} />
                <motion.span
                  key={totalItems}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute top-0 right-0 h-5 w-5 bg-brand-red text-white text-[10px] font-bold flex items-center justify-center rounded-full group-hover:animate-bounce-slow shadow-md"
                >
                  {totalItems}
                </motion.span>
              </button>

              <button 
                onClick={toggleMobileMenu}
                className="md:hidden p-2 text-gray-700 hover:text-brand-red transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              <button
                onClick={openDrawer}
                className="hidden md:block p-2 text-gray-700 hover:text-brand-red transition-colors"
              >
                <AlignRight size={26} strokeWidth={2.5} />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-100 bg-white"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-xl font-heading font-bold text-lg ${
                        isActive 
                          ? 'bg-brand-red/10 text-brand-red' 
                          : 'text-brand-dark hover:bg-gray-50'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <SidebarDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
