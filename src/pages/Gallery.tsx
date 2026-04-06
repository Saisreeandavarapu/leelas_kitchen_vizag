import { motion } from 'framer-motion';
import Banner from '../components/Banner';

const galleryItems = [
  {
    id: 1,
    title: "Vibrant Tradition",
    description: "A symphony of traditional sweets, from Mysore Pak to Gulab Jamun, all made with pure love and ghee.",
    image: "/src/assets/image.png",
    category: "Sweets"
  },
  {
    id: 2,
    title: "Motichoor Ladu",
    description: "Fine gram flour pearls, fried in pure ghee and soaked in delicate cardamom syrup for an authentic melt-in-your-mouth experience.",
    image: "/src/assets/image copy 2.png",
    category: "Specialty"
  },
  {
    id: 3,
    title: "Premium Kaju Katli",
    description: "The ultimate indulgence—smooth, rich cashew fudge finished with pure silver leaf and a hint of saffron.",
    image: "/src/assets/image copy 3.png",
    category: "Sweets"
  },
  {
    id: 4,
    title: "Traditional Andhra Pickles",
    description: "Zesty, spicy, and perfectly cured—our Mango and Tomato pickles are a true representation of Andhra's culinary soul.",
    image: "/src/assets/image copy 4.png",
    category: "Pickles"
  },
  {
    id: 5,
    title: "Guntur Karam Podi",
    description: "A fiery blend of roasted lentils and spicy red chilies, meticulously ground to bring authentic heat to any meal.",
    image: "/src/assets/image copy 5.png",
    category: "Spices"
  },
  {
    id: 6,
    title: "Healthy Snack Collection",
    description: "Guilt-free snacking with our range of puffed rice, roasted nuts, and flaxseed health mixes, packed with nutrition.",
    image: "/src/assets/image copy 6.png",
    category: "Healthy Mixes"
  }
];

const Gallery = () => {
  return (
    <>
      <Banner
        title="Visual Journey"
        subtitle="Our Kitchen Gallery"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Gallery', url: '/gallery' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">

        {/* Gallery Intro */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-black text-brand-dark mb-4">Capturing Flavor & Art</h2>
          <p className="text-gray-500 max-w-2xl mx-auto px-4 font-medium text-lg leading-relaxed">
            Take a visual tour through our kitchen, where each dish is prepared with traditional techniques and the finest heritage ingredients.
          </p>
        </div>

        {/* Gallery Items with Mobile Scroll */}
        <div className="relative">
          <div className="flex overflow-x-auto snap-x snap-mandatory pb-12 gap-6 lg:grid lg:grid-cols-4 lg:gap-8 lg:overflow-visible lg:pb-0 lg:snap-none cursor-grab active:cursor-grabbing no-scrollbar">
            {galleryItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="flex-shrink-0 w-full sm:w-[280px] lg:w-auto sm:snap-center group"
              >
                <div className="relative aspect-square overflow-hidden rounded-[1.5rem] shadow-sm border border-gray-100 group-hover:shadow-2xl transition-all duration-500">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-brand-yellow font-black uppercase tracking-widest text-[9px] mb-1 block">
                      {item.category}
                    </span>
                    <h3 className="text-white font-heading font-black text-lg mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-[11px] font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                      {item.description}
                    </p>
                  </div>

                  {/* Aesthetic Badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white font-heading font-black text-xs">
                    0{idx + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicators (Mobile Only) */}
          <div className="flex justify-center gap-2 mt-8 lg:hidden">
            {galleryItems.map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-brand-red w-4' : 'bg-gray-300'}`} />
            ))}
          </div>
        </div>

      </div>

      {/* Aesthetic Call to Action */}
      <section className="bg-brand-dark py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red rounded-full opacity-10 blur-[100px]" />
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <h2 className="text-white text-4xl md:text-5xl font-heading font-black mb-8 leading-tight">Ready to taste these flavors at your home?</h2>
          <a
            href="/shop"
            className="inline-flex py-5 px-10 rounded-2xl bg-brand-red text-white font-black uppercase tracking-widest shadow-2xl shadow-brand-red/30 hover:bg-white hover:text-brand-dark transition-all duration-300"
          >
            ORDER FROM OUR SHOP
          </a>
        </div>
      </section>

      {/* Global Style for scroll hiding */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default Gallery;
