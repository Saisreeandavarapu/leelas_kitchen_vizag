import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const HomeHero = () => {
  return (
    <section className="relative bg-brand-gray overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-yellow/10 rounded-l-[100px] -z-10 hidden md:block" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-brand-red/20 rounded-full blur-3xl -z-10 hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-10 pb-24 sm:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-brand-red/10 text-brand-red px-4 sm:px-6 py-1 sm:py-2 rounded-full font-black uppercase tracking-[0.15em] text-xs sm:text-sm"
            >
              ✨ Authentic Traditional Flavors
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-heading font-black text-brand-dark leading-tight sm:leading-[1.1]">
              Taste of <br />
              <span className="text-brand-red">Traditional</span> <br />
              India
            </h1>

            <p className="text-gray-500 text-base sm:text-lg md:text-xl max-w-lg font-medium leading-relaxed">
              Premium Handcrafted Sweets, Pickles, Spices, and snacks delivered from Vizag's favorite kitchen to your doorstep.
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-6 items-center pt-4 sm:pt-6">
              <Link to="/shop">
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-brand-red text-white px-6 sm:px-10 py-3 sm:py-5 rounded-2xl sm:rounded-3xl font-black text-sm sm:text-lg shadow-2xl shadow-brand-red/30 hover:bg-brand-dark transition-all duration-500 uppercase tracking-widest"
                >
                  Shop Now
                </motion.button>
              </Link>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-brand-dark px-6 sm:px-10 py-3 sm:py-5 rounded-2xl sm:rounded-3xl font-black text-sm sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-500 flex items-center gap-3 sm:gap-4 uppercase tracking-widest border border-gray-100"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-brand-yellow flex items-center justify-center text-white shadow-inner">
                    <Phone size={18} />
                  </div>
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Rotating background blur (hidden on small screens) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-brand-yellow/10 rounded-full blur-[100px] -z-10 hidden md:block"
            />

            {/* Main Hero Image */}
            <motion.img
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              src="https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&q=80&w=800"
              alt="Traditional Indian Food"
              className="w-64 sm:w-80 md:w-96 lg:w-[400px] mx-auto rounded-full shadow-[0_30px_60px_rgba(0,0,0,0.2)] object-cover aspect-square border-8 sm:border-12 border-white"
            />

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-4 sm:top-10 -right-2 sm:-right-4 bg-white p-3 sm:p-5 rounded-2xl sm:rounded-[2rem] shadow-2xl flex items-center gap-2 sm:gap-4 border border-gray-50"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-yellow/20 rounded-full flex items-center justify-center text-xl sm:text-2xl shadow-inner">🏆</div>
              <div>
                <p className="font-black text-xs sm:text-xl text-brand-dark">4.9/5</p>
                <p className="text-[8px] sm:text-[10px] text-gray-400 font-bold uppercase tracking-widest">Happy Customers</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-4 sm:bottom-10 -left-2 sm:-left-4 bg-white p-3 sm:p-5 rounded-2xl sm:rounded-[2rem] shadow-2xl flex items-center gap-2 sm:gap-4 border border-gray-50"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center text-xl sm:text-2xl shadow-inner">🌿</div>
              <div>
                <p className="font-black text-xs sm:text-xl text-brand-dark">100% Pure</p>
                <p className="text-[8px] sm:text-[10px] text-gray-400 font-bold uppercase tracking-widest">Natural Ingredients</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HomeHero;