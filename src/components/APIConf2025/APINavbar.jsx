// src/components/APINavbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

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
      <div className="w-80 max-w-3xl sm:w-full bg-gray-300 flex justify-between items-center gap-20 pl-2 pr-2 sm:pl-0 rounded-full shadow-md border border-orange-300 transition-all duration-300 ease-in-out">
        <Link to="/APIconf2025" className="flex items-center gap-2">
          <img
            src=""
            alt="Conference Logo"
            className={`rounded-full border-2 border-white transition-all duration-300 ${
              scrolled ? "h-10 w-10" : "h-12 w-12"
            }`}
          />
          <span className="font-bold text-lg text-orange-600 hidden sm:inline">
            API Conf 2025
          </span>
        </Link>

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
