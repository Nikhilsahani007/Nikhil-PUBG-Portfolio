import Navbar from './components/Navbar/Navbar';
import FloatingDock from './components/FloatingDock/FloatingDock';
import MissionSection from './sections/Mission/MissionSection';
import IntelSection from './sections/Intel/IntelSection';
import LoadoutSection from './sections/Loadout/LoadoutSection';
import DossierSection from './sections/Dossier/DossierSection';
import CommsSection from './sections/Comms/CommsSection';
import LogsSection from './sections/Logs/LogsSection';
import './styles/global.css';

export default function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <MissionSection />
        <IntelSection />
        <LoadoutSection />
        <DossierSection />
        <CommsSection />
        <LogsSection />
      </main>
      <FloatingDock />
    </div>
  );
}
