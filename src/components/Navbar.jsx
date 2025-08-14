import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full fixed top-0 z-30 flex flex-col items-center transition-all duration-300">
      <div
        className={`w-80 max-w-3xl sm:w-full bg-gray-300 flex justify-between items-center pl-2 pr-2 sm:pl-0 rounded-full shadow-md border border-orange-300 transition-all duration-300 ease-in-out ${
          scrolled
            ? "my-1 sm:my-2 py-1 px-2"
            : "my-2 sm:my-3 py-1 px-4"
        }`}
        style={{
          transform: scrolled ? "scale(0.96)" : "scale(1)",
        }}
      >
        {/* Logo */}
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

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex text-sm font-extrabold text-black transition-all duration-300 ease-in-out ${
            scrolled ? "gap-3" : "gap-6"
          }`}
        >
          <Link to="/" className="cursor-pointer hover:text-orange-600 transition-colors"
            style={{ color: "black" }}>
            HOME
          </Link>
          <a href="/aboutus" className="cursor-pointer hover:text-orange-600 transition-colors"
            style={{ color: "black" }}>
            ABOUT
          </a>
          <Link to="/event" className="cursor-pointer hover:text-orange-600 transition-colors"
            style={{ color: "black" }}>
            EVENT
          </Link>
          <Link to="/speakers" className="cursor-pointer hover:text-orange-600 transition-colors"
            style={{ color: "black" }}>
            SPEAKERS
          </Link>
          <Link to="/team" className="cursor-pointer hover:text-orange-600 transition-colors"
            style={{ color: "black" }}>
            TEAM
          </Link>
        </div>

        {/* CTA Button */}
        <Link to="/APIconf2025" className="hidden md:block">
          <div
            className={`bg-orange-500 text-white px-4 rounded-full text-sm font-semibold cursor-pointer border-2 border-white hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 ${
              scrolled ? "py-1 text-xs" : "py-2 text-sm"
            }`}
          >
            THE API CONF 2025
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-full text-black focus:outline-none"
            style={{
              background: "none",
              border: "none",
              outline: "none",
              boxShadow: "none",
            }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="w-full max-w-3xl bg-gray-300 rounded-xl shadow-md border mx-2 border-orange-300 px-6 py-4 flex flex-col items-center text-sm font-extrabold text-black md:hidden animate-fadeIn">
          <Link to="/" className="block mb-3 hover:text-orange-600"
            style={{ color: "black" }}>
            HOME
          </Link>
          <a href="/aboutus" className="block mb-3 hover:text-orange-600"
            style={{ color: "black" }}>
            ABOUT
          </a>
          <Link to="/event" className="block mb-3 hover:text-orange-600"
            style={{ color: "black" }}>
            EVENT
          </Link>
          <Link to="/speakers" className="block mb-3 hover:text-orange-600"
            style={{ color: "black" }}>
            SPEAKERS
          </Link>
          <Link to="/team" className="block mb-4 hover:text-orange-600"
            style={{ color: "black" }}>
            TEAM
          </Link>
          <Link to="/APIconf2025">
            <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold cursor-pointer border-2 border-white hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
              THE API CONF 2025
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
