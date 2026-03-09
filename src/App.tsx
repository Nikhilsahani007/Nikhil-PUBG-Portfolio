import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import FloatingDock from './components/FloatingDock/FloatingDock';
import Footer from './components/Footer/Footer';
import StructuredData from './components/StructuredData/StructuredData';
import MetaTags from './components/MetaTags/MetaTags';
import MissionSection from './sections/Mission/MissionSection';
import IntelSection from './sections/Intel/IntelSection';
import LoadoutSection from './sections/Loadout/LoadoutSection';
import DossierSection from './sections/Dossier/DossierSection';
import CommsSection from './sections/Comms/CommsSection';
import LogsSection from './sections/Logs/LogsSection';
import './styles/global.css';

export default function App() {
  return (
    <ThemeProvider>
      <StructuredData />
      <MetaTags
        title="Nikhil Sahani | Full Stack MERN &amp; Java Developer"
        description="Full Stack Developer specializing in MERN stack and Java backend development. Founder of NS SiteCraft Solutions with real-world project experience. Available for freelance and full-time roles in India."
        keywords="Nikhil Sahani, Software Developer India, Full Stack Developer India, MERN Stack Developer, Java Backend Developer, React Developer, Node.js Developer, Freelance Web Developer India, NS SiteCraft Solutions"
        canonical="https://nikhilsahani.vercel.app/"
      />
      <div className="app-root">
        <Navbar />
        <main id="main-content" aria-label="Portfolio content">
          <MissionSection />
          <IntelSection />
          <LoadoutSection />
          <DossierSection />
          <CommsSection />
          <LogsSection />
        </main>
        <Footer />
        <FloatingDock />
      </div>
    </ThemeProvider>
  );
}
