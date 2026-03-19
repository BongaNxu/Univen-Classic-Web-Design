
import React from 'react';
import { motion } from 'framer-motion';
import { Info, Target, Users, Award, Landmark, History } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src="https://picsum.photos/seed/univen-campus/1920/1080" 
          alt="UNIVEN Campus" 
          className="w-full h-full object-cover brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl font-black text-white mb-6 tracking-tight">Creating Future Leaders</h1>
            <p className="text-xl text-white/90 leading-relaxed font-medium">
              The University of Venda is a comprehensive tertiary institution that offers a range of academic, professional and career-focused programmes.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-10 bg-primary/5 rounded-3xl border border-primary/10"
          >
            <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
              <Target size={28} />
            </div>
            <h2 className="text-3xl font-black text-primary mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              To produce graduates that are locally relevant and globally competitive through quality teaching, learning, research and community engagement.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-10 bg-secondary/5 rounded-3xl border border-secondary/10"
          >
            <div className="w-14 h-14 bg-secondary text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-secondary/20">
              <Landmark size={28} />
            </div>
            <h2 className="text-3xl font-black text-primary mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              A university leading in engaged scholarship for sustainable development in Africa and the world.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-primary mb-4">Our Core Values</h2>
            <div className="w-20 h-1.5 bg-tertiary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Award className="text-tertiary" />, title: "Excellence", desc: "Striving for the highest quality in all we do." },
              { icon: <Users className="text-tertiary" />, title: "Diversity", desc: "Embracing different perspectives and backgrounds." },
              { icon: <History className="text-tertiary" />, title: "Integrity", desc: "Upholding ethical standards and transparency." },
              { icon: <Info className="text-tertiary" />, title: "Innovation", desc: "Fostering creativity and new ideas." }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{value.title}</h3>
                <p className="text-sm text-gray-500">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
