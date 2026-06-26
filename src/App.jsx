import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Gallery from './components/Gallery';
import InstagramFeed from './components/InstagramFeed';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AirflowVastuChakra from './components/AirflowVastuChakra';
import AboutPage from './Pages/AboutPage';
import ServicesPage from './Pages/ServicesPage';
import GalleryPage from './Pages/GalleryPage';
import BlogPage from './Pages/BlogPage';
import ContactPage from './Pages/ContactPage';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <AirflowVastuChakra />
      <Process />
      <Gallery limit={6} />
      <InstagramFeed />
      <Testimonials />
      <Blog limit={3} />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
