
import React from 'react';
import { Link } from 'react-router-dom';
import { NEWS, EVENTS, FACULTIES } from '../constants';

export const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[900px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url("https://nebworksmedia.com/wp-content/uploads/2026/03/ousa-chea-gKUC4TMhOiY-unsplash-1-scaled-1.jpg")'}}></div>
        <div className="relative max-w-[1280px] mx-auto h-full flex flex-col justify-center px-6">
          <div className="max-w-2xl">
            <h2 className="text-white text-6xl font-black leading-tight mb-6 text-shadow-sm">
              Creating Future <span style={{color: '#bea65d'}}>Leaders</span> Through Knowledge
            </h2>
            <p className="text-white/90 text-xl font-normal leading-relaxed mb-10 max-w-xl">
              Experience a world-class education at the University of Venda. We are dedicated to shaping the next generation of global impact makers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/apply" className="bg-secondary text-white text-lg font-bold px-8 py-4 rounded-xl hover:brightness-110 transition-all flex items-center gap-2">
                Start Your Application <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/30 text-lg font-bold px-8 py-4 rounded-xl hover:bg-white/20 transition-all">
                Take a Virtual Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <div className="max-w-[1100px] mx-auto -mt-16 relative z-10 px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: 'library_books', label: 'Library Services' },
            { icon: 'school', label: 'Student Portal' },
            { icon: 'badge', label: 'Staff Portal' },
            { icon: 'diversity_3', label: 'Alumni Network' },
          ].map((item, idx) => (
            <a key={idx} className="bg-white p-6 rounded-xl shadow-xl flex flex-col items-center gap-3 border border-gray-100 hover:-translate-y-1 transition-transform group" href="#">
              <span className="material-symbols-outlined text-tertiary text-4xl group-hover:scale-110 transition-transform">{item.icon}</span>
              <span className="font-bold text-sm">{item.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* News & Events Section */}
      <section className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-black tracking-tight">Latest News</h3>
              <a className="text-primary font-bold flex items-center gap-1 hover:underline text-sm" href="#">
                All News <span className="material-symbols-outlined text-sm text-tertiary">arrow_forward</span>
              </a>
            </div>
            <div className="h-1 w-20 bg-tertiary mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {NEWS.map(item => (
                <div key={item.id} className="flex flex-col gap-4 group cursor-pointer">
                  <div className="h-56 w-full rounded-xl bg-gray-200 bg-cover bg-center overflow-hidden transition-transform group-hover:scale-[1.02]" style={{backgroundImage: `url(${item.imageUrl})`}}></div>
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-bold text-tertiary uppercase tracking-widest">{item.category}</span>
                    <h4 className="text-xl font-bold leading-tight hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/3">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-black tracking-tight">Events</h3>
              <a className="text-primary font-bold flex items-center gap-1 hover:underline text-sm" href="#">
                Calendar <span className="material-symbols-outlined text-sm text-tertiary">event</span>
              </a>
            </div>
            <div className="h-1 w-20 bg-tertiary mb-8"></div>
            <div className="space-y-6">
              {EVENTS.map(event => (
                <div key={event.id} className="flex gap-4 p-4 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col items-center justify-center bg-primary/10 text-primary rounded-lg min-w-[60px] h-[60px]">
                    <span className="text-xl font-black leading-none">{event.day}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest">{event.month}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h5 className="font-bold text-sm leading-snug">{event.title}</h5>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="material-symbols-outlined text-xs text-tertiary">{event.type === 'virtual' ? 'videocam' : 'schedule'}</span> {event.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Faculties Section */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-black tracking-tight mb-4">Our Faculties</h2>
          <div className="h-1 w-20 bg-tertiary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Diverse fields of study designed to empower your career and contribute to global development.</p>
        </div>
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACULTIES.map((faculty) => (
            <Link 
              key={faculty.id} 
              to={`/faculty/${faculty.id}`}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg block"
            >
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: `url(${faculty.image})`}}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent flex flex-col justify-end p-6">
                <h4 className="text-white text-xl font-bold mb-1">{faculty.name}</h4>
                <p className="text-white/80 text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 line-clamp-2">{faculty.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="h-1 w-8 bg-tertiary opacity-0 group-hover:opacity-100 transition-all"></div>
                  <span className="text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-all flex items-center gap-1">
                    Details <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-primary/5 py-24 border-y border-tertiary/20">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="inline-block px-4 py-1.5 bg-tertiary text-white text-xs font-black rounded-full mb-6 tracking-widest uppercase">Research Excellence</div>
            <h2 className="text-5xl font-black tracking-tight mb-8">Impacting Local Communities Through Global Science</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              UNIVEN is a research-intensive institution. Our researchers are at the forefront of finding solutions for water scarcity, sustainable food production, and rural health challenges.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <div className="text-4xl font-black text-primary mb-1">12+</div>
                <div className="h-0.5 w-8 bg-tertiary mb-2"></div>
                <p className="text-sm font-bold opacity-60">Research Centers</p>
              </div>
              <div>
                <div className="text-4xl font-black text-primary mb-1">450+</div>
                <div className="h-0.5 w-8 bg-tertiary mb-2"></div>
                <p className="text-sm font-bold opacity-60">Annual Publications</p>
              </div>
            </div>
            <button className="bg-primary text-white font-bold px-8 py-4 rounded-xl hover:brightness-110 transition-colors shadow-lg shadow-primary/20">
              Explore Our Impact
            </button>
          </div>
          <div className="md:w-1/2 relative">
            <div className="aspect-square rounded-[40px] bg-gray-300 overflow-hidden shadow-2xl rotate-3 border-4 border-white">
              <img alt="Researcher" className="w-full h-full object-cover -rotate-3 scale-110" src="https://nebworksmedia.com/wp-content/uploads/2026/02/stock-photo-multiethnic-robotics-engineer-talking-to-project-manager-discussing-robot-dog-concept-in-high-tech-2233202355.jpg"/>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl max-w-xs border-l-4 border-tertiary">
              <p className="italic text-gray-700 text-sm mb-4">"Our research is rooted in African challenges but aimed at global excellence."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                <div>
                  <p className="text-xs font-bold">Prof. Sarah Thompson</p>
                  <p className="text-[10px] opacity-60 tracking-tight">Deputy Vice-Chancellor (Research)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
