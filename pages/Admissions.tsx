
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Calendar, FileText, Download, Search, ClipboardList, GraduationCap, BookOpen, Users } from 'lucide-react';

export const Admissions: React.FC = () => {
  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src="https://picsum.photos/seed/univen-admissions/1920/1080" 
          alt="Admissions at UNIVEN" 
          className="w-full h-full object-cover brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl font-black text-white mb-6 tracking-tight">Start Your Future at UNIVEN</h1>
            <p className="text-xl text-white/90 leading-relaxed font-medium">
              Join a vibrant community of scholars and researchers. Our streamlined application process is designed to help you transition smoothly into university life.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-12">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-0.5 bg-secondary"></div>
          <span className="text-primary font-bold text-xs uppercase tracking-widest">Admissions 2026/2027</span>
        </div>
        
        <div className="flex flex-wrap gap-4 mb-20">
          <button className="bg-secondary text-white font-bold px-8 py-4 rounded-xl flex items-center gap-2 hover:brightness-110 transition-all shadow-lg shadow-secondary/20">
            Start Application <ArrowRight size={20} />
          </button>
          <button className="bg-white text-primary border-2 border-gray-100 font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition-all">
            Check Status
          </button>
        </div>

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Application Process */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                  <ClipboardList size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-primary">Application Process</h2>
                  <p className="text-sm text-gray-400">Follow these four simple steps to secure your place at the University of Venda.</p>
                </div>
              </div>

              <div className="space-y-8">
                {[
                  { step: 1, title: "Choose Your Course", desc: "Browse our list of undergraduate and postgraduate programs.", icon: <Search size={24} /> },
                  { step: 2, title: "Check Requirements", desc: "Ensure you meet the minimum Admission Point Score (APS).", icon: <CheckCircle2 size={24} /> },
                  { step: 3, title: "Gather Documents", desc: "Prepare certified copies of your ID and matric results.", icon: <FileText size={24} /> },
                  { step: 4, title: "Submit Online", desc: "Complete the online form and pay the application fee.", icon: <ArrowRight size={24} /> }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-1">{item.step}. {item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* General Entry Requirements */}
            <section className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
              <h2 className="text-2xl font-black text-primary mb-8">General Entry Requirements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <GraduationCap className="text-secondary" size={20} />
                    <h3 className="font-bold text-primary">Undergraduate</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "National Senior Certificate (NSC) or equivalent.",
                      "Minimum of Level 4 (50%+) in English.",
                      "Specific APS points per faculty."
                    ].map((req, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-500">
                        <CheckCircle2 className="text-emerald-500 mt-0.5 flex-shrink-0" size={16} />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <BookOpen className="text-secondary" size={20} />
                    <h3 className="font-bold text-primary">Postgraduate</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Relevant Bachelor's degree or Honors.",
                      "Minimum 60% average in previous studies.",
                      "Departmental approval."
                    ].map((req, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-500">
                        <CheckCircle2 className="text-emerald-500 mt-0.5 flex-shrink-0" size={16} />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Estimated Fees & Funding */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-black text-primary">Estimated Fees & Funding</h2>
                <button className="text-secondary font-bold text-sm hover:underline">Full Schedule</button>
              </div>
              <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">Faculty</th>
                      <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">App Fee</th>
                      <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">Est. Tuition</th>
                      <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">Funding</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-50">
                    {[
                      { faculty: "Humanities", fee: "R100", tuition: "R22k - R35k", funding: "NSFAS Available" },
                      { faculty: "Science & Eng", fee: "R100", tuition: "R30k - R55k", funding: "NSFAS Available" },
                      { faculty: "Health Sciences", fee: "R100", tuition: "R35k - R60k", funding: "NSFAS Available" }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm font-bold text-primary">{row.faculty}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">{row.fee}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">{row.tuition}</td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest rounded-full">
                            {row.funding}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

          </div>

          {/* Right Column (Sidebar) */}
          <aside className="space-y-8">
            
            {/* Important Dates */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-8">
                <Calendar className="text-secondary" size={24} />
                <h3 className="text-xl font-black text-primary">Important Dates</h3>
              </div>
              <div className="space-y-8">
                {[
                  { month: "AUG", day: "31", title: "Main Apps Close", sub: "Undergrad 2026" },
                  { month: "SEP", day: "30", title: "Postgrad Deadline", sub: "Master's & PhD" },
                  { month: "JAN", day: "15", title: "Registration Opens", sub: "New & Returning" }
                ].map((date, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gray-50 rounded-2xl flex flex-col items-center justify-center border border-gray-100">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{date.month}</span>
                      <span className="text-xl font-black text-secondary">{date.day}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary">{date.title}</h4>
                      <p className="text-xs text-gray-400">{date.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-10 py-4 border-2 border-gray-50 text-gray-400 font-bold text-sm rounded-xl hover:bg-gray-50 transition-all">
                Full Calendar
              </button>
            </div>

            {/* Resources */}
            <div className="bg-primary p-8 rounded-[2.5rem] text-white shadow-xl shadow-primary/20">
              <div className="flex items-center gap-3 mb-8">
                <Download className="text-tertiary" size={24} />
                <h3 className="text-xl font-black">Resources</h3>
              </div>
              <div className="space-y-4">
                <button className="w-full p-4 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center gap-4 transition-all text-left">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <FileText size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Undergrad Prospectus</div>
                    <div className="text-[10px] opacity-50 uppercase tracking-widest">PDF • 4.2 MB</div>
                  </div>
                </button>
                <button className="w-full p-4 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center gap-4 transition-all text-left">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <FileText size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Postgrad Prospectus</div>
                    <div className="text-[10px] opacity-50 uppercase tracking-widest">PDF • 3.8 MB</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Help Card */}
            <div className="bg-secondary p-8 rounded-[2.5rem] text-white">
              <h3 className="text-xl font-black mb-4">Need Help?</h3>
              <p className="text-sm opacity-80 mb-6 leading-relaxed">Our admissions team is available to assist you with your application.</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Users size={20} />
                </div>
                <div className="text-sm font-bold">+27 15 962 8000</div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  </div>
);
};
