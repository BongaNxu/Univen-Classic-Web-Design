
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles, ChevronDown, ExternalLink } from 'lucide-react';
import { getChatResponse } from '../services/geminiService';

interface Message {
  role: 'user' | 'model';
  text: string;
  type?: 'recommendation' | 'question' | 'info';
  recommendedField?: string;
  reasoning?: string;
  suggestedSubjects?: string[];
  links?: { label: string; url: string }[];
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: "Hello! I'm your UNIVEN AI Assistant. How can I help you today? You can ask me about courses, admissions, or campus life.",
      type: 'info'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Automatically open on first load to be "prominent"
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));
      
      const response = await getChatResponse(input, history);
      
      const botMessage: Message = {
        role: 'model',
        text: response.text,
        type: response.type,
        recommendedField: response.recommendedField,
        reasoning: response.reasoning,
        suggestedSubjects: response.suggestedSubjects,
        links: response.links
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Chatbot Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm sorry, I encountered an error. Please try again later.", type: 'info' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[calc(100vw-3rem)] md:w-[420px] h-[600px] max-h-[calc(100vh-8rem)] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">UNIVEN AI Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                    <span className="text-[10px] opacity-80 uppercase tracking-widest font-bold">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                    <div className={`p-3 rounded-2xl text-sm ${
                      msg.role === 'user' 
                        ? 'bg-primary text-white rounded-tr-none' 
                        : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
                    }`}>
                      {msg.text}
                      
                      {msg.type === 'recommendation' && (
                        <div className="mt-3 p-3 bg-tertiary/10 border border-tertiary/20 rounded-xl text-primary">
                          <div className="flex items-center gap-2 mb-1">
                            <Sparkles size={14} className="text-tertiary" />
                            <span className="font-bold text-xs uppercase tracking-wider">Recommendation</span>
                          </div>
                          <p className="font-black text-sm mb-1">{msg.recommendedField}</p>
                          <p className="text-xs opacity-80 mb-2">{msg.reasoning}</p>
                          {msg.suggestedSubjects && (
                            <div className="flex flex-wrap gap-1">
                              {msg.suggestedSubjects.map((s, i) => (
                                <span key={i} className="px-2 py-0.5 bg-white/50 rounded text-[9px] font-bold">{s}</span>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {msg.links && msg.links.length > 0 && (
                        <div className="mt-3 space-y-2">
                          {msg.links.map((link, i) => (
                            <a 
                              key={i} 
                              href={link.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center justify-between p-2 bg-primary/5 hover:bg-primary/10 rounded-lg text-primary text-xs font-bold transition-colors"
                            >
                              {link.label}
                              <ExternalLink size={12} />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                    <span className="text-[9px] text-gray-400 mt-1 px-1 uppercase font-bold tracking-tighter">
                      {msg.role === 'user' ? 'You' : 'UNIVEN AI'}
                    </span>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 flex gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-gray-50 border-none rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:brightness-110 disabled:opacity-50 transition-all shadow-lg shadow-primary/20"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all ${
          isOpen ? 'bg-white text-primary' : 'bg-primary text-white'
        }`}
      >
        {isOpen ? <ChevronDown size={32} /> : <MessageSquare size={32} />}
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-secondary text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white"
          >
            1
          </motion.div>
        )}
      </motion.button>
    </div>
  );
};
