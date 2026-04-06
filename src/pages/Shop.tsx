import { useState, useMemo } from 'react';
import Banner from '../components/Banner';
import FoodGrid from '../components/FoodGrid';
import { Search, ChevronRight } from 'lucide-react';
import { categories, products } from '../data/products';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Shop = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentCategory = searchParams.get('category') || 'All';

  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('default');

  // ✅ FILTER + SORT LOGIC
  const filteredProducts = useMemo(() => {
    let data = [...products];

    // Category filter
    if (currentCategory !== 'All') {
      data = data.filter(p => p.category === currentCategory);
    }

    // Search filter
    if (search.trim()) {
      data = data.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Sorting
    if (sort === 'low') {
      data.sort((a, b) => a.price - b.price);
    } else if (sort === 'high') {
      data.sort((a, b) => b.price - a.price);
    } else if (sort === 'latest') {
      data.reverse(); // assuming latest last
    }

    return data;
  }, [search, sort, currentCategory]);

  return (
    <>
      <Banner
        title="Premium Traditional Flavors"
        subtitle="Our Full Collection"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Shop', url: '/shop' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row-reverse gap-12">

          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 space-y-8">

            {/* Search */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
              <h3 className="font-heading font-black text-xl mb-6 uppercase">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-gray-100 rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
              <h3 className="font-heading font-black text-xl mb-6 uppercase">Categories</h3>
              <ul className="space-y-3">
                {categories.map((cat, idx) => (
                  <li
                    key={idx}
                    onClick={() => navigate(`/shop?category=${cat}`)}
                    className="flex justify-between items-center cursor-pointer p-2 rounded-lg hover:bg-gray-100"
                  >
                    <span className={`${currentCategory === cat ? 'text-red-500 font-bold' : 'text-gray-500'}`}>
                      {cat}
                    </span>
                    <ChevronRight size={16} />
                  </li>
                ))}
              </ul>
            </div>

          </aside>

          {/* Main */}
          <main className="w-full lg:w-3/4">

            {/* Sort */}
            <div className="bg-white p-4 rounded-xl shadow-sm border mb-6 flex justify-between items-center">
              <p className="text-sm text-gray-500">
                Showing {filteredProducts.length} results
              </p>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-gray-100 px-3 py-2 rounded-lg text-sm outline-none"
              >
                <option value="default">Default</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="latest">Latest</option>
              </select>
            </div>

            {/* Products */}
            <FoodGrid
              hideFilters={true}
              customProducts={filteredProducts}
            />
          </main>
        </div>
      </div>
    </>
  );
};

export default Shop;