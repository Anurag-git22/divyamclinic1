import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';

// Multi-page route components
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import InsurancePage from './pages/InsurancePage';
import GalleryPage from './pages/GalleryPage';
import AppointmentPage from './pages/AppointmentPage';
import ContactPage from './pages/ContactPage';
import SocietyPage from './pages/SocietyPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-brand-bg text-brand-text font-sans antialiased selection:bg-primary-soft selection:text-primary">
        {/* Responsive Navbar */}
        <Navbar />

        {/* Multi-Page Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/insurance" element={<InsurancePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/society" element={<SocietyPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* WhatsApp Floating Button */}
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}
