import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const categories = [
  { id: 1, name: 'Sweets', icon: '🍬', bg: 'bg-pink-100' },
  { id: 2, name: 'Pickles', icon: '🌶️', bg: 'bg-red-100' },
  { id: 3, name: 'Mixers', icon: '🥨', bg: 'bg-orange-100' },
  { id: 4, name: 'Brownies', icon: '🍪', bg: 'bg-amber-900/10' },
  { id: 5, name: 'Spices', icon: '🧂', bg: 'bg-yellow-100' },
  { id: 6, name: 'Karam Podi', icon: '🍛', bg: 'bg-red-50' },
  { id: 7, name: 'Ghee', icon: '🥣', bg: 'bg-yellow-50' },
  { id: 8, name: 'Health Mix', icon: '🌿', bg: 'bg-green-100' },
];

const CategoriesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-red font-bold uppercase tracking-wider mb-2"
          >
            Popular Categories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-heading font-extrabold text-brand-dark"
          >
            Top Food Categories
          </motion.h2>
        </div>

        {/* Scrollable on small screens */}
        <div className="flex sm:hidden overflow-x-auto space-x-4 py-4 px-2">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ y: -5 }}
              onClick={() => navigate(`/shop?category=${cat.name}`)}
              className="flex flex-col items-center cursor-pointer min-w-[120px] group"
            >
              <div className={`w-28 h-28 ${cat.bg} rounded-full flex items-center justify-center text-4xl shadow-sm mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                {cat.icon}
              </div>
              <h3 className="font-heading font-bold text-sm text-brand-dark group-hover:text-brand-red text-center">
                {cat.name}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Grid on medium and larger screens */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ y: -10 }}
              onClick={() => navigate(`/shop?category=${cat.name}`)}
              className="flex flex-col items-center cursor-pointer group"
            >
              <div className={`w-32 h-32 ${cat.bg} rounded-full flex items-center justify-center text-5xl shadow-sm mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                {cat.icon}
              </div>
              <h3 className="font-heading font-bold text-lg text-brand-dark group-hover:text-brand-red transition-colors text-center">
                {cat.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;