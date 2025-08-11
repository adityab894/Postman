import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  }, [location]);

  return (
    <div className="w-full fixed top-0 z-30 bg-white flex flex-col items-center">
      <div className="w-80 max-w-3xl sm:w-full bg-gray-300 flex justify-between items-center pl-0 pr-2 sm:pl-0 sm:pr-4 md:pl-0 md:pr-6 my-2 sm:my-3 rounded-full shadow-md border border-orange-300 transition-all duration-300">
        <div className="flex items-center flex-shrink-0">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-12 sm:h-14 sm:w-14 object-contain border-white border-2 rounded-full"
            />
          </Link>
        </div>

        <div className="hidden md:flex gap-4 lg:gap-6 text-sm font-extrabold text-black">
          <Link
            to="/"
            className="cursor-pointer hover:text-orange-600 transition-colors"
            style={{ color: "black" }}
          >
            HOME
          </Link>
          <a
            href="/aboutus"
            className="cursor-pointer hover:text-orange-600 transition-colors"
            style={{ color: "black" }}
          >
            ABOUT
          </a>
          <Link
            to="/event"
            className="cursor-pointer hover:text-orange-600 transition-colors"
            style={{ color: "black" }}
          >
            EVENT
          </Link>
          <Link
            to="/speakers"
            className="cursor-pointer hover:text-orange-600 transition-colors"
            style={{ color: "black" }}
          >
            SPEAKERS
          </Link>
          <Link
            to="/team"
            className="cursor-pointer hover:text-orange-600 transition-colors"
            style={{ color: "black" }}
          >
            TEAM
          </Link>
        </div>

        <Link to="/APIconf2025" className="hidden md:block">
          <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold cursor-pointer border-2 border-white hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
            THE API CONF 2025
          </div>
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-full text-black focus:outline-none focus:ring-0 active:outline-none active:ring-0 border-none"
            style={{
              border: "none",
              outline: "none",
              boxShadow: "none",
              background: "none",
            }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="w-full max-w-3xl bg-gray-300 rounded-xl shadow-md border mx-2 border-orange-300 px-6 py-4 flex flex-col items-center text-sm font-extrabold text-black md:hidden animate-fadeIn">
          <Link
            to="/"
            className="block mb-3 hover:text-orange-600 transition-colors"
            style={{ color: "black" }}
          >
            HOME
          </Link>
          <a
            href="/aboutus"
            className="block mb-3 hover:text-orange-600 transition-colors"
            style={{ color: "black" }}
          >
            ABOUT
          </a>
          <Link
            to="/event"
            className="block mb-3 hover:text-orange-600 transition-colors"
            style={{ color: "black" }}
          >
            EVENT
          </Link>
          <Link
            to="/speakers"
            className="block mb-3 hover:text-orange-600 transition-colors"
            style={{ color: "black" }}
          >
            SPEAKERS
          </Link>
          <Link
            to="/team"
            className="block mb-4 hover:text-orange-600 transition-colors"
            style={{ color: "black" }}
          >
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