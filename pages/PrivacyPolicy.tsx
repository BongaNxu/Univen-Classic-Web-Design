
import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-primary/10 p-4 rounded-2xl">
              <Shield className="text-primary" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-black text-primary">Privacy & Cookie Policy</h1>
              <p className="text-gray-500 font-medium">Last updated: April 2026</p>
            </div>
          </div>

          <div className="prose prose-blue max-w-none space-y-8 text-gray-600">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-4">
                <Eye className="text-secondary" size={24} />
                1. Introduction
              </h2>
              <p>
                The University of Venda ("we", "us", or "our") respects your privacy and is committed to protecting your personal data. This policy explains how we use cookies and similar technologies on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-4">
                <FileText className="text-secondary" size={24} />
                2. What are Cookies?
              </h2>
              <p>
                Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-4">
                <Lock className="text-secondary" size={24} />
                3. How we use Cookies
              </h2>
              <p>
                We use cookies for several reasons:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website.</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings.</li>
                <li><strong>Security Cookies:</strong> Help identify and prevent security risks.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Managing Cookies</h2>
              <p>
                Most web browsers allow you to control cookies through their settings. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience.
              </p>
            </section>

            <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about our use of cookies or this policy, please contact us at:
              </p>
              <div className="font-bold text-primary">
                <p>University of Venda Information Office</p>
                <p>Email: privacy@univen.ac.za</p>
                <p>Phone: +27 15 962 8000</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
