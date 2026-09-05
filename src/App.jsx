import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import AboutDoctor from './components/AboutDoctor';
import Services from './components/Services';
import Insurance from './components/Insurance';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import AppointmentForm from './components/AppointmentForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState('');

  const handleSelectService = (serviceName) => {
    setSelectedService(serviceName);
  };

  const handleBookClick = () => {
    // Keep or clear service depending on user intent
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-text font-sans antialiased selection:bg-primary-soft selection:text-primary">
      {/* A. Sticky Responsive Navbar */}
      <Navbar onBookClick={handleBookClick} />

      <main className="flex-grow">
        {/* B. Hero Section */}
        <Hero
          onBookClick={handleBookClick}
          onExploreServices={() => {}}
        />

        {/* C. Why Choose Divyam Eye Care? */}
        <WhyChooseUs />

        {/* D. About the Doctor */}
        <AboutDoctor onBookClick={handleBookClick} />

        {/* E. Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* F. Insurance / Cashless Partners */}
        <Insurance />

        {/* G. Gallery Section */}
        <Gallery />

        {/* H. Reviews / Trust Section */}
        <Reviews />

        {/* I. Appointment Section */}
        <AppointmentForm
          preselectedReason={selectedService}
          onClearPreselected={() => setSelectedService('')}
        />

        {/* J. Contact & Location Section */}
        <Contact onBookClick={handleBookClick} />
      </main>

      {/* K. Footer */}
      <Footer />
    </div>
  );
}
