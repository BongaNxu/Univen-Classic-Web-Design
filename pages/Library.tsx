
import React from 'react';
import { motion } from 'framer-motion';
import { Book, Search, Clock, Monitor, Coffee, HelpCircle } from 'lucide-react';

export const Library: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src="https://nebworksmedia.com/portfolio/univen-wp/wp-content/uploads/2026/03/univen-library1.jpg" 
          // src="https://picsum.photos/seed/univen-library/1920/1080" 
          alt="UNIVEN Library" 
          className="w-full h-full object-cover brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl font-black text-white mb-6 tracking-tight">University Library</h1>
            <p className="text-xl text-white/90 leading-relaxed font-medium">
              Access a world of knowledge through our extensive collection of digital and physical resources.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search Header */}
      <div className="bg-white border-b border-gray-200 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
            <input 
              type="text" 
              placeholder="Search books, journals, and digital resources..." 
              className="w-full h-16 pl-16 pr-8 rounded-2xl border-2 border-gray-100 focus:border-primary focus:ring-0 transition-all text-lg"
            />
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {['E-Books', 'Journals', 'Theses', 'Archives'].map(tag => (
              <button key={tag} className="px-4 py-2 bg-gray-100 hover:bg-primary hover:text-white rounded-full text-sm font-bold transition-all">
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Services */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <Book />, title: "Borrowing", desc: "Manage your loans and renewals online." },
              { icon: <Monitor />, title: "Digital Library", desc: "Access thousands of electronic resources." },
              { icon: <Clock />, title: "Study Spaces", desc: "Book a quiet study room or group area." },
              { icon: <HelpCircle />, title: "Ask a Librarian", desc: "Get expert help with your research." }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-primary text-white p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Mon - Fri</span>
                  <span className="font-bold">08:00 - 22:00</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Saturday</span>
                  <span className="font-bold">09:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-bold">Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-secondary p-8 rounded-3xl text-white">
              <h3 className="text-xl font-bold mb-2">Library Cafe</h3>
              <p className="text-sm opacity-90 mb-4">Grab a coffee and a snack while you study.</p>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                <Coffee size={16} />
                Open Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
