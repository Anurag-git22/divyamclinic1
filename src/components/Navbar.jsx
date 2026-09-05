import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, PhoneCall, ChevronRight } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function Navbar({ onBookClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Insurance', href: '#insurance' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-bg/95 backdrop-blur-md shadow-warm-sm border-b border-brand-border/60 py-3'
          : 'bg-brand-bg/90 backdrop-blur-sm border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center text-white shadow-md shadow-primary/20 group-hover:scale-105 transition-transform duration-200">
              {/* Custom Medical Eye SVG */}
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-xl sm:text-2xl text-dark-accent tracking-tight">
                  Divyam
                </span>
                <span className="font-display font-semibold text-xl sm:text-2xl text-primary">
                  Eye Care
                </span>
              </div>
              <span className="text-[11px] sm:text-xs font-medium text-brand-muted tracking-wide -mt-0.5">
                {clinicData.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-brand-text hover:text-primary hover:bg-secondary-light/40 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#appointment"
              onClick={(e) => {
                e.preventDefault();
                if (onBookClick) onBookClick();
                document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-semibold shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#appointment"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors sm:hidden"
              aria-label="Book Appointment"
            >
              <Calendar className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-dark-accent hover:text-primary hover:bg-secondary-light/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-5 border-t border-brand-border/70 animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="flex items-center justify-between px-4 py-2.5 rounded-xl text-base font-medium text-brand-text hover:bg-secondary-light/50 hover:text-primary transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-brand-muted" />
                </a>
              ))}
              <div className="pt-3 px-2">
                <a
                  href="#appointment"
                  onClick={(e) => {
                    handleLinkClick(e, '#appointment');
                    if (onBookClick) onBookClick();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white text-base font-semibold shadow-md shadow-primary/25 transition-all"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
