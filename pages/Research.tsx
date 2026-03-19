
import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Globe, Lightbulb, BookOpen, BarChart, Zap } from 'lucide-react';

export const Research: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-primary py-20 px-6 text-white text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl font-black mb-6 tracking-tight">Research & Innovation</h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Driving sustainable development through impactful research and community-centered innovation.
          </p>
        </motion.div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-20">
        {/* Research Focus Areas */}
        <div className="mb-20">
          <h2 className="text-3xl font-black text-primary mb-12 flex items-center gap-3">
            <Microscope className="text-tertiary" />
            Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Health Sciences", icon: <Zap />, color: "bg-blue-500", desc: "Advancing community health and disease prevention." },
              { title: "Environmental Sustainability", icon: <Globe />, color: "bg-emerald-500", desc: "Researching climate change and natural resource management." },
              { title: "Rural Development", icon: <Landmark />, color: "bg-amber-500", desc: "Empowering rural communities through socio-economic research." }
            ].map((area, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-100 border border-gray-100"
              >
                <div className={`w-12 h-12 ${area.color} text-white rounded-xl flex items-center justify-center mb-6`}>
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{area.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gray-900 rounded-[3rem] p-12 text-white grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-black text-tertiary mb-2">150+</div>
            <div className="text-sm opacity-60 uppercase tracking-widest font-bold">Research Papers</div>
          </div>
          <div>
            <div className="text-4xl font-black text-tertiary mb-2">45</div>
            <div className="text-sm opacity-60 uppercase tracking-widest font-bold">Active Projects</div>
          </div>
          <div>
            <div className="text-4xl font-black text-tertiary mb-2">12</div>
            <div className="text-sm opacity-60 uppercase tracking-widest font-bold">Research Centers</div>
          </div>
          <div>
            <div className="text-4xl font-black text-tertiary mb-2">R20M+</div>
            <div className="text-sm opacity-60 uppercase tracking-widest font-bold">Annual Funding</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Landmark = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="22" x2="21" y2="22"></line><line x1="6" y1="18" x2="6" y2="11"></line><line x1="10" y1="18" x2="10" y2="11"></line><line x1="14" y1="18" x2="14" y2="11"></line><line x1="18" y1="18" x2="18" y2="11"></line><polygon points="12 2 2 7 22 7 12 2"></polygon></svg>
);
