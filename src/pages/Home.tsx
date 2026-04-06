import HomeHero from '../components/HomeHero';
import Marquee from '../components/Marquee';
import Features from '../components/Features';
import CategoriesSection from '../components/CategoriesSection';
import DeliveryBanner from '../components/DeliveryBanner';
import FoodGrid from '../components/FoodGrid';

const Home = () => {
  return (
    <>
      <HomeHero />
      <Marquee />
      <Features />

      <CategoriesSection />



      <div className="bg-brand-gray/30 pt-16 pb-4 text-center">
        <h2 className="text-4xl font-heading font-extrabold text-brand-dark mb-4">Popular Menu</h2>
        <p className="text-gray-500 max-w-2xl mx-auto px-4">Our most loved and frequently ordered dishes</p>
      </div>

      <div className="bg-brand-gray/30 pb-10">
        <FoodGrid limit={10} columns={4} />
      </div>
      <DeliveryBanner />
    </>
  );
};

export default Home;
