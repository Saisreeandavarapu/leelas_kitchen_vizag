import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface BannerProps {
  title: string;
  subtitle: string;
  breadcrumbs: { name: string; url: string }[];
}

const Banner: React.FC<BannerProps> = ({ title, subtitle, breadcrumbs }) => {
  return (
    <div className="relative bg-brand-dark pt-16 pb-24 overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red rounded-full opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-yellow rounded-full opacity-10 blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-red/10 text-brand-red text-sm font-semibold mb-4 tracking-wider uppercase">
            {subtitle}
          </span>
          <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
            {title}
          </h1>
          
          <div className="flex justify-center items-center gap-4 text-sm font-medium text-white/80 mt-8">
            {breadcrumbs.map((breadcrumb, idx) => (
              <React.Fragment key={breadcrumb.name}>
                {idx > 0 && <span>•</span>}
                <Link 
                  to={breadcrumb.url} 
                  className={idx === breadcrumbs.length - 1 ? "text-brand-yellow" : "hover:text-brand-yellow transition-colors"}
                >
                  {breadcrumb.name}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-10">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,115.11,189.5,100c56.88-14.61,112.5-40.42,168.84-56z" fill="#FAFAF8"></path>
        </svg>
      </div>
    </div>
  );
};

export default Banner;
