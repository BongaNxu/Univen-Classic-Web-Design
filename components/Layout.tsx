
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Chatbot } from './Chatbot';
import { AccessibilityMenu } from './AccessibilityMenu';
import { CookieConsent } from './CookieConsent';
import { ChevronDown, Search, BookOpen, GraduationCap, Users, Award } from 'lucide-react';
import { FACULTIES } from '../constants';

const Header = () => {
  const location = useLocation();
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const topNavLinks = [
    // { label: 'Apply', url: '/apply' },
    { label: 'Students', url: '#', hasDropdown: true },
    // { label: 'Alumni', url: '#' },
    // { label: 'Collaborate', url: '#' },
    // { label: 'Give', url: '#' },
    { label: 'Vacancies', url: '#' },
    // { label: 'Enquiries', url: '#' },
    // { label: 'Student Finance and Financial Aid', url: '#' },
    { label: 'Staff', url: '#' },
  ];

  const primaryNavLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Faculties', path: '/academics' },
    { label: 'Research', path: '/research' },
    { label: 'Library', path: '/library' },
    { label: 'News', path: '/news' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Navigation Strip (Orange/Secondary) */}
      <div className="bg-secondary text-white py-2 px-4 text-sm font-medium">
        <div className="max-w-[1280px] mx-auto flex items-center justify-center md:justify-end gap-1 flex-wrap">
          {topNavLinks.map((link, idx) => (
            <React.Fragment key={idx}>
              <a href={link.url} className="hover:text-white/80 px-2 flex items-center gap-1 whitespace-nowrap">
                {link.label}
                {link.hasDropdown && <ChevronDown size={12} />}
              </a>
              {idx < topNavLinks.length - 1 && <span className="opacity-40">|</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Primary Navigation Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white glass-nav py-4' : 'bg-transparent  py-8'}`}>
        <div className={`max-w-[1400px] mx-auto px-6 transition-all duration-300 flex items-center justify-between ${
          isScrolled ? 'h-24' : 'h-32'
        }`}>
          <div className="flex items-center gap-12">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="https://nebworksmedia.com/wp-content/uploads/2026/03/LogoUnivenXLWeb.png" 
                // src="https://nebworksmedia.com/wp-content/uploads/2026/03/univen-logo.png" 
                alt="University of Venda Logo" 
                className={`w-auto object-contain hover:opacity-90 transition-all duration-300 ${
                  isScrolled ? 'h-20' : 'h-28'
                }`} 
              />
            </Link>
            <nav className="hidden lg:flex items-center gap-6">
              {primaryNavLinks.map((link, idx) => (
                <div 
                  key={idx}
                  className={`relative flex items-center transition-all duration-300 ${
                    isScrolled ? 'h-24' : 'h-32'
                  }`}
                  onMouseEnter={() => link.label === 'Faculties' && setShowMegaMenu(true)}
                  onMouseLeave={() => link.label === 'Faculties' && setShowMegaMenu(false)}
                >
                  <Link 
                    to={link.path} 
                    className={`text-sm font-semibold transition-colors flex items-center gap-1 ${
                      isActive(link.path) 
                        ? 'text-[#bea65d]' 
                        : isScrolled ? 'text-gray-800 hover:text-[#bea65d]' : 'text-white hover:text-[#bea65d]'
                    }`}
                  >
                    {link.label}
                    {link.label === 'Faculties' && <ChevronDown size={14} className={`transition-transform duration-300 ${showMegaMenu ? 'rotate-180' : ''}`} />}
                  </Link>

                  {/* Mega Menu */}
                  {link.label === 'Faculties' && showMegaMenu && (
                    <div className={`absolute left-1/2 -translate-x-1/2 w-[900px] bg-white shadow-2xl rounded-b-3xl border-t border-gray-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-300 ${
                      isScrolled ? 'top-24' : 'top-32'
                    }`}>
                      <div className="grid grid-cols-4 p-8 gap-8">
                        {FACULTIES.map((faculty) => (
                          <Link 
                            key={faculty.id}
                            to={`/faculty/${faculty.id}`}
                            className="group flex flex-col gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-all"
                            onClick={() => setShowMegaMenu(false)}
                          >
                            <div className="h-32 w-full rounded-xl overflow-hidden relative">
                              <img 
                                src={faculty.image} 
                                alt={faculty.name} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div>
                              <h4 className="text-sm font-black text-primary mb-1 group-hover:text-secondary transition-colors">
                                {faculty.name}
                              </h4>
                              <p className="text-[10px] text-gray-500 line-clamp-2 leading-relaxed">
                                {faculty.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="bg-gray-50 p-6 flex items-center justify-between border-t border-gray-100">
                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                            <GraduationCap size={14} className="text-secondary" />
                            80+ Programs
                          </div>
                          <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                            <Users size={14} className="text-secondary" />
                            15,000+ Students
                          </div>
                        </div>
                        <Link 
                          to="/academics" 
                          className="text-xs font-black text-secondary hover:underline flex items-center gap-2"
                          onClick={() => setShowMegaMenu(false)}
                        >
                          View All Academic Programs <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <div className={`hidden xl:flex items-center rounded-lg px-3 py-1.5 border transition-all duration-300 ${
              isScrolled 
                ? 'bg-gray-100 border-transparent focus-within:border-primary/30' 
                : 'bg-white/10 border-white/20 focus-within:border-white/50'
            }`}>
              <span className={`material-symbols-outlined text-lg ${isScrolled ? 'text-gray-400' : 'text-white/70'}`}>search</span>
              <input 
                className={`bg-transparent border-none focus:ring-0 text-sm w-40 placeholder:text-gray-400 ${isScrolled ? 'text-gray-800' : 'text-white'}`} 
                placeholder="Search..." 
                type="text"
              />
            </div>
            <div className="flex items-center gap-3">
              <Link to="/apply" className="hidden md:flex bg-secondary text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:brightness-110 transition-colors shadow-lg shadow-secondary/20">Apply Now</Link>
              <button className={`p-2.5 rounded-lg transition-colors ${isScrolled ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                <span className="material-symbols-outlined text-xl">account_circle</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

const Footer = () => (
  <footer className="bg-white border-t border-gray-200 pt-20 pb-10">
    <div className="max-w-[1280px] mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <img 
              src="https://nebworksmedia.com/wp-content/uploads/2026/02/logo.jpg" 
              alt="University of Venda Logo" 
              className="h-24 w-auto object-contain" 
            />
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
            Creating Future Leaders. The University of Venda is committed to contributing to the socio-economic development of the Southern African region through excellence in teaching and research.
          </p>
          <div className="flex gap-4">
            {['public', 'share', 'mail'].map(icon => (
              <a key={icon} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-tertiary hover:text-white transition-all" href="#">
                <span className="material-symbols-outlined">{icon}</span>
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Quick Links</h4>
          <div className="h-0.5 w-8 bg-tertiary mb-6"></div>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a className="hover:text-primary transition-colors" href="#">Study with us</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Faculties</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Vacancies</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Tenders</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Support</h4>
          <div className="h-0.5 w-8 bg-tertiary mb-6"></div>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a className="hover:text-primary transition-colors" href="#">Help Desk</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Contact Us</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">PAIA</a></li>
            <li><Link className="hover:text-primary transition-colors" to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Campus Contact</h4>
          <div className="h-0.5 w-8 bg-tertiary mb-6"></div>
          <div className="space-y-4 text-sm text-gray-500">
            <p className="flex items-start gap-2">
              <span className="material-symbols-outlined text-sm mt-0.5 text-tertiary">location_on</span>
              University Road, Thohoyandou, Limpopo, RSA
            </p>
            <p className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-tertiary">call</span>
              +27 15 962 8000
            </p>
            <p className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-tertiary">mail</span>
              info@univen.ac.za
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
        <p>© 2026 University of Venda. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <Chatbot />
      <AccessibilityMenu />
      <CookieConsent />
    </div>
  );
};
