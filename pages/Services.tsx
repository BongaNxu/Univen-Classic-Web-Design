
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, GraduationCap, Briefcase, Globe, Smartphone, HelpCircle, FileText } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    { icon: <Shield />, title: "Campus Security", desc: "24/7 security services to ensure a safe learning environment." },
    { icon: <Heart />, title: "Health & Wellness", desc: "Medical clinic and counseling services for students and staff." },
    { icon: <GraduationCap />, title: "Student Support", desc: "Academic advising, tutoring, and career guidance." },
    { icon: <Briefcase />, title: "Financial Aid", desc: "Bursaries, loans, and financial planning assistance." },
    { icon: <Globe />, title: "International Office", desc: "Support for international students and global exchange programs." },
    { icon: <Smartphone />, title: "IT Services", desc: "Wi-Fi, computer labs, and technical support." },
    { icon: <FileText />, title: "Registrar", desc: "Academic records, transcripts, and graduation services." },
    { icon: <HelpCircle />, title: "Help Desk", desc: "General inquiries and student information center." }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src="https://nebworksmedia.com/wp-content/uploads/2026/03/0001083475_resized_healthsciencesbuildinguniven1022.jpg" 
          alt="UNIVEN Services" 
          className="w-full h-full object-cover brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl font-black text-white mb-6 tracking-tight">University Services</h1>
            <p className="text-xl text-white/90 leading-relaxed font-medium">
              We provide a wide range of support services to enhance your university experience and ensure your success.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {React.cloneElement(service.icon as React.ReactElement, { size: 32 })}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              <button className="mt-6 text-xs font-black uppercase tracking-widest text-secondary hover:text-primary transition-colors">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="mt-20 p-10 bg-red-50 border-2 border-red-100 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center animate-pulse">
              <Shield size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-black text-red-900">Emergency Services</h3>
              <p className="text-red-700">Available 24 hours a day, 7 days a week.</p>
            </div>
          </div>
          <div className="text-4xl font-black text-red-600 tracking-tighter">
            +27 15 962 8000
          </div>
        </div>
      </div>
    </div>
  );
};
