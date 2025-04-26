import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
          <div className="group relative">
            <Link to="/services" className="hover:text-[#F97316] transition">
              Services
            </Link>
            {/* Dropdown */}
            <div className="absolute hidden group-hover:flex flex-col bg-black/90 mt-2 py-2 rounded-md shadow-lg min-w-[180px] border border-white/10">
              <Link to="/reach" className="px-4 py-2 hover:bg-[#F97316] hover:text-black transition text-left">Reach</Link>
              <Link to="/voice" className="px-4 py-2 hover:bg-[#F97316] hover:text-black transition text-left">Voice</Link>
              <Link to="/build" className="px-4 py-2 hover:bg-[#F97316] hover:text-black transition text-left">Build</Link>
            </div>
          </div>

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
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-black/90 text-white text-lg">
          <Link to="/why-us" onClick={() => setIsOpen(false)} className="hover:text-[#F97316] transition">Why Us</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="hover:text-[#F97316] transition">Services Overview</Link>
          <Link to="/reach" onClick={() => setIsOpen(false)} className="hover:text-[#F97316] transition">Reach</Link>
          <Link to="/voice" onClick={() => setIsOpen(false)} className="hover:text-[#F97316] transition">Voice</Link>
          <Link to="/build" onClick={() => setIsOpen(false)} className="hover:text-[#F97316] transition">Build</Link>
          <Link
            to="/intake"
            onClick={() => setIsOpen(false)}
            className="bg-[#F97316] hover:bg-orange-500 text-black font-semibold py-2 px-6 rounded-full transition"
          >
            Start
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
