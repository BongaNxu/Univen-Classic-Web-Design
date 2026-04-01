
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, Cookie, ShieldCheck, Settings } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('univen-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500); // Show after 1.5 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('univen-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('univen-cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6 bg-black/70 backdrop-blur-[11px]">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="w-full max-w-[450px]"
          >
            <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/5 p-3 rounded-xl">
                      <img 
                        src="https://nebworksmedia.com/wp-content/uploads/2026/03/LogoUnivenXLWeb.png" 
                        alt="UniVen Logo" 
                        className="h-10 w-auto object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-primary leading-tight">Cookie Consent</h3>
                      <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">Privacy & Compliance</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsVisible(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="space-y-4 mb-8">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    To provide the best browsing experience, we use cookies to personalize content, analyze traffic, and improve our services. By clicking "Accept", you consent to our use of cookies.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-medium text-secondary">
                    <ShieldCheck size={14} />
                    <Link to="/privacy-policy" className="hover:underline">Read our Cookie Policy</Link>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={handleDecline}
                    className="px-6 py-3 rounded-xl border-2 border-gray-100 text-gray-600 text-sm font-bold hover:bg-gray-50 transition-all"
                  >
                    Decline
                  </button>
                  <button
                    onClick={handleAccept}
                    className="px-6 py-3 rounded-xl bg-secondary text-white text-sm font-bold hover:brightness-110 transition-all shadow-lg shadow-secondary/20"
                  >
                    Accept All
                  </button>
                </div>
                
                <button className="w-full mt-4 flex items-center justify-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-primary transition-colors">
                  <Settings size={12} />
                  Manage Preferences
                </button>
              </div>
              
              <div className="bg-gray-50 px-6 py-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[9px] text-gray-400 font-medium italic">Powered by UniVen Compliance</span>
                <Cookie size={14} className="text-gray-300" />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
