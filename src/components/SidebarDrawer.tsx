import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Mail, Clock, Phone, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SidebarDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidebarDrawer = ({ isOpen, onClose }: SidebarDrawerProps) => {
  const images = [
    "https://images.pexels.com/photos/853199/pexels-photo-853199.jpeg?auto=compress&cs=tinysrgb&w=400 ",
    "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/3026805/pexels-photo-3026805.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/3026806/pexels-photo-3026806.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=400"
  ];
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
            className="fixed inset-0 bg-black/50 z-[90] backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-[90%] max-w-[400px] bg-white z-[100] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-8 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-sm">LK</span>
                </div>
                <span className="font-heading font-extrabold text-2xl text-brand-dark tracking-tight uppercase">Leela's Kitchen</span>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center hover:bg-brand-dark transition-colors"
              >
                <X size={20} className="stroke-[3px]" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8 space-y-10">
              <p className="text-gray-500 leading-relaxed text-sm">
                This involves interactions between a business and its customers. It's about meeting customers' needs and resolving their problems. Effective customer service is crucial.
              </p>

              {/* Image Grid */}
              <div className="grid grid-cols-3 gap-3">
                {images.map((src, i) => (
                  <div key={i} className="aspect-square rounded-xl overflow-hidden group">
                    <img
                      src={src}
                      alt="food gallery"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                    />
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="font-heading font-extrabold text-xl text-brand-dark mb-6 uppercase tracking-wide">Contact Info</h3>
                <ul className="space-y-4 text-sm font-bold text-brand-dark">
                  <li className="flex items-center gap-4">
                    <MapPin className="text-brand-red" size={20} />
                    <span>Vizag Main Road, AP, India 530001</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <Mail className="text-brand-red" size={20} />
                    <span>info@leelaskitchen.com</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <Clock className="text-brand-red" size={20} />
                    <span>Mod-Friday, 09am - 05pm</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <Phone className="text-brand-red" size={20} />
                    <span>+91 86887 56757</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer Order Button */}
            <div className="p-8 border-t border-gray-100">
              <Link
                to="/shop"
                onClick={onClose}
                className="w-full bg-[#065F46] hover:bg-brand-dark text-white font-heading font-extrabold text-lg py-4 rounded-xl flex items-center justify-center gap-3 transition-colors uppercase tracking-widest shadow-lg shadow-[#065F46]/30"
              >
                <ShoppingCart size={20} /> Order Now
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SidebarDrawer;
