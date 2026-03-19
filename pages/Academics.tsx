
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, BookOpen, GraduationCap, Clock, MapPin, ChevronRight, Star } from 'lucide-react';
import { COURSES, FACULTIES } from '../constants';
import { FacultyType } from '../types';
import { getChatResponse } from '../services/geminiService';

export const Academics: React.FC = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyType | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [aiInput, setAiInput] = useState('');
  const [aiRecommendation, setAiRecommendation] = useState<any>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<{ role: string, parts: { text: string }[] }[]>([]);

  const filteredCourses = COURSES.filter(course => {
    const matchesFaculty = selectedFaculty === 'All' || course.faculty === selectedFaculty;
    const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFaculty && matchesSearch;
  });

  const handleAiAdvice = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiInput.trim()) return;
    setIsAiLoading(true);
    try {
      const response = await getChatResponse(aiInput, chatHistory);
      
      // Map new structure to old state for UI compatibility
      const rec = {
        isRecommendation: response.type === 'recommendation',
        recommendedField: response.recommendedField,
        reasoning: response.reasoning,
        suggestedSubjects: response.suggestedSubjects,
        followUpQuestion: response.type === 'question' ? response.text : null,
        text: response.text
      };
      
      setAiRecommendation(rec);
      
      // Update history
      const newHistory = [
        ...chatHistory,
        { role: "user", parts: [{ text: aiInput }] },
        { role: "model", parts: [{ text: JSON.stringify(response) }] }
      ];
      setChatHistory(newHistory);
      
      // If it's a follow-up, clear input for the next answer
      if (response.type === 'question') {
        setAiInput('');
      }
    } catch (error) {
      console.error("AI Error:", error);
    } finally {
      setIsAiLoading(false);
    }
  };

  const resetAi = () => {
    setAiRecommendation(null);
    setChatHistory([]);
    setAiInput('');
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src="https://www.shutterstock.com/shutterstock/photos/2210718325/display_1500/stock-photo-university-international-and-scholarship-students-talking-of-study-opportunity-school-education-2210718325.jpg" 
          alt="Academics at UNIVEN" 
          className="w-full h-full object-cover object-center brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl font-black text-white mb-6 tracking-tight">Explore our Academics</h1>
            <p className="text-xl text-white/90 leading-relaxed font-medium">
              Discover a wide range of undergraduate and postgraduate programs designed to shape your future at the University of Venda.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-12">
        <nav className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-500">
          <Link className="hover:text-primary" to="/">Home</Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-primary font-bold">Academics</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-72 flex-shrink-0">
          <div className="sticky top-24 flex flex-col gap-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">Filter by Faculty</h3>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setSelectedFaculty('All')}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-bold transition-all ${selectedFaculty === 'All' ? 'bg-primary/5 text-primary border-l-4 border-tertiary' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <span className="material-symbols-outlined text-[20px] text-tertiary">apps</span>
                  <span>All Faculties</span>
                </button>
                {Object.values(FacultyType).map(faculty => (
                  <button
                    key={faculty}
                    onClick={() => setSelectedFaculty(faculty)}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-left transition-all ${selectedFaculty === faculty ? 'bg-primary/5 text-primary border-l-4 border-tertiary font-bold' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    <span className="material-symbols-outlined text-[20px] text-primary/60">
                      {faculty === FacultyType.SCIENCE_AGRICULTURE ? 'biotech' : faculty === FacultyType.MANAGEMENT_LAW ? 'gavel' : faculty === FacultyType.HUMANITIES ? 'history_edu' : 'medical_services'}
                    </span>
                    <span>{faculty}</span>
                  </button>
                ))}
              </div>
              
              <hr className="my-6 border-gray-100" />
              <div className="flex flex-col gap-4">
                <div className="text-sm font-bold text-primary mb-2">AI Smart Counselor</div>
                <form onSubmit={handleAiAdvice} className="space-y-3">
                  <textarea
                    value={aiInput}
                    onChange={(e) => setAiInput(e.target.value)}
                    placeholder="E.g., I love nature and helping people..."
                    className="w-full text-xs p-2 rounded-lg border border-gray-200 focus:ring-primary focus:border-primary"
                    rows={3}
                  />
                  <button
                    disabled={isAiLoading}
                    className="w-full bg-primary text-white py-2 text-xs font-bold rounded-lg hover:brightness-110 disabled:opacity-50 transition-all"
                  >
                    {isAiLoading ? 'Analyzing...' : 'Get Advice'}
                  </button>
                </form>
              </div>

              <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg border-2 border-primary py-2.5 text-sm font-bold text-primary hover:bg-primary/5 transition-colors">
                <span className="material-symbols-outlined text-[18px]">download</span>
                Prospectus
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1">
          {selectedFaculty !== 'All' && (
            <div className="mb-8 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-black text-primary">Faculty of {selectedFaculty}</h2>
                <p className="text-sm text-gray-500">Learn more about the leadership and departments of this faculty.</p>
              </div>
              <Link 
                to={`/faculty/${FACULTIES.find(f => f.name === selectedFaculty)?.id}`}
                className="px-6 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:brightness-110 transition-all whitespace-nowrap"
              >
                View Faculty Details
              </Link>
            </div>
          )}

          {/* AI Recommendation Result */}
          {aiRecommendation && (
            <div className={`mb-8 p-6 rounded-2xl shadow-xl relative overflow-hidden transition-all ${aiRecommendation.isRecommendation ? 'bg-gradient-to-r from-primary to-primary/90 text-white' : 'bg-tertiary/10 border-2 border-tertiary/30 text-primary'}`}>
              <div className="absolute right-0 top-0 p-2 cursor-pointer" onClick={resetAi}>
                <span className="material-symbols-outlined">close</span>
              </div>
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${aiRecommendation.isRecommendation ? 'bg-white/20' : 'bg-tertiary/20'}`}>
                  <span className={`material-symbols-outlined text-3xl ${aiRecommendation.isRecommendation ? 'text-white' : 'text-tertiary'}`}>
                    {aiRecommendation.isRecommendation ? 'psychology' : 'contact_support'}
                  </span>
                </div>
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${aiRecommendation.isRecommendation ? 'text-white' : 'text-primary'}`}>
                    {aiRecommendation.isRecommendation ? 'AI Counselor Recommendation' : 'AI Counselor Follow-up'}
                  </h3>
                  
                  {aiRecommendation.isRecommendation ? (
                    <>
                      <p className="text-sm text-white/90 mb-2">{aiRecommendation.text}</p>
                      <p className="text-lg font-bold text-tertiary mb-2">{aiRecommendation.recommendedField}</p>
                      <p className="text-sm text-white/90 mb-4">{aiRecommendation.reasoning}</p>
                      <div className="flex flex-wrap gap-2">
                        {aiRecommendation.suggestedSubjects?.map((sub: string, i: number) => (
                          <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider">{sub}</span>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="text-lg font-medium text-primary mb-4 italic">"{aiRecommendation.followUpQuestion}"</p>
                      <p className="text-xs text-gray-500">Please provide more details in the box below to help me narrow down your options.</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="relative flex-1">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">search</span>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-12 pr-4 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Search for courses..."
                type="text"
              />
            </div>
            <p className="text-sm font-medium text-gray-500 whitespace-nowrap">
              Showing <span className="text-primary font-bold">{filteredCourses.length}</span> programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCourses.map(course => (
              <div key={course.id} className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold text-primary uppercase">
                      {course.faculty}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <span className="material-symbols-outlined text-[14px] text-tertiary">schedule</span>
                      {course.duration}
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                    {course.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                    {course.description}
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                    <span className="material-symbols-outlined text-[16px] text-tertiary">verified</span>
                    APS Score Required: {course.apsScore}+
                  </div>
                  <div className="flex gap-3 pt-4 border-t border-gray-50">
                    <Link 
                      to={`/faculty/${FACULTIES.find(f => f.name === course.faculty)?.id}`}
                      className="flex-1 rounded-lg bg-gray-100 py-2 text-sm font-bold text-gray-900 hover:bg-gray-200 transition-colors text-center"
                    >
                      Details
                    </Link>
                    <Link 
                      to="/apply"
                      className="flex-1 rounded-lg bg-secondary py-2 text-sm font-bold text-white hover:brightness-110 shadow-sm shadow-secondary/20 transition-all text-center"
                    >
                      Apply
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
              <span className="material-symbols-outlined text-5xl text-gray-300 mb-4">sentiment_very_dissatisfied</span>
              <p className="text-gray-500">No courses match your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);
};
