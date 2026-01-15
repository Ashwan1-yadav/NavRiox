import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assests/logo.png";

const Menu = ({ className = "", size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const X = ({ className = "", size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export const Navbar5 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 w-full z-50 border-b border-gray-800/50 bg-black/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-white overflow-hidden flex justify-center items-center">
            <Link to="/">
              <img src={logo} alt="logo" className="h-10 w-auto" />
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link 
              to="/"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              to="/getintouch"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Get In Touch
            </Link>
            <Link
              to="/contact"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/about"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              About
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              asChild
              size="sm"
              variant="outline"
              className="border-black/20 text-black hover:bg-white hover:text-black"
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800/50 animate-[slideDown_0.3s_ease-out]">
          <div className="px-6 py-4 flex flex-col gap-4">
          <Link onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              to="/"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              to="/services"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              to="/getintouch"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Get In Touch
            </Link>
            <Link onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              to="/contact"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Contact Us
            </Link>
            <Link onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              to="/about"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              About
            </Link>
            <div className="flex flex-col gap-2 pt-4 border-t border-gray-800/50">
            <Button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              asChild
              size="sm"
              variant="outline"
              className="border-black/20 text-black hover:bg-white hover:text-black"
            >
              <Link to="/contact">Get Started</Link>
            </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
