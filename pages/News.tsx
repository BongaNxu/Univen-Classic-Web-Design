
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowRight, Share2 } from 'lucide-react';

export const News: React.FC = () => {
  const newsItems = [
    {
      title: "UNIVEN Celebrates 40 Years of Excellence",
      date: "March 10, 2026",
      category: "Events",
      image: "https://nebworksmedia.com/wp-content/uploads/2026/03/UNIVEN-Celebrates-40-Years-of-Excellence.jpg",
      excerpt: "The University of Venda marks a major milestone with a series of commemorative events and community projects."
    },
    {
      title: "New Research Grant for Climate Adaptation",
      date: "March 08, 2026",
      category: "Research",
      image: "https://nebworksmedia.com/wp-content/uploads/2026/03/New-Research-Grant-for-Climate-Adaptation.jpg",
      excerpt: "Faculty of Science receives R5 million grant to study climate resilience in local agricultural systems."
    },
    {
      title: "Student Leadership Elections Results",
      date: "March 05, 2026",
      category: "Campus Life",
      image: "https://nebworksmedia.com/wp-content/uploads/2026/03/stock-photo-a-cute-black-female-university-student-on-campus-with-backpack-1987030421.jpg",
      excerpt: "The SRC elections concluded successfully with a record voter turnout this year."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src="https://www.shutterstock.com/shutterstock/photos/1070837540/display_1500/stock-photo-word-news-formed-by-wood-alphabet-blocks-on-newspaper-1070837540.jpg" 
          alt="News at UNIVEN" 
          className="w-full h-full object-cover brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl font-black text-white mb-6 tracking-tight">Latest News</h1>
            <p className="text-xl text-white/90 leading-relaxed font-medium">
              Stay updated with the latest happenings, achievements, and events at the University of Venda.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-16">
          <div className="hidden md:flex gap-4">
            {['All', 'Events', 'Research', 'Academic'].map(cat => (
              <button key={cat} className="px-6 py-2 rounded-full border border-gray-200 text-sm font-bold hover:bg-primary hover:text-white transition-all">
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {newsItems.map((item, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-primary">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-xs text-gray-400 mb-3 font-bold uppercase tracking-tighter">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  {item.date}
                </div>
                <div className="flex items-center gap-1">
                  <Share2 size={14} />
                  Share
                </div>
              </div>

              <h2 className="text-2xl font-black text-primary mb-4 group-hover:text-secondary transition-colors leading-tight">
                {item.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {item.excerpt}
              </p>
              
              <button className="flex items-center gap-2 text-primary font-black text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                Read More
                <ArrowRight size={18} />
              </button>
            </motion.article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-24 bg-primary rounded-[3rem] p-12 md:p-20 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Subscribe to our Newsletter</h2>
          <p className="text-white/70 mb-10 max-w-xl mx-auto">Get the latest news and updates delivered straight to your inbox every week.</p>
          <form className="max-w-md mx-auto flex gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 h-14 px-6 rounded-2xl bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:bg-white/20 focus:ring-0 transition-all"
            />
            <button className="h-14 px-8 bg-tertiary text-primary font-black rounded-2xl hover:brightness-110 transition-all">
              Join
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
