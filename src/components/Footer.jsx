function Footer() {
  return (
    <footer className="py-8 px-6 bg-black text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left side */}
        <div className="text-center md:text-left text-sm opacity-70">
          &copy; 2025 Traxlent™. All rights reserved.
        </div>

        {/* Right side */}
        <div className="flex items-center gap-6">
          <a href="https://instagram.com/traxlent.co" target="_blank" rel="noopener noreferrer" className="hover:text-[#F97316] transition">
            <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm4.5-2a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/>
            </svg>
          </a>
          {/* Add more icons if needed */}
          <a href="/privacy" className="hover:text-[#F97316] transition text-sm opacity-70">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-[#F97316] transition text-sm opacity-70">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
