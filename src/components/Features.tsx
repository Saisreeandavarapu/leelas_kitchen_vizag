import { Medal, UtensilsCrossed, Bike, Leaf } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Medal size={40} className="text-brand-yellow" strokeWidth={1.5} />,
      title: "SUPER QUALITY FOOD",
      desc: "A team of dreamers and doers building unique interactive food and service."
    },
    {
      icon: <UtensilsCrossed size={40} className="text-brand-yellow" strokeWidth={1.5} />,
      title: "ORIGINAL RECIPES",
      desc: "A team of dreamers and doers building unique interactive food and service."
    },
    {
      icon: <Bike size={40} className="text-brand-yellow" strokeWidth={1.5} />,
      title: "QUICK FAST DELIVERY",
      desc: "A team of dreamers and doers building unique interactive food and service."
    },
    {
      icon: <Leaf size={40} className="text-brand-yellow" strokeWidth={1.5} />,
      title: "100% FRESH FOODS",
      desc: "A team of dreamers and doers building unique interactive food and service."
    }
  ];

  return (
    <div className="bg-brand-gray pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-brand-dark rounded-[2rem] p-10 md:p-14 shadow-2xl relative overflow-hidden">
        {/* Decorative faint background pattern (optional, using CSS radial gradients to mimic food pattern faintly) */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
          {features.map((item, idx) => (
            <div key={idx} className="flex flex-col items-start text-left group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-white font-heading font-extrabold text-xl mb-4 tracking-wide uppercase">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
