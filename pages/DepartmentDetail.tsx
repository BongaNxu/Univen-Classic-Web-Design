
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FACULTIES } from '../constants';
import { Mail, Phone, MapPin, ArrowLeft, Users, BookOpen, Info, GraduationCap, Briefcase, User } from 'lucide-react';

export const DepartmentDetail: React.FC = () => {
  const { facultyId, deptId } = useParams<{ facultyId: string, deptId: string }>();
  const faculty = FACULTIES.find(f => f.id === facultyId);
  const department = faculty?.departments.find(d => d.id === deptId);

  if (!faculty || !department) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <h2 className="text-2xl font-black text-primary mb-4">Department Not Found</h2>
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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url("${faculty.image}")` 
            // backgroundImage: `linear-gradient(rgba(0, 51, 102, 0.7), rgba(0, 51, 102, 0.8)), url("${faculty.image}")` 
          }}
        ></div>
        <div className="relative max-w-[1280px] mx-auto h-full flex flex-col justify-center px-6">
          <Link to={`/faculty/${faculty.id}`} className="text-white/80 hover:text-white mb-8 flex items-center gap-2 transition-colors">
            <ArrowLeft size={20} /> Back to Faculty of {faculty.name}
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-white text-4xl md:text-5xl font-black leading-tight mb-4">
              Department of <span style={{color: '#bea65d'}}>{department.name}</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* About Us */}
            <section className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                  <Info size={24} />
                </div>
                <h2 className="text-2xl font-black text-primary">About Us</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {department.about}
              </p>
            </section>

            {/* Programmes */}
            <section className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                  <GraduationCap size={24} />
                </div>
                <h2 className="text-2xl font-black text-primary">Programmes</h2>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {department.programmes.map((prog, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                    <h3 className="text-lg font-black text-primary mb-2">{prog.name}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><BookOpen size={16} /> {prog.level}</span>
                      <span className="flex items-center gap-1"><Users size={16} /> {prog.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Modules */}
            <section className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                  <BookOpen size={24} />
                </div>
                <h2 className="text-2xl font-black text-primary">Modules</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="py-4 font-black text-gray-400 uppercase tracking-widest text-xs">Code</th>
                      <th className="py-4 font-black text-gray-400 uppercase tracking-widest text-xs">Module Name</th>
                      <th className="py-4 font-black text-gray-400 uppercase tracking-widest text-xs text-center">Credits</th>
                    </tr>
                  </thead>
                  <tbody>
                    {department.modules.map((mod, idx) => (
                      <tr key={idx} className="border-b border-gray-50 last:border-0">
                        <td className="py-4 font-bold text-secondary">{mod.code}</td>
                        <td className="py-4 font-medium text-primary">{mod.name}</td>
                        <td className="py-4 font-bold text-primary text-center">{mod.credits}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Short Courses */}
            <section className="bg-primary p-10 rounded-[2.5rem] text-white shadow-xl shadow-primary/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/10 rounded-xl text-white">
                  <Briefcase size={24} />
                </div>
                <h2 className="text-2xl font-black">Short Courses</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {department.shortCourses.map((course, idx) => (
                  <div key={idx} className="p-4 bg-white/10 rounded-xl border border-white/10 flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="font-bold">{course}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Staff */}
            <section className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                  <Users size={24} />
                </div>
                <h2 className="text-2xl font-black text-primary">Our Staff</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {department.staff.map((member, idx) => (
                  <div key={idx} className="flex gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center text-gray-400">
                      <User size={32} />
                    </div>
                    <div>
                      <h3 className="font-black text-primary">{member.name}</h3>
                      <p className="text-secondary text-sm font-bold mb-2">{member.role}</p>
                      <a href={`mailto:${member.email}`} className="text-xs text-gray-400 hover:text-secondary flex items-center gap-1">
                        <Mail size={12} /> {member.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Contact Info */}
          <aside className="space-y-8">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
              <h3 className="text-xl font-black text-primary mb-8">Contact Details</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Email</div>
                    <a href={`mailto:${department.contact.email}`} className="font-bold text-primary hover:text-secondary transition-colors">
                      {department.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Phone</div>
                    <div className="font-bold text-primary">{department.contact.phone}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Office</div>
                    <div className="font-bold text-primary">{department.contact.office}</div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
