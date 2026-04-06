export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  discount?: number;
  tags?: string[];
}

export const products: Product[] = [
  // --- Sweets (Indian Sweets) ---
  {
    id: "sw1",
    name: "Special Kaju Katli",
    description: "Premium cashew fudge made with high-quality cashews and pure silver leaf.",
    price: 450,
    originalPrice: 500,
    image: "https://images.unsplash.com/photo-1599307767316-776533bb941c?auto=format&fit=crop&q=80&w=800",
    category: "Sweets",
    rating: 4.9,
    discount: 10,
    tags: ["Best Seller", "Premium"]
  },
  {
    id: "sw2",
    name: "Gulab Jamun (10 Pcs)",
    description: "Soft, melt-in-the-mouth milk solid dumplings soaked in rose-flavored sugar syrup.",
    price: 250,
    image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&q=80&w=800",
    category: "Sweets",
    rating: 4.8
  },
  {
    id: "sw3",
    name: "Bengali Rasgulla",
    description: "Spongy and juicy cottage cheese balls in light sugar syrup.",
    price: 220,
    image: "https://images.unsplash.com/photo-1599307767316-776533bb941c?auto=format&fit=crop&q=80&w=800", // Generic sweet image
    category: "Sweets",
    rating: 4.7
  },
  {
    id: "sw4",
    name: "Motichoor Ladoo",
    description: "Fine gram flour pearls fried in ghee and soaked in cardamom syrup.",
    price: 300,
    originalPrice: 350,
    image: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?auto=format&fit=crop&q=80&w=800",
    category: "Sweets",
    rating: 4.9,
    discount: 14
  },
  {
    id: "sw5",
    name: "Mysore Pak (Ghee)",
    description: "Traditional South Indian sweet made with gram flour, ghee, and sugar.",
    price: 400,
    image: "https://images.unsplash.com/photo-1621213143301-44709d73d724?auto=format&fit=crop&q=80&w=800",
    category: "Sweets",
    rating: 4.8
  },
  {
    id: "sw6",
    name: "Besan Ladoo",
    description: "Roasted gram flour balls with nuts and pure ghee.",
    price: 280,
    image: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?auto=format&fit=crop&q=80&w=800",
    category: "Sweets",
    rating: 4.7
  },
  {
    id: "sw7",
    name: "Dry Fruit Barfi",
    description: "Healthy and delicious barfi packed with nuts and figs.",
    price: 550,
    image: "https://images.unsplash.com/photo-1599307767316-776533bb941c?auto=format&fit=crop&q=80&w=800",
    category: "Sweets",
    rating: 4.9
  },
  {
    id: "sw8",
    name: "Assorted Sweet Box",
    description: "A perfect mix of our best-selling traditional sweets.",
    price: 600,
    originalPrice: 700,
    image: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?auto=format&fit=crop&q=80&w=800",
    category: "Sweets",
    rating: 4.9,
    discount: 15
  },
  {
    id: "sw9",
    name: "Rasmalai (5 Pcs)",
    description: "Soft paneer discs in creamy, saffron-infused milk.",
    price: 350,
    image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&q=80&w=800",
    category: "Sweets",
    rating: 4.8
  },
  {
    id: "sw10",
    name: "Badam Halwa",
    description: "Rich and nutty almond paste cooked in pure ghee.",
    price: 480,
    image: "https://images.unsplash.com/photo-1621213143301-44709d73d724?auto=format&fit=crop&q=80&w=800",
    category: "Sweets",
    rating: 4.9
  },

  // --- Pickles (Indian Pickles) ---
  {
    id: "pk1",
    name: "Avakaya (Mango Pickle)",
    description: "Traditional Andhra style hot and spicy mango pickle.",
    price: 180,
    originalPrice: 200,
    image: "https://images.unsplash.com/photo-1610450949065-0f0970335e2b?auto=format&fit=crop&q=80&w=800",
    category: "Pickles",
    rating: 4.9,
    discount: 10,
    tags: ["Authentic", "Spicy"]
  },
  {
    id: "pk2",
    name: "Gongura Pickle",
    description: "Tangy and spicy pickle made from Roselle leaves.",
    price: 150,
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800",
    category: "Pickles",
    rating: 4.8
  },
  {
    id: "pk3",
    name: "Tomato Pickle",
    description: "Sun-dried tomato pickle with traditional Indian spices.",
    price: 140,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc0?auto=format&fit=crop&q=80&w=800",
    category: "Pickles",
    rating: 4.7
  },
  {
    id: "pk4",
    name: "Ginger Pickle",
    description: "Mighty and flavorful ginger pickle, great for digestion.",
    price: 160,
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=800",
    category: "Pickles",
    rating: 4.6
  },
  {
    id: "pk5",
    name: "Garlic Pickle",
    description: "Bold and pungent garlic cloves marinated in spicy pickle oil.",
    price: 170,
    image: "https://images.unsplash.com/photo-1610450949065-0f0970335e2b?auto=format&fit=crop&q=80&w=800",
    category: "Pickles",
    rating: 4.8
  },
  {
    id: "pk6",
    name: "Lemon Pickle (Sweet & Sour)",
    description: "Zesty lemon pieces preserved in a perfect blend of sweet and spice.",
    price: 130,
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=800",
    category: "Pickles",
    rating: 4.5
  },
  {
    id: "pk7",
    name: "Amla Pickle",
    description: "Healthy gooseberry pickle rich in Vitamin C.",
    price: 190,
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800",
    category: "Pickles",
    rating: 4.7
  },
  {
    id: "pk8",
    name: "Red Chili Pickle",
    description: "Fiery red chili pickle for the spice lovers.",
    price: 160,
    image: "https://images.unsplash.com/photo-1610450949065-0f0970335e2b?auto=format&fit=crop&q=80&w=800",
    category: "Pickles",
    rating: 4.9
  },
  {
    id: "pk9",
    name: "Mixed Veg Pickle",
    description: "Assorted vegetables pickled with traditional secret recipe.",
    price: 150,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc0?auto=format&fit=crop&q=80&w=800",
    category: "Pickles",
    rating: 4.6
  },
  {
    id: "pk10",
    name: "Green Chili Pickle",
    description: "Spicy green chilies preserved in mustard oil and spices.",
    price: 140,
    image: "https://images.unsplash.com/photo-1610450949065-0f0970335e2b?auto=format&fit=crop&q=80&w=800",
    category: "Pickles",
    rating: 4.7
  },

  // --- Mixers ---
  {
    id: "mx1",
    name: "Special Mixture",
    description: "Classic South Indian savory mix with peanuts, curry leaves, and sev.",
    price: 120,
    image: "https://images.unsplash.com/photo-1601050633722-356b27074371?auto=format&fit=crop&q=80&w=800",
    category: "Mixers",
    rating: 4.8
  },
  {
    id: "mx2",
    name: "Cornflakes Mixture",
    description: "Crunchy cornflakes mixed with nuts and spices.",
    price: 110,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800", // Generic snack image
    category: "Mixers",
    rating: 4.7
  },
  {
    id: "mx3",
    name: "Garlic Sev",
    description: "Spicy and flavorful garlic-infused gram flour noodles.",
    price: 100,
    image: "https://images.unsplash.com/photo-1601050633722-356b27074371?auto=format&fit=crop&q=80&w=800",
    category: "Mixers",
    rating: 4.6
  },
  {
    id: "mx4",
    name: "Ribbon Pakoda",
    description: "Traditional ribbon-shaped crunchy rice flour snack.",
    price: 90,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    category: "Mixers",
    rating: 4.5
  },
  {
    id: "mx5",
    name: "Spicy Boondi",
    description: "Crispy fried gram flour pearls seasoned with spice mix.",
    price: 85,
    image: "https://images.unsplash.com/photo-1601050633722-356b27074371?auto=format&fit=crop&q=80&w=800",
    category: "Mixers",
    rating: 4.7
  },
  {
    id: "mx6",
    name: "Chekkalu (Rice Crackers)",
    description: "Crunchy rice crackers made with chana dal and curry leaves.",
    price: 130,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    category: "Mixers",
    rating: 4.8
  },
  {
    id: "mx7",
    name: "Puffed Rice Mix",
    description: "Light and spicy puffed rice with fried gram and nuts.",
    price: 80,
    image: "https://images.unsplash.com/photo-1601050633722-356b27074371?auto=format&fit=crop&q=80&w=800",
    category: "Mixers",
    rating: 4.4
  },
  {
    id: "mx8",
    name: "Moong Dal Snack",
    description: "Protein-rich salted and roasted moong dal.",
    price: 95,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    category: "Mixers",
    rating: 4.6
  },
  {
    id: "mx9",
    name: "Peanut Fry",
    description: "Classic spicy fried peanuts, perfect for tea-time.",
    price: 110,
    image: "https://images.unsplash.com/photo-1601050633722-356b27074371?auto=format&fit=crop&q=80&w=800",
    category: "Mixers",
    rating: 4.7
  },
  {
    id: "mx10",
    name: "South Indian Gathiya",
    description: "Soft and crunchy besan snacks with a hint of black pepper.",
    price: 105,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    category: "Mixers",
    rating: 4.5
  },

  // --- Chocochip Brownie ---
  {
    id: "br1",
    name: "Classic Chocochip Brownie",
    description: "Fudgy brownie loaded with premium dark chocochips.",
    price: 150,
    originalPrice: 180,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800",
    category: "Chocochip Brownie",
    rating: 4.9,
    discount: 16
  },
  {
    id: "br2",
    name: "Walnut Brownie",
    description: "Rich chocolate brownie topped with crunchy walnuts.",
    price: 180,
    image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&q=80&w=800", // Generic brownie image
    category: "Chocochip Brownie",
    rating: 4.8
  },
  {
    id: "br3",
    name: "Double Chocolate Brownie",
    description: "Extra chocolatey brownie for the ultimate indulgence.",
    price: 200,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800",
    category: "Chocochip Brownie",
    rating: 4.9
  },
  {
    id: "br4",
    name: "Nutella Brownie",
    description: "Fudgy brownie swirled with rich Nutella hazelnut spread.",
    price: 220,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800",
    category: "Chocochip Brownie",
    rating: 4.9
  },
  {
    id: "br5",
    name: "Sea Salt Caramel Brownie",
    description: "Perfect balance of sweet caramel and sea salt in a fudgy base.",
    price: 190,
    image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&q=80&w=800",
    category: "Chocochip Brownie",
    rating: 4.7
  },
  {
    id: "br6",
    name: "Eggless Dark Brownie",
    description: "100% vegetarian dark chocolate brownie, equally delicious.",
    price: 160,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800",
    category: "Chocochip Brownie",
    rating: 4.8
  },
  {
    id: "br7",
    name: "Peanut Butter Brownie",
    description: "Creamy peanut butter swirls in a rich chocolate brownie.",
    price: 185,
    image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&q=80&w=800",
    category: "Chocochip Brownie",
    rating: 4.6
  },
  {
    id: "br8",
    name: "Assorted Brownie Box",
    description: "Box of 4 different brownie flavors for your cravings.",
    price: 650,
    originalPrice: 750,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800",
    category: "Chocochip Brownie",
    rating: 4.9,
    discount: 13
  },
  {
    id: "br9",
    name: "Triple Chocolate Brownie",
    description: "White, milk, and dark chocolate chips in one brownie.",
    price: 210,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800",
    category: "Chocochip Brownie",
    rating: 4.9
  },
  {
    id: "br10",
    name: "Fudge Brownie Bites",
    description: "Bite-sized fudgy brownies for small treats.",
    price: 130,
    image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&q=80&w=800",
    category: "Chocochip Brownie",
    rating: 4.5
  },

  // --- Spices ---
  {
    id: "sp1",
    name: "Premium Turmeric Powder",
    description: "Naturally grown turmeric roots ground to fine powder.",
    price: 80,
    image: "https://images.unsplash.com/photo-1615485290382-441e4d0c9cb5?auto=format&fit=crop&q=80&w=800",
    category: "Spices",
    rating: 4.9
  },
  {
    id: "sp2",
    name: "Organic Red Chili Powder",
    description: "Authentic Guntur chilies ground for the perfect heat.",
    price: 90,
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=800",
    category: "Spices",
    rating: 4.8
  },
  {
    id: "sp3",
    name: "Garam Masala (Homemade)",
    description: "Traditional secret blend of whole spices for rich aroma.",
    price: 150,
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&q=80&w=800",
    category: "Spices",
    rating: 4.9
  },
  {
    id: "sp4",
    name: "Coriander Powder",
    description: "Pure and aromatic coriander seeds powder.",
    price: 70,
    image: "https://images.unsplash.com/photo-1615485290382-441e4d0c9cb5?auto=format&fit=crop&q=80&w=800",
    category: "Spices",
    rating: 4.6
  },
  {
    id: "sp5",
    name: "Cumin Powder",
    description: "Freshly roasted and ground cumin for authentic flavor.",
    price: 110,
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&q=80&w=800",
    category: "Spices",
    rating: 4.7
  },
  {
    id: "sp6",
    name: "Whole Black Pepper",
    description: "Premium quality whole peppercorns from South India.",
    price: 200,
    image: "https://images.unsplash.com/photo-1615485290382-441e4d0c9cb5?auto=format&fit=crop&q=80&w=800",
    category: "Spices",
    rating: 4.9
  },
  {
    id: "sp7",
    name: "Cardamom Pods (Green)",
    description: "Aromatic and large green cardamom pods.",
    price: 450,
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&q=80&w=800",
    category: "Spices",
    rating: 4.9
  },
  {
    id: "sp8",
    name: "Cinnamon Sticks",
    description: "Organic Ceylon cinnamon sticks with sweet aroma.",
    price: 180,
    image: "https://images.unsplash.com/photo-1615485290382-441e4d0c9cb5?auto=format&fit=crop&q=80&w=800",
    category: "Spices",
    rating: 4.8
  },
  {
    id: "sp9",
    name: "Cloves (Whole)",
    description: "Premium large whole cloves for cooking and wellness.",
    price: 220,
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&q=80&w=800",
    category: "Spices",
    rating: 4.7
  },
  {
    id: "sp10",
    name: "Dry Ginger Powder",
    description: "Sun-dried ginger ground to fine powder.",
    price: 140,
    image: "https://images.unsplash.com/photo-1615485290382-441e4d0c9cb5?auto=format&fit=crop&q=80&w=800",
    category: "Spices",
    rating: 4.6
  },

  // --- Karam Podi ---
  {
    id: "kp1",
    name: "Idli Karam Podi",
    description: "Traditional spicy powder for idli and dosa with pure ghee.",
    price: 120,
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800",
    category: "Karam Podi",
    rating: 4.9
  },
  {
    id: "kp2",
    name: "Nalla Karam",
    description: "Traditional dark spicy powder made with coriander seeds and urad dal.",
    price: 130,
    image: "https://images.unsplash.com/photo-1610450949065-0f0970335e2b?auto=format&fit=crop&q=80&w=800",
    category: "Karam Podi",
    rating: 4.8
  },
  {
    id: "kp3",
    name: "Garlic Karam Podi",
    description: "Strong garlic flavored spicy powder, best with rice.",
    price: 140,
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800",
    category: "Karam Podi",
    rating: 4.9
  },
  {
    id: "kp4",
    name: "Curry Leaf Podi",
    description: "Nutritious and flavorful powder made from fresh curry leaves.",
    price: 110,
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800",
    category: "Karam Podi",
    rating: 4.7
  },
  {
    id: "kp5",
    name: "Peanut Karam Podi",
    description: "Crunchy peanut-based spicy powder for extra flavor.",
    price: 125,
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800",
    category: "Karam Podi",
    rating: 4.8
  },
  {
    id: "kp6",
    name: "Sesame Karam Podi",
    description: "Healthy sesame seed based spicy powder.",
    price: 150,
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800",
    category: "Karam Podi",
    rating: 4.6
  },
  {
    id: "kp7",
    name: "Flax Seed Podi",
    description: "Omega-3 rich flax seeds grounded with spices.",
    price: 160,
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800",
    category: "Karam Podi",
    rating: 4.5
  },
  {
    id: "kp8",
    name: "Drumstick Leaf Podi",
    description: "Superfood Moringa leaves mixed with traditional spice blend.",
    price: 170,
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800",
    category: "Karam Podi",
    rating: 4.8
  },
  {
    id: "kp9",
    name: "Putnala Podi",
    description: "Roasted gram powder, very light and flavorful.",
    price: 100,
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800",
    category: "Karam Podi",
    rating: 4.7
  },
  {
    id: "kp10",
    name: "Kakarakaya Podi",
    description: "Bitter gourd spicy powder, surprisingly tasty and healthy.",
    price: 140,
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800",
    category: "Karam Podi",
    rating: 4.6
  },

  // --- Ghee ---
  {
    id: "gh1",
    name: "Pure Cow Ghee (500ml)",
    description: "Homemade style 100% pure cow ghee with grain-like texture.",
    price: 650,
    originalPrice: 700,
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&q=80&w=800",
    category: "Ghee",
    rating: 5.0,
    discount: 7
  },
  {
    id: "gh2",
    name: "Buffalo Ghee (500ml)",
    description: "Rich and creamy buffalo ghee, perfect for sweets.",
    price: 750,
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&q=80&w=800",
    category: "Ghee",
    rating: 4.9
  },
  {
    id: "gh3",
    name: "A2 Gir Cow Ghee",
    description: "Premium A2 ghee made using traditional Bilona method.",
    price: 1200,
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&q=80&w=800",
    category: "Ghee",
    rating: 5.0
  },
  {
    id: "gh4",
    name: "Herbal Ghee",
    description: "Pure ghee infused with Brahmi and Ashwagandha.",
    price: 850,
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&q=80&w=800",
    category: "Ghee",
    rating: 4.8
  },
  {
    id: "gh5",
    name: "Kids Special Ghee",
    description: "Easily digestible ghee processed for young children.",
    price: 700,
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&q=80&w=800",
    category: "Ghee",
    rating: 4.9
  },

  // --- Healthy Powders ---
  {
    id: "hp1",
    name: "Moringa Superfood Powder",
    description: "100% natural moringa leaves powder for immunity boost.",
    price: 250,
    image: "https://images.unsplash.com/photo-1615485290382-441e4d0c9cb5?auto=format&fit=crop&q=80&w=800",
    category: "Healthy Powders",
    rating: 4.8
  },
  {
    id: "hp2",
    name: "Ashwagandha Powder",
    description: "Pure root powder for stress relief and energy.",
    price: 350,
    image: "https://images.unsplash.com/photo-1615485290382-441e4d0c9cb5?auto=format&fit=crop&q=80&w=800",
    category: "Healthy Powders",
    rating: 4.9
  },
  {
    id: "hp3",
    name: "Turmeric Latte Mix",
    description: "Golden milk mix with turmeric, pepper, and cardamom.",
    price: 200,
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&q=80&w=800",
    category: "Healthy Powders",
    rating: 4.7
  },
  {
    id: "hp4",
    name: "Multigrain Health Mix",
    description: "Traditional Sathu Maavu with 15+ grains and nuts.",
    price: 450,
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&q=80&w=800",
    category: "Healthy Powders",
    rating: 4.9
  },
  {
    id: "hp5",
    name: "Almond Drink Mix",
    description: "Natural almond mix with saffron and real nuts.",
    price: 550,
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&q=80&w=800",
    category: "Healthy Powders",
    rating: 4.8
  },
  {
    id: "hp6",
    name: "Walnut Energy Powder",
    description: "Brain-boosting walnut and seed mix.",
    price: 600,
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&q=80&w=800",
    category: "Healthy Powders",
    rating: 4.7
  },
  {
    id: "hp7",
    name: "Ragi Health Drink",
    description: "Sprouted ragi powder for calcium and iron.",
    price: 180,
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&q=80&w=800",
    category: "Healthy Powders",
    rating: 4.8
  },
  {
    id: "hp8",
    name: "Flax Seed Weight Loss Mix",
    description: "Healthy seed mix for digestion and metabolic health.",
    price: 320,
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&q=80&w=800",
    category: "Healthy Powders",
    rating: 4.6
  },
  {
    id: "hp9",
    name: "Oats & Nuts Powder",
    description: "Easy breakfast drink mix with roasted oats and nuts.",
    price: 400,
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&q=80&w=800",
    category: "Healthy Powders",
    rating: 4.7
  },
  {
    id: "hp10",
    name: "Beetroot Health Mix",
    description: "Unique beetroot based drink mix for skin and health.",
    price: 380,
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&q=80&w=800",
    category: "Healthy Powders",
    rating: 4.7
  }
];

export const categories = [
  "All",
  "Sweets",
  "Pickles",
  "Mixers",
  "Chocochip Brownie",
  "Spices",
  "Karam Podi",
  "Ghee",
  "Healthy Powders"
];
