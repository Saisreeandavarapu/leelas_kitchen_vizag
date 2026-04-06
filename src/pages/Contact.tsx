import Banner from '../components/Banner';
import { motion } from 'framer-motion';
import DeliveryBanner from '../components/DeliveryBanner';

const Contact = () => {
  return (
    <>
      <Banner
        title="Contact Us"
        subtitle="Get in Touch"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Contact Us', url: '/contact' }
        ]}
      />

      <div className="bg-brand-gray/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Info Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[2rem] p-10 text-center shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 border border-gray-100 group"
            >
              <div className="w-20 h-20 bg-brand-yellow/10 rounded-full mx-auto flex items-center justify-center text-brand-yellow mb-6 transform group-hover:-translate-y-2 group-hover:bg-brand-yellow group-hover:text-white transition-all duration-300">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="font-heading font-extrabold text-2xl mb-3 text-brand-dark">Our Location</h3>
              <p className="text-gray-500">Vizag Main Road, AP,<br />India 530001</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[2rem] p-10 text-center shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 border border-gray-100 group"
            >
              <div className="w-20 h-20 bg-brand-red/10 rounded-full mx-auto flex items-center justify-center text-brand-red mb-6 transform group-hover:-translate-y-2 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <h3 className="font-heading font-extrabold text-2xl mb-3 text-brand-dark">Phone Number</h3>
              <p className="text-gray-500">Delivery: +91 86887 56757<br />Support: +91 86887 56758</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[2rem] p-10 text-center shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 border border-gray-100 group"
            >
              <div className="w-20 h-20 bg-brand-dark/5 rounded-full mx-auto flex items-center justify-center text-brand-dark mb-6 transform group-hover:-translate-y-2 group-hover:bg-brand-dark group-hover:text-white transition-all duration-300">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="font-heading font-extrabold text-2xl mb-3 text-brand-dark">Email Address</h3>
              <p className="text-gray-500">info@leelaskitchen.com<br />support@leelaskitchen.com</p>
            </motion.div>
          </div>

          {/* Contact Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100">
            <div className="rounded-2xl overflow-hidden h-[400px] lg:h-auto border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121634.33230671408!2d83.1872138!3d17.7386226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389b69735%3A0xb31c360a0058b764!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1680193498305!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="py-4 pr-4">
              <span className="text-brand-red font-bold uppercase tracking-wider text-sm mb-2 block flex items-center gap-2">
                <span className="w-4 h-4 bg-brand-yellow rounded-full"></span>
                Write a Message
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-dark mb-8">Leave a Message Here</h2>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <input type="text" placeholder="Your Name" className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all shadow-sm" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email Address" className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all shadow-sm" />
                  </div>
                </div>
                <div>
                  <input type="text" placeholder="Subject" className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all shadow-sm" />
                </div>
                <div>
                  <textarea rows={5} placeholder="Write Message" className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all shadow-sm resize-none"></textarea>
                </div>
                <button type="submit" className="bg-brand-red text-white px-10 py-4 rounded-xl font-bold font-heading hover:bg-brand-dark transition-colors w-auto inline-flex items-center gap-3 shadow-lg shadow-brand-red/30">
                  Send Message
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <DeliveryBanner />
    </>
  );
};

export default Contact;
