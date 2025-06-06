import React from "react";
import logo from "../assets/logo.png";
import footerSvg from "../assets/footer.svg";
import { Link } from "react-router-dom";
import Wave from 'react-wavify'
import { Linkedin, Instagram, Github } from 'lucide-react';

const Footer = () => (
  <footer className="w-full relative overflow-hidden text-black">
    <div className="absolute inset-0">
      <Wave 
        fill='#DBEAFE'
        paused={false}
        style={{ display: 'flex', width: '100%', height: '100%', position: 'absolute', top: 0 }}
        options={{
          height: 20,
          amplitude: 20,
          points: 3
        }}
      />
    </div>
    <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-between">
      <div className="w-full flex flex-col md:flex-row flex-wrap items-center md:items-start justify-between text-center md:text-left pt-16 pb-6 gap-2">
        <div className="max-w-xs mb-8 md:mb-0">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <img src={logo} alt="Postman Logo" className="w-10 h-10" />
            <h2 className="text-xl font-bold">Postman Community Pune</h2>
          </div>
          <p className="text-sm font-semibold">
            A vibrant community of API enthusiasts in Pune, dedicated to
            knowledge sharing, collaboration, and advancing the API ecosystem.
          </p>
        </div>

        <div className="mb-8 md:mb-0 gap-10">
          <h3 className="text-2xl font-bold mb-3">Quick Links</h3>
          <div className="flex flex-col gap-1">
            <Link to="/" className="text-sm font-semibold hover:underline" style={{color: 'black'}}>Home</Link>
            <Link to="/speakers" className="text-sm font-semibold hover:underline" style={{color: 'black'}}>Speakers</Link>
            <Link to="/aboutus" className="text-sm font-semibold hover:underline" style={{color: 'black'}}>About</Link>
            <Link to="/lastPage" className="text-sm font-semibold hover:underline" style={{color: 'black'}}>Community Day</Link>
            <Link to="/team" className="text-sm font-semibold hover:underline" style={{color: 'black'}}>Team</Link>
            <Link to="/team" className="text-sm font-semibold hover:underline" style={{color: 'black'}}>Contact Us</Link>
          </div>
        </div>

        <div className="flex flex-col flex-center items-center sm:items-start">
          <h3 className="text-2xl font-bold mb-3">Connect with us</h3>
          <div className="w-25 flex flex-col gap-4">
            <div className="flex flex-row gap-2 cursor-pointer" onClick={() => window.open('https://github.com/postmanapipune', '_blank')}>
              <Github  />
              <p>Github</p>
            </div>
            <div className="flex flex-row gap-2 cursor-pointer" onClick={() => window.open('https://www.instagram.com/postman_pune/?hl=en/', '_blank')}>
              <Instagram />
              <p>Instagram</p>
            </div>
            <div className="flex flex-row gap-2 cursor-pointer" onClick={() => window.open('https://www.linkedin.com/company/postmanapipune/posts/?feedView=all', '_blank')}>
              <Linkedin />
              <p>LinkedIn</p>
            </div>
          </div>
        </div>

        <div className="hidden md:block relative">
          <img 
            src={footerSvg} 
            alt="Footer decoration" 
            className="w-50 h-50"
          />
        </div>
      </div>
      
      <div className="w-full mt-auto border-t-1 border-gray-300">
        <div className="text-center text-sm py-4">
          © {new Date().getFullYear()} Postman Community Pune. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
