import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Send } from 'lucide-react';
import Banner from '../components/Banner';

const initialReviews = [
  {
    id: 1,
    name: "Rahul Verma",
    rating: 5,
    comment: "The quality of the sweets is simply outstanding! Tastes exactly like home. The Ghee Sweets are a must-try.",
    date: "2 Days ago",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Priya Sharma",
    rating: 5,
    comment: "I've ordered multiple times. Their Mango Pickle is extremely authentic and perfectly spiced. Highly recommended to everyone.",
    date: "1 Week ago",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Karthik N",
    rating: 4,
    comment: "Great packaging and very fast delivery. The Karam Podi goes so well with my everyday breakfast.",
    date: "3 Weeks ago",
  }
];

const Reviews = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState({ name: '', comment: '', rating: 5 });
  const [isHoveredStar, setIsHoveredStar] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;
    
    setReviews([{
      id: Date.now(),
      name: newReview.name,
      rating: newReview.rating,
      comment: newReview.comment,
      date: "Just now",
    }, ...reviews]);
    
    setNewReview({ name: '', comment: '', rating: 5 });
  };

  return (
    <>
      <Banner 
        title="Customer Reviews"
        subtitle="What People Say About Us"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Reviews', url: '/reviews' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Reviews List */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-3xl font-heading font-black text-brand-dark mb-8">Latest Feedback</h2>
            
            <div className="space-y-6">
              {reviews.map((review, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={review.id} 
                  className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-4">
                      {review.avatar ? (
                        <img src={review.avatar} alt={review.name} className="w-14 h-14 rounded-full object-cover shadow-md" />
                      ) : (
                        <div className="w-14 h-14 rounded-full bg-brand-yellow/20 flex items-center justify-center font-heading font-bold text-xl text-brand-dark">
                          {review.name.charAt(0)}
                        </div>
                      )}
                      <div>
                        <h4 className="font-heading font-bold text-lg text-brand-dark">{review.name}</h4>
                        <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">{review.date}</span>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < review.rating ? "fill-brand-yellow text-brand-yellow" : "fill-gray-200 text-gray-200"} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-medium">"{review.comment}"</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Write a Review */}
          <div className="lg:col-span-5">
            <div className="bg-brand-gray/50 p-8 sm:p-10 rounded-[3rem] sticky top-32 border border-white shadow-2xl">
              <h3 className="text-2xl font-heading font-black text-brand-dark mb-2">Write a Review</h3>
              <p className="text-gray-500 mb-8 text-sm font-medium">Share your experience with our traditional flavors.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Rating Selection */}
                <div>
                  <label className="block text-sm font-bold text-brand-dark mb-3 uppercase tracking-widest">Rate us</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        onMouseEnter={() => setIsHoveredStar(star)}
                        onMouseLeave={() => setIsHoveredStar(null)}
                        className="transition-transform hover:scale-110"
                      >
                        <Star 
                          size={28} 
                          className={`${
                            star <= (isHoveredStar || newReview.rating)
                              ? "fill-brand-yellow text-brand-yellow" 
                              : "fill-gray-300 text-gray-300"
                          } transition-colors duration-200`} 
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full bg-white border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-brand-yellow transition-all shadow-sm font-medium"
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <textarea 
                      placeholder="Your Feedback" 
                      rows={5}
                      className="w-full bg-white border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-brand-yellow transition-all shadow-sm resize-none font-medium text-sm"
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                      required
                    ></textarea>
                  </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full bg-brand-red text-white py-4 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-brand-red/20 hover:bg-brand-dark transition-all flex items-center justify-center gap-2 group"
                >
                  Submit Review
                  <Send size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Reviews;
