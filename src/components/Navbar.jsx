import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, PhoneCall } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import LogoIcon from './LogoIcon';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Insurance', path: '/insurance' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-warm-sm border-b border-brand-border/80 py-3'
          : 'bg-white/90 backdrop-blur-sm border-b border-brand-border/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg min-w-0"
          >
            <img
              src="/eye-logo.png"
              alt="Divyam Eye Care"
              className="h-10 w-auto xs:h-12 sm:h-14 md:h-[56px] object-contain shrink-0"
            />
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
                <span className="font-display font-bold text-base xs:text-lg sm:text-xl md:text-2xl text-dark-accent tracking-tight">
                  Divyam
                </span>
                <span className="font-display font-bold text-base xs:text-lg sm:text-xl md:text-2xl text-primary">
                  Eye Care
                </span>
              </div>
              <span className="hidden sm:block text-[10px] sm:text-xs font-medium text-brand-muted tracking-wide -mt-0.5 truncate">
                {clinicData.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-primary font-semibold shadow-sm'
                      : 'text-brand-text hover:text-primary hover:bg-primary-light'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action / CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/appointment"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary hover:bg-secondary-hover active:bg-secondary-hover text-white text-sm font-semibold shadow-md shadow-secondary/30 hover:shadow-lg hover:shadow-secondary/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <LogoIcon className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-1.5 xs:gap-2 lg:hidden shrink-0">
            <Link
              to="/appointment"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 xs:px-3 xs:py-1.5 rounded-full bg-secondary hover:bg-secondary-hover text-white text-xs font-semibold shadow-sm shrink-0 whitespace-nowrap"
            >
              <LogoIcon className="w-3.5 h-3.5" />
              <span>Book</span>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 xs:p-2 rounded-xl text-brand-text hover:text-primary hover:bg-primary-light focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5 xs:w-6 xs:h-6" /> : <Menu className="w-5 h-5 xs:w-6 xs:h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden animate-fadeIn bg-white border-b border-brand-border/80 shadow-lg px-4 pt-3 pb-6 space-y-2 mt-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-white bg-primary font-semibold shadow-sm'
                    : 'text-brand-text hover:bg-primary-light hover:text-primary'
                }`
              }
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 text-brand-subtle" />
            </NavLink>
          ))}

          <div className="pt-3 border-t border-brand-border/60">
            <Link
              to="/appointment"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-secondary hover:bg-secondary-hover text-white font-semibold text-sm shadow-md shadow-secondary/20 transition-all"
            >
              <LogoIcon className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
