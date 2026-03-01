import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import StructuredData from './components/StructuredData/StructuredData';
import { AutoBreadcrumb } from './components/StructuredData/BreadcrumbSchema';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';
import Resume from './pages/Resume/Resume';
import Contact from './pages/Contact/Contact';
import { BlogList, BlogPost } from './pages/Blog/Blog';
import './styles/global.css';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        {/* Site-wide JSON-LD structured data */}
        <StructuredData />
        {/* Auto breadcrumb based on current route */}
        <AutoBreadcrumb />

        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
