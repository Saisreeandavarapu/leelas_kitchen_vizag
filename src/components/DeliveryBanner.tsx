import { motion } from 'framer-motion';
import { Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const DeliveryBanner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 overflow-hidden">
      <div className="relative bg-[#065F46] rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row shadow-2xl md:min-h-[420px] items-center">

        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay rounded-[2.5rem] md:rounded-[3rem] overflow-hidden">
          <div
            className="absolute w-full h-full"
            style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '30px 30px' }}
          />
        </div>

        {/* Text Container */}
        <div className="relative z-20 w-full md:w-[55%] flex flex-col items-center md:items-start text-center md:text-left pt-2 md:pt-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-brand-yellow font-extrabold text-xs md:text-sm uppercase tracking-widest mb-4 inline-block bg-brand-yellow/10 px-4 py-1.5 rounded-full border border-brand-yellow/20">
              Crispy, Every Bite Taste
            </h4>

            <h2 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-heading font-black text-white leading-[1.1] md:leading-none mb-8 drop-shadow-md">
              30 MINUTES FAST <br className="hidden md:block" />
              <span className="text-brand-yellow">DELIVERY</span> CHALLENGE
            </h2>

            <Link to="/shop" className="group inline-block">
              <button className="bg-white text-brand-dark px-6 py-3.5 md:px-8 md:py-4 rounded-xl font-heading font-black flex items-center justify-center gap-3 hover:bg-brand-yellow hover:text-brand-dark transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1">
                <Truck size={22} className="group-hover:translate-x-1.5 transition-transform duration-500" strokeWidth={2.5} />
                ORDER NOW
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Delivery Rider */}
        <div className="relative z-30 w-full md:w-[45%] mt-12 md:mt-0 flex justify-center md:justify-end">
          <motion.div
            className="w-[95%] max-w-[500px] md:max-w-[600px] lg:max-w-[650px]"
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1.5, bounce: 0.2 }}
          >
            {/* Driving Animation */}
            <motion.img
              animate={{ x: [0, 15, 0] }} // subtle forward motion
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              src="https://modinatheme.com/html/foodking-html/assets/img/delivery-man.png"
              alt="Delivery Rider"
              className="w-full h-auto object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.45)] scale-105"
              onError={(e) => { e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/10043/10043064.png"; }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryBanner;