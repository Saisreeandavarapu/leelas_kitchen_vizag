import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import Home from './pages/Home';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';

import { CartProvider } from './context/CartContext';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CartProvider>
        <div className="min-h-screen bg-brand-gray flex flex-col font-sans">
          <Navbar />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/reviews" element={<Reviews />} />
            </Routes>
          </main>

          <Footer />
          <FloatingWhatsApp />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
