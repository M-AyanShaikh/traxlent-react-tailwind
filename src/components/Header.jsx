// src/components/Header.jsx

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="backdrop-blur-sm bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="transition-transform transform hover:scale-105">
          <img
            src="/logo.png"
            alt="Traxlent Logo"
            className="h-14 md:h-16 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-white text-sm md:text-base font-medium relative">
          {/* Why Us */}
          <Link to="/why-us" className="hover:text-[#F97316] transition">
            Why Us
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link to="/services" className="hover:text-[#F97316] transition">
              Services
            </Link>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 flex flex-col bg-black/90 py-3 rounded-xl shadow-lg min-w-[200px] border border-white/10"
                >
                  <Link to="/reach" className="px-6 py-2 text-left hover:bg-[#F97316] hover:text-black transition">Reach</Link>
                  <Link to="/voice" className="px-6 py-2 text-left hover:bg-[#F97316] hover:text-black transition">Voice</Link>
                  <Link to="/build" className="px-6 py-2 text-left hover:bg-[#F97316] hover:text-black transition">Build</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Insights */}
          <Link to="/blog" className="hover:text-[#F97316] transition">
            Insights
          </Link>

          {/* CTA Button */}
          <Link
            to="/intake"
            className="bg-[#F97316] hover:bg-orange-500 text-black font-semibold px-5 py-2 rounded-full transition"
          >
            Start
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col items-center gap-6 py-6 bg-black/90 text-white text-lg overflow-hidden"
          >
            <Link to="/why-us" onClick={() => setIsOpen(false)} className="hover:text-[#F97316] transition">Why Us</Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className="hover:text-[#F97316] transition">Services Overview</Link>
            <Link to="/reach" onClick={() => setIsOpen(false)} className="hover:text-[#F97316] transition">Reach</Link>
            <Link to="/voice" onClick={() => setIsOpen(false)} className="hover:text-[#F97316] transition">Voice</Link>
            <Link to="/build" onClick={() => setIsOpen(false)} className="hover:text-[#F97316] transition">Build</Link>
            <Link to="/blog" onClick={() => setIsOpen(false)} className="hover:text-[#F97316] transition">Insights</Link>
            <Link
              to="/intake"
              onClick={() => setIsOpen(false)}
              className="bg-[#F97316] hover:bg-orange-500 text-black font-semibold py-2 px-6 rounded-full transition"
            >
              Start
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
