// src/components/APINavbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from '../../assets/logo.png'

function APINavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "/APIconf2025" },
    { name: "Speakers", to: "/APIconf2025/speakers" },
    { name: "Sponsors", to: "/APIconf2025/sponsors" },
    { name: "Team", to: "/APIconf2025/team" },
    { name: "FAQ", to: "/APIconf2025/faq" },
    { name: "Agenda", to: "/APIconf2025/agenda" },
  ];

  return (
    <nav
      className={`w-full fixed top-0 z-30 flex flex-col items-center transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="w-80 max-w-lg sm:w-full bg-gray-300 flex justify-between items-center gap-2 pr-2 sm:pl-0 rounded-full shadow-md border border-orange-300 transition-all duration-300 ease-in-out">
        <div className="flex items-center flex-shrink-0">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img
              src={logo}
              alt="Logo"
              className={`object-contain border-white border-2 rounded-full transition-all duration-300 ease-in-out ${
                scrolled
                  ? "h-8 w-8 sm:h-10 sm:w-10"
                  : "h-12 w-12 sm:h-14 sm:w-14"
              }`}
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="cursor-pointer hover:text-orange-600 transition-colors"
              style={{ color: "black", fontWeight: "normal" }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-full"
            style={{
              border: "none",
              focus: "none",
              outline: "none"
            }}
          >
            {menuOpen ? <X size={24} className="text-black"/> : <Menu size={24} className="text-black"/>}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4 font-semibold text-gray-800">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:text-orange-600"
              style={{ color: "black", fontWeight: "normal" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default APINavbar;
