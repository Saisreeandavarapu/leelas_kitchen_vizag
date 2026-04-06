import { motion } from 'framer-motion';
import { CakeSlice, Candy, Cookie } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-brand-dark text-white pt-16 pb-8 border-t border-gray-800 overflow-hidden">
      
      {/* Animated Background Icons */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-10 md:left-5 top-10 opacity-[0.04] pointer-events-none"
      >
        <CakeSlice className="w-48 h-48 md:w-80 md:h-80 text-white" strokeWidth={1} />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -right-10 md:right-5 bottom-10 opacity-[0.04] pointer-events-none"
      >
        <Candy className="w-48 h-48 md:w-80 md:h-80 text-white" strokeWidth={1} />
      </motion.div>

      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute left-1/2 top-4 opacity-[0.02] pointer-events-none hidden lg:block"
        style={{ x: '-50%' }}
      >
        <Cookie className="w-32 h-32 md:w-56 md:h-56 text-white" strokeWidth={1} />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center">
                <span className="text-white font-heading font-bold text-xl">LK</span>
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight">Leela's Kitchen</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm">
              Experience the best of Vizag's culinary delights. 
              Authentic Indian food, spicy biryanis, and fast food right at your fingertips.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.469 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors text-sm">Latest Menu</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors text-sm">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">My Account</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors text-sm">My Profile</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors text-sm">Order History</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors text-sm">Shopping Cart</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start text-sm text-gray-400">
                <svg className="w-5 h-5 text-brand-red flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Visakhapatnam, Andhra Pradesh, India</span>
              </li>
              <li className="flex gap-3 items-start text-sm text-gray-400">
                <svg className="w-5 h-5 text-brand-red flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>+91 86887 56757</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Leela's Kitchen Vizag. Built for a premium experience.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
