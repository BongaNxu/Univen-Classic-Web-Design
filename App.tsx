
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Academics } from './pages/Academics';
import { Admissions } from './pages/Admissions';
import { About } from './pages/About';
import { Research } from './pages/Research';
import { Library } from './pages/Library';
import { News } from './pages/News';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { FacultyDetail } from './pages/FacultyDetail';
import { DepartmentDetail } from './pages/DepartmentDetail';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/apply" element={<Admissions />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/library" element={<Library />} />
          <Route path="/news" element={<News />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faculty/:id" element={<FacultyDetail />} />
          <Route path="/faculty/:facultyId/department/:deptId" element={<DepartmentDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
