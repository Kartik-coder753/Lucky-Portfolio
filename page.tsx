
import Navigation from '../../components/feature/Navigation';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import ProfileSection from './components/ProfileSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import RecognitionSection from './components/RecognitionSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />
      <ProfileSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <RecognitionSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
