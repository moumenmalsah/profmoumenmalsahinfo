/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Resources from './components/Resources';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import TeacherBtn from './components/TeacherBtn';
import TeacherPanel from './components/TeacherPanel';

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Resources />
        <Portfolio />
        <Timeline />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <TeacherBtn />
    </>
  );
}

export default function App() {
  return (
    <div className="relative antialiased selection:bg-brand-primary selection:text-white">
      <ScrollProgress />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teacher" element={<TeacherPanel />} />
      </Routes>
    </div>
  );
}
