import { motion } from 'framer-motion';
import Banner from '../components/Banner';
import { Calendar, User, ArrowRight, Search, ChevronRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "THE SECRET BEHIND AUTHENTIC INDIAN SWEETS",
    excerpt: "Discover the rich tradition behind Indian sweets made with pure ghee, natural ingredients, and time‑tested recipes passed down through generations...",
    date: { day: 14, month: "JAN" },
    author: "Food Expert",
    image: "https://images.pexels.com/photos/3026806/pexels-photo-3026806.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    id: 2,
    title: "WHY HOMEMADE PICKLES TASTE BETTER",
    excerpt: "Homemade pickles are not just food — they’re emotion. Prepared with fresh spices, they bring authentic flavors that packaged products can never match...",
    date: { day: 22, month: "FEB" },
    author: "Chef Anand",
    image: "https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    id: 3,
    title: "TOP 5 TRADITIONAL SNACKS YOU MUST TRY",
    excerpt: "From crispy murukku to spicy mixtures — explore the most loved traditional snacks that bring joy to every household...",
    date: { day: "05", month: "MAR" },
    author: "Admin",
    image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1200"
  }
];

const popularFeeds = [
  {
    title: "How Pure Ghee Enhances Taste & Health",
    img: "https://images.pexels.com/photos/853199/pexels-photo-853199.jpeg?auto=compress&cs=tinysrgb&w=400",
    date: "12 Jan, 2025"
  },
  {
    title: "Best Traditional Desserts in India",
    img: "https://images.pexels.com/photos/3026805/pexels-photo-3026805.jpeg?auto=compress&cs=tinysrgb&w=400",
    date: "08 Feb, 2025"
  },
  {
    title: "Street Food vs Homemade Food: Which is Better?",
    img: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=400",
    date: "05 Mar, 2025"
  }
];
const categories = [
  { name: "Sweets", count: 18 },
  { name: "Pickles", count: 12 },
  { name: "Snacks", count: 25 },
  { name: "Desserts", count: 9 },
  { name: "Bakery", count: 14 },
  { name: "Healthy Foods", count: 7 },
  { name: "Street Food", count: 16 },
  { name: "Traditional", count: 20 }
];

const tags = [
  "sweets",
  "ghee",
  "homemade",
  "snacks",
  "pickles",
  "desserts",
  "traditional",
  "indian food"
];


const Blog = () => {
  return (
    <>
      <Banner
        title="Latest News & Blog"
        subtitle="Read Our Story"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' }
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-brand-gray/20">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Main Content: Blog Posts */}
          <div className="w-full lg:w-2/3 space-y-12">
            {blogPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 group border border-gray-100 flex flex-col"
              >
                <div className="relative overflow-hidden aspect-[16/9] m-4 rounded-[1.5rem]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 group-hover:-rotate-1 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-brand-yellow text-brand-dark px-4 py-2 rounded-xl font-bold flex flex-col items-center shadow-lg transform group-hover:-translate-y-1 transition-transform">
                    <span className="text-3xl leading-none">{post.date.day}</span>
                    <span className="text-xs uppercase tracking-widest">{post.date.month}</span>
                  </div>
                </div>

                <div className="p-8 pt-4">
                  <div className="flex items-center gap-6 text-sm text-gray-500 font-medium mb-4">
                    <span className="flex items-center gap-2 hover:text-brand-red transition-colors cursor-pointer">
                      <User size={16} className="text-brand-red" /> By {post.author}
                    </span>
                    <span className="flex items-center gap-2 hover:text-brand-red transition-colors cursor-pointer">
                      <Calendar size={16} className="text-brand-yellow" /> Comments (05)
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-3xl md:text-4xl text-brand-dark mb-4 group-hover:text-brand-red transition-colors cursor-pointer leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-gray-500 mb-8 text-lg" style={{ lineHeight: '1.8' }}>
                    {post.excerpt}
                  </p>

                  <div className="border-t border-gray-100 pt-6">
                    <a href="#" className="inline-flex items-center gap-2 font-heading font-bold text-brand-red hover:text-brand-dark transition-colors uppercase tracking-wide">
                      Read More
                      <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-1/3 space-y-10">

            {/* Search */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="font-heading font-extrabold text-2xl text-brand-dark mb-6 relative pb-4">
                Search
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-brand-red rounded-full"></span>
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-brand-gray/50 border-none rounded-xl py-4 px-5 pr-12 focus:ring-2 focus:ring-brand-yellow outline-none text-brand-dark"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-red text-white p-2 rounded-lg hover:bg-brand-dark transition-colors">
                  <Search size={20} />
                </button>
              </div>
            </div>

            {/* Popular Feeds */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="font-heading font-extrabold text-2xl text-brand-dark mb-6 relative pb-4">
                Popular Feeds
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-brand-red rounded-full"></span>
              </h3>
              <div className="space-y-6">
                {popularFeeds.map((feed, idx) => (
                  <div key={idx} className="flex gap-4 group cursor-pointer">
                    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={feed.img} alt="feed" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div>
                      <p className="text-xs text-brand-red font-bold mb-1 flex items-center gap-1">
                        <Calendar size={12} /> {feed.date}
                      </p>
                      <h4 className="font-heading font-extrabold text-brand-dark leading-tight group-hover:text-brand-red transition-colors text-sm md:text-base">
                        {feed.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="font-heading font-extrabold text-2xl text-brand-dark mb-6 relative pb-4">
                Categories
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-brand-red rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {categories.map((cat, idx) => (
                  <li key={idx} className="flex items-center justify-between group cursor-pointer p-3 bg-brand-gray/30 rounded-xl hover:bg-brand-red transition-colors">
                    <span className="text-gray-600 group-hover:text-white transition-colors font-medium flex items-center gap-2">
                      <ChevronRight size={16} className="text-brand-red group-hover:text-white" />
                      {cat.name}
                    </span>
                    <span className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-brand-dark font-bold text-xs shadow-sm">
                      {cat.count}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tags */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="font-heading font-extrabold text-2xl text-brand-dark mb-6 relative pb-4">
                Popular Tags
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-brand-red rounded-full"></span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                  <span key={idx} className="bg-brand-gray/50 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-brand-dark hover:text-white transition-colors cursor-pointer capitalize">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </div>
    </>
  );
};

export default Blog;
