
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FACULTIES } from '../constants';
import { Mail, Phone, MapPin, ArrowLeft, GraduationCap, Users, BookOpen, Award } from 'lucide-react';

export const FacultyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const faculty = FACULTIES.find(f => f.id === id);

  if (!faculty) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <h2 className="text-2xl font-black text-primary mb-4">Faculty Not Found</h2>
        <Link to="/" className="text-secondary font-bold hover:underline flex items-center gap-2">
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(49, 76, 122, 0.8), rgba(49, 76, 122, 0.9)), url("${faculty.image}")` 
          }}
        ></div>
        <div className="relative max-w-[1280px] mx-auto h-full flex flex-col justify-center px-6">
          <Link to="/" className="text-white/80 hover:text-white mb-8 flex items-center gap-2 transition-colors">
            <ArrowLeft size={20} /> Back to Faculties
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-white text-5xl md:text-6xl font-black leading-tight mb-4">
              Faculty of <span  style={{color: '#bea65d'}}>{faculty.name}</span>
            </h1>
            <p className="text-white/90 text-xl max-w-3xl leading-relaxed">
              {faculty.description}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Faculty Info */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Stats/Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Departments', value: faculty.departments.length, icon: <Users size={20} /> },
                { label: 'Programs', value: '24+', icon: <BookOpen size={20} /> },
                { label: 'Students', value: '3500+', icon: <GraduationCap size={20} /> },
                { label: 'Ranking', value: '#1', icon: <Award size={20} /> },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <div className="text-secondary mb-2">{stat.icon}</div>
                  <div className="text-2xl font-black text-primary">{stat.value}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Departments List */}
            <section className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
              <h2 className="text-2xl font-black text-primary mb-8">Academic Departments</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {faculty.departments.map((dept, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 group hover:border-secondary transition-all">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-secondary shadow-sm group-hover:bg-secondary group-hover:text-white transition-all">
                      <BookOpen size={20} />
                    </div>
                    <span className="font-bold text-primary">{dept}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Research & Innovation */}
            <section className="bg-primary p-10 rounded-[2.5rem] text-white shadow-xl shadow-primary/20">
              <h2 className="text-2xl font-black mb-6">Research & Innovation</h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Our faculty is at the forefront of groundbreaking research, addressing local and global challenges through interdisciplinary collaboration and state-of-the-art facilities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white/10 rounded-2xl border border-white/10">
                  <h3 className="font-bold mb-2">Current Projects</h3>
                  <p className="text-sm text-white/60">Over 15 active research projects funded by national and international grants.</p>
                </div>
                <div className="p-6 bg-white/10 rounded-2xl border border-white/10">
                  <h3 className="font-bold mb-2">Publications</h3>
                  <p className="text-sm text-white/60">More than 120 peer-reviewed articles published in high-impact journals annually.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Dean Info */}
          <aside className="space-y-8">
            
            {/* Dean Profile Card */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -mr-10 -mt-10"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                    <Users size={24} />
                  </div>
                  <h3 className="text-xl font-black text-primary">Office of the Dean</h3>
                </div>

                <div className="flex flex-col items-center text-center mb-8">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-50 shadow-lg mb-4">
                    <img 
                      src={faculty.dean.imageUrl} 
                      alt={faculty.dean.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/dean/200/200';
                      }}
                    />
                  </div>
                  <h4 className="text-xl font-black text-primary">{faculty.dean.name}</h4>
                  <p className="text-secondary font-bold text-sm uppercase tracking-widest">{faculty.dean.title}</p>
                </div>

                <div className="space-y-6 mb-10">
                  <p className="text-gray-500 text-sm leading-relaxed italic">
                    "{faculty.dean.bio}"
                  </p>
                </div>

                <div className="space-y-4 pt-8 border-t border-gray-50">
                  <h5 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Contact Details</h5>
                  
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Email</div>
                      <a href={`mailto:${faculty.dean.contact.email}`} className="text-sm font-bold text-primary hover:text-secondary transition-colors">
                        {faculty.dean.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Phone</div>
                      <div className="text-sm font-bold text-primary">{faculty.dean.contact.phone}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Office</div>
                      <div className="text-sm font-bold text-primary">{faculty.dean.contact.office}</div>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-10 py-4 bg-secondary text-white font-black text-sm rounded-xl hover:brightness-110 transition-all shadow-lg shadow-secondary/20">
                  Book Appointment
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-[#bea65d] p-8 rounded-[2.5rem] text-primary">
              <h3 className="text-xl font-black mb-6"><span style={{color: '#003366'}}>Faculty Resources</span></h3>
              <div className="space-y-3">
                {['Faculty Handbook', 'Research Ethics', 'Student Council', 'Alumni Portal'].map((link, i) => (
                  <button key={i} className="w-full p-4 bg-white/20 hover:bg-white/40 rounded-2xl flex items-center justify-between transition-all font-bold text-sm">
                    {link}
                    <ArrowLeft className="rotate-180" size={16} />
                  </button>
                ))}
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
};
