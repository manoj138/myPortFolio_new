import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { GitHubStats } from './components/sections/GitHubStats';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { Toast } from './components/ui/Toast';
import { BackgroundMernIcons } from './components/ui/BackgroundMernIcons';

export function App() {
  const { theme, toggleTheme } = useTheme();
  const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'profiles', 'contact'];
  const activeSection = useActiveSection(sectionIds, 120);

  const [toast, setToast] = useState({ message: '', type: 'success' });

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast({ message: '', type: 'success' });
    }, 3200);
  };

  return (
    <div className="relative min-h-screen bg-[#0f100e] dark:bg-[#0f100e] light:bg-[#f6f6f1] text-[#f3f3eb] dark:text-[#f3f3eb] light:text-[#181a16] transition-colors duration-300 overflow-x-hidden">
      
      {/* Floating Ambient MERN Stack Background Watermarks */}
      <BackgroundMernIcons />

      {/* Navigation */}
      <Navbar
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onShowToast={showToast} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <GitHubStats />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Toast Feedback */}
      {toast.message && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ message: '', type: 'success' })}
        />
      )}
    </div>
  );
}

export default App;
