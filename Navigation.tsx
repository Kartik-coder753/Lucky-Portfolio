
import { useState } from 'react';
import Button from '../base/Button';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              VR Portfolio
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('profile')}
                className="text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer"
              >
                Profile
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-purple-400 cursor-pointer"
            >
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-black/20 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('home')}
              className="block px-3 py-2 text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer w-full text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('profile')}
              className="block px-3 py-2 text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer w-full text-left"
            >
              Profile
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block px-3 py-2 text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer w-full text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="block px-3 py-2 text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer w-full text-left"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="block px-3 py-2 text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer w-full text-left"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block px-3 py-2 text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
