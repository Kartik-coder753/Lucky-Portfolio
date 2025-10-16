
import { useState, useEffect } from 'react';
import Button from '../../../components/base/Button';

export default function HeroSection() {
  const [currentText, setCurrentText] = useState(0);
  const texts = ['VR Developer', 'Game Developer', 'Unity Developer', 'XR Enthusiast'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Futuristic%20virtual%20reality%20environment%20with%20neon%20purple%20and%20cyan%20lights%2C%20digital%20particles%20floating%20in%20space%2C%20holographic%20interfaces%2C%20cyberpunk%20aesthetic%2C%20immersive%20VR%20world%20with%20glowing%20geometric%20shapes%20and%20data%20streams%2C%20high-tech%20laboratory%20setting%20with%20VR%20headsets%20and%20advanced%20technology%2C%20modern%20minimalist%20design%20with%20vibrant%20colors&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-black/60 to-cyan-900/80"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            Lucky Kumar
          </h1>
          <div className="text-2xl md:text-4xl text-white mb-8 h-12 flex items-center justify-center">
            <span className="mr-4">I'm a</span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-bold transition-all duration-500 transform">
              {texts[currentText]}
            </span>
          </div>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Computer Science student at VIT Bhopal specializing in Gaming Technology. Passionate about creating immersive VR/AR experiences and innovative game development solutions.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            onClick={() => scrollToSection('projects')}
            className="transform hover:rotate-1 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            <i className="ri-rocket-line mr-2"></i>
            View My Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="transform hover:-rotate-1 hover:shadow-2xl hover:shadow-cyan-500/25"
          >
            <i className="ri-mail-line mr-2"></i>
            Get In Touch
          </Button>
        </div>
        
        <div className="mt-16 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white/70 hover:text-white transition-colors duration-300 cursor-pointer"
          >
            <i className="ri-arrow-down-line text-3xl"></i>
          </button>
        </div>
      </div>
      
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
    </section>
  );
}
