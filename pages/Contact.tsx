
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <h1 className="text-5xl font-black text-primary mb-8 tracking-tight">Get in Touch</h1>
            <p className="text-xl text-gray-500 mb-12 leading-relaxed">
              Have a question or need assistance? Our team is here to help you. Reach out to us through any of the channels below.
            </p>

            <div className="space-y-8">
              {[
                { icon: <Phone />, title: "Call Us", content: "+27 15 962 8000", sub: "General Inquiries" },
                { icon: <Mail />, title: "Email Us", content: "info@univen.ac.za", sub: "Support Team" },
                { icon: <MapPin />, title: "Visit Us", content: "University Road, Thohoyandou", sub: "Limpopo, South Africa" },
                { icon: <Clock />, title: "Office Hours", content: "Mon - Fri: 08:00 - 16:30", sub: "Closed on Weekends" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="w-14 h-14 bg-primary/5 text-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-widest text-tertiary mb-1">{item.title}</h3>
                    <p className="text-xl font-bold text-primary">{item.content}</p>
                    <p className="text-sm text-gray-400">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-50 p-10 md:p-16 rounded-[3rem] border border-gray-100 shadow-xl shadow-gray-100"
          >
            <h2 className="text-3xl font-black text-primary mb-8 flex items-center gap-3">
              <MessageSquare className="text-tertiary" />
              Send a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                  <input type="text" className="w-full h-14 px-6 rounded-2xl bg-white border-gray-200 focus:border-primary focus:ring-0 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                  <input type="email" className="w-full h-14 px-6 rounded-2xl bg-white border-gray-200 focus:border-primary focus:ring-0 transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Subject</label>
                <select className="w-full h-14 px-6 rounded-2xl bg-white border-gray-200 focus:border-primary focus:ring-0 transition-all appearance-none">
                  <option>General Inquiry</option>
                  <option>Admissions</option>
                  <option>Financial Aid</option>
                  <option>Technical Support</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Message</label>
                <textarea rows={5} className="w-full p-6 rounded-2xl bg-white border-gray-200 focus:border-primary focus:ring-0 transition-all" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full h-16 bg-primary text-white font-black rounded-2xl flex items-center justify-center gap-3 hover:brightness-110 transition-all shadow-xl shadow-primary/20">
                Send Message
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="h-[400px] bg-gray-200 relative overflow-hidden">
        <img 
          src="https://picsum.photos/seed/univen-map/1920/600" 
          alt="Map" 
          className="w-full h-full object-cover grayscale opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="font-black text-primary">University of Venda</h4>
              <p className="text-xs text-gray-500">Thohoyandou, Limpopo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
