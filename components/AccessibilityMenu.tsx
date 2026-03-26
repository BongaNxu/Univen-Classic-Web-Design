
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Accessibility, 
  X, 
  Plus, 
  Minus, 
  Moon, 
  Sun, 
  Contrast, 
  Type, 
  Underline, 
  RefreshCw,
  EyeOff
} from 'lucide-react';
import { useAccessibility } from './AccessibilityProvider';

export const AccessibilityMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { settings, updateSettings, resetSettings } = useAccessibility();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleFontSize = (delta: number) => {
    const newSize = Math.min(Math.max(settings.fontSize + delta, 80), 150);
    updateSettings({ fontSize: newSize });
  };

  const toggleSetting = (key: keyof typeof settings) => {
    updateSettings({ [key]: !settings[key] });
  };

  return (
    <div className="fixed left-6 bottom-24 z-[9999]">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMenu}
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-secondary transition-colors"
        aria-label="Accessibility Menu"
      >
        {isOpen ? <X size={28} /> : <Accessibility size={28} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.9 }}
            className="absolute bottom-16 left-0 w-72 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-slate-700 overflow-hidden"
          >
            <div className="p-6 bg-primary text-white">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <Accessibility size={20} />
                Accessibility Menu
              </h3>
              <p className="text-xs opacity-80 mt-1">Customize your viewing experience</p>
            </div>

            <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
              {/* Font Size */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-700 dark:text-gray-200 flex items-center gap-2">
                    <Type size={16} className="text-primary" />
                    Font Size
                  </span>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {settings.fontSize}%
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleFontSize(-10)}
                    className="flex-1 h-10 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 rounded-xl flex items-center justify-center transition-colors"
                    aria-label="Decrease font size"
                  >
                    <Minus size={18} />
                  </button>
                  <button
                    onClick={() => handleFontSize(10)}
                    className="flex-1 h-10 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 rounded-xl flex items-center justify-center transition-colors"
                    aria-label="Increase font size"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Dark Mode */}
                <button
                  onClick={() => toggleSetting('darkMode')}
                  className={`p-4 rounded-2xl border transition-all flex flex-col items-center gap-2 ${
                    settings.darkMode 
                      ? 'bg-primary/10 border-primary text-primary' 
                      : 'bg-gray-50 dark:bg-slate-700 border-transparent text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {settings.darkMode ? <Sun size={20} /> : <Moon size={20} />}
                  <span className="text-[10px] font-bold uppercase tracking-wider">
                    {settings.darkMode ? 'Light Mode' : 'Dark Mode'}
                  </span>
                </button>

                {/* High Contrast */}
                <button
                  onClick={() => toggleSetting('highContrast')}
                  className={`p-4 rounded-2xl border transition-all flex flex-col items-center gap-2 ${
                    settings.highContrast 
                      ? 'bg-primary/10 border-primary text-primary' 
                      : 'bg-gray-50 dark:bg-slate-700 border-transparent text-gray-600 dark:text-gray-300'
                  }`}
                >
                  <Contrast size={20} />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Contrast</span>
                </button>

                {/* Grayscale */}
                <button
                  onClick={() => toggleSetting('grayscale')}
                  className={`p-4 rounded-2xl border transition-all flex flex-col items-center gap-2 ${
                    settings.grayscale 
                      ? 'bg-primary/10 border-primary text-primary' 
                      : 'bg-gray-50 dark:bg-slate-700 border-transparent text-gray-600 dark:text-gray-300'
                  }`}
                >
                  <EyeOff size={20} />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Grayscale</span>
                </button>

                {/* Underline Links */}
                <button
                  onClick={() => toggleSetting('underlineLinks')}
                  className={`p-4 rounded-2xl border transition-all flex flex-col items-center gap-2 ${
                    settings.underlineLinks 
                      ? 'bg-primary/10 border-primary text-primary' 
                      : 'bg-gray-50 dark:bg-slate-700 border-transparent text-gray-600 dark:text-gray-300'
                  }`}
                >
                  <Underline size={20} />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Underline</span>
                </button>
              </div>

              {/* Reset */}
              <button
                onClick={resetSettings}
                className="w-full h-12 border-2 border-dashed border-gray-200 dark:border-slate-600 text-gray-400 dark:text-slate-400 hover:border-primary hover:text-primary dark:hover:text-primary rounded-2xl flex items-center justify-center gap-2 transition-all text-xs font-bold uppercase tracking-widest"
              >
                <RefreshCw size={14} />
                Reset Settings
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
