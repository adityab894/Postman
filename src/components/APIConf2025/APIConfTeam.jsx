import React from "react";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import alisha from '../../assets/team/alisha.jpg';
import shrawan from '../../assets/team/shrawan.jpg';
import aditya from '../../assets/team/aditya.JPG';
import alice from '../../assets/team/alice.jpg';
import aman from '../../assets/team/aman.jpeg';
import atharva from '../../assets/team/atharva.jpg';
import eric from '../../assets/team/eric.jpeg';
import kunal from '../../assets/team/kunal.JPG';
import mayuri from '../../assets/team/mayuri.jpeg';
import namrata from '../../assets/team/namrata.jpg';
import nikhil from '../../assets/team/nikhil.webp';
import nilanjan from '../../assets/team/nilanjan.jpeg';
import rutuja from '../../assets/team/rutuja.jpeg';
import sachin from '../../assets/team/sachin.jpg';
import suresh from '../../assets/team/suresh.jpg'; 
import arjun from '../../assets/team/arjun.jpg';
import APINavbar from "./APINavbar";



const APIConfTeam = () => {
  const speakers = [
    {
      image: shrawan,
      name: "SHRAWAN SAPROO",
      role: "ORGANIZER",
      twitter: "https://x.com/SaprooShrawan",
      linkedin: "https://www.linkedin.com/in/shrawan513/",
      instagram: "https://www.instagram.com/shrawansaproo/",
    },
    {
      image: aditya,
      name: "ADITYA BISHT",
      role: "CO-ORGANIZER",
      twitter: "https://x.com/adityab894",
      linkedin: "https://www.linkedin.com/in/aditya894/",
      instagram: "https://www.instagram.com/aditya__894/",
    },
    {
      image: nilanjan,
      name: "NILANJAN PAUL",
      role: "TECHNICAL LEAD",
      // twitter: "",
      linkedin: "https://www.linkedin.com/in/nilanjan-paul21/",
      instagram: "https://www.instagram.com/_nilu343/",
    },
    {
      image: eric,
      name: "ERIC FERNANDIS",
      role: "SUPPORT MANAGER",  
      // twitter: "",
      linkedin: "https://www.linkedin.com/in/ericfernandes1681/",
      instagram: "https://www.instagram.com/eric.fernandes11/",
    },
    {
      image: atharva,
      name: "ATHARVA WANI",
      role: "DESIGNER",
      // twitter: "",
      linkedin: "https://www.linkedin.com/in/waniatharva/",
      instagram: "https://www.instagram.com/atharvawani___/",
    },
    {
      image: kunal,
      name: "KUNAL GAVIT",
      role: "SOCIAL MEDIA",
      twitter: "https://x.com/KunalGavit10/",
      linkedin: "https://www.linkedin.com/in/kunal-gavit-1504gk/",
      instagram: "https://www.instagram.com/kunaaaal.gb04/",
    },
    {
      image: suresh,
      name: "SURESH CHAUDHARY",
      role: "CREATIVE HEAD",
      twitter: "https://x.com/suracechoudhary",
      linkedin: "https://www.linkedin.com/in/sschoudhary30/",
      instagram: "https://www.instagram.com/su.race0/",
    },
    {
      image: alisha,
      name: "ALISHA SAPKAL",
      role: "DEVELOPER",
      // twitter: "",
      linkedin: "https://www.linkedin.com/in/alisha-sapkal/",
      instagram: "https://www.instagram.com/alisha_s_18/",
    },
    {
      image: aman,
      name: "AMAN MOGAL",
      role: "SPONSORSHIP",
      twitter: "https://x.com/Aman25m",
      linkedin: "https://www.linkedin.com/in/aman-mogal-b7773b246/",
      instagram: "",
    },
    {
      image: alice,
      name: "ALICE CHAUHAN",
      role: "SOCIAL MEDIA",
      // twitter: "",
      linkedin: "https://www.linkedin.com/in/alice-chauhan-661305288/",
      instagram: "https://www.instagram.com/alicechauhan28/",
    },
    {
      image: nikhil,
      name: "NIKHIL RAJPUROHIT",
      role: "SPONSORSHIP",
      // twitter: "",
      linkedin: "https://www.linkedin.com/in/nikhil-rajpurohit-05b39734a/",
      instagram: "https://www.instagram.com/nick.ipynb/",
    },
    {
      image: namrata,
      name: "NAMRATA",
      role: "DESIGNER",
      linkedin: "https://www.linkedin.com/in/namrata-bhalerao-66417a244/",
      instagram:"https://www.instagram.com/yayynammmrata/",
    },
    {
      image: arjun,
      name: "ARJUN KHADSE",
      role: "MANAGEMENT",
      twitter: "https://x.com/3devArjun",
      linkedin: "https://www.linkedin.com/in/arjunkh/",
      instagram: "https://www.instagram.com/arjunpatil5047",
    },
    {
      image: sachin,
      name: "SACHIN PARIHAR",
      role: "Designer",
      twitter: "https://x.com/Sheenu_exe",
      linkedin: "https://www.linkedin.com/in/sachin-parihar-008180264/",
      instagram: "https://www.instagram.com/sachinn.js/",
    },
    // {
    //   image: mayuri,
    //   name: "MAYURI SURYAWANSHI",
    //   role: "MANAGEMENT",
    //   // twitter: "",
    //   linkedin: "https://www.linkedin.com/in/mayuri-suryawanshi-aab3a9290/",
    //   instagram: "https://www.instagram.com/mayuri._.50/",
    // },
    // {
    //   image: rutuja,
    //   name: "RUTUJA CHAUDHARI",
    //   role: "MANAGEMENT",
    //   // twitter: "",
    //   linkedin: "https://www.linkedin.com/in/rutuja-chaudhari-5529232a4/",
    //   instagram: "https://www.instagram.com/rutujachaudhari_19/",
    // },
  ];

  const firstTwo = speakers.slice(0, 2);
  const remainingSpeakers = speakers.slice(2);

  return (
    <div className="relative w-screen min-h-screen bg-white overflow-hidden">
        <APINavbar />
      {/* <GridBackground /> */}
      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto my-20 flex flex-col items-center justify-center">
        <h2 className="text-4xl text-black font-bold text-center mb-12 uppercase border-b-2 border-black pb-4">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8 justify-items-center">
          {firstTwo.map((speaker, index) => (
            <div key={index} className="bg-white w-90 h-100 p-6 rounded-lg">
              <div className="text-center space-y-4">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-40 h-40 rounded-full mx-auto object-cover border-2 border-dashed p-2 border-black custom-dashed-border"
                />
                <h3 className="text-xl text-black font-bold uppercase">
                  {speaker.name}
                </h3>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500">
                    {speaker.role}
                  </p>
                  <div className="flex flex-row items-start justify-center gap-2">
                    <a
                      href={speaker.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiTwitter className="w-5 h-5 text-gray-500 hover:text-gray-600" />
                    </a>
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiOutlineLinkedin className="w-5 h-5 text-gray-500 hover:text-gray-600" />
                    </a>
                    <a
                      href={speaker.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="w-5 h-5 text-gray-500 hover:text-gray-600" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
          {remainingSpeakers.map((speaker, index) => (
            <div
              key={index + firstTwo.length}
              className="bg-white w-90 h-100 p-6 rounded-lg"
            >
              <div className="text-center space-y-4">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-40 h-40 rounded-full mx-auto object-cover border-2 border-dashed p-2 border-black custom-dashed-border"
                />
                <h3 className="text-xl text-black font-bold uppercase">
                  {speaker.name}
                </h3>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500">
                    {speaker.role}
                  </p>
                  <div className="flex flex-row items-start justify-center gap-2">
                    <a
                      href={speaker.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiTwitter className="w-5 h-5 text-gray-500 hover:text-gray-600" />
                    </a>
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiOutlineLinkedin className="w-5 h-5 text-gray-500 hover:text-gray-600" />
                    </a>
                    <a
                      href={speaker.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="w-5 h-5 text-gray-500 hover:text-gray-600" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default APIConfTeam;
