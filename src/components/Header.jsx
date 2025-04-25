import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="backdrop-blur-sm bg-black/80 shadow-md sticky top-0 z-50">
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
        <nav className="hidden md:flex items-center gap-8 text-white text-sm md:text-base font-medium">
          {['reach', 'voice', 'build'].map((page) => (
            <Link
              key={page}
              to={`/${page}`}
              className="relative group transition"
            >
              <span className="group-hover:text-[#F97316] transition">
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F97316] group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
          <Link
            to="/intake"
            className="bg-[#F97316] hover:bg-orange-500 text-black font-semibold px-5 py-2 rounded-full transition"
          >
            Start
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white mb-1 transition ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white mb-1 transition ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-black/90 text-white text-lg">
          {['reach', 'voice', 'build', 'intake'].map((page) => (
            <Link
              key={page}
              to={`/${page}`}
              onClick={() => setIsOpen(false)}
              className="hover:text-[#F97316] transition"
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
