import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import man from "../assets/man.jpg";
import rohan from "../assets/speakers/rohan.jpg";
import arun from "../assets/speakers/arun.jpg";
import nayan from "../assets/speakers/nayan.jpg";
import akanksha from "../assets/speakers/akanksha.jpg";  
import shweta from "../assets/speakers/shweta.jpg"; 
import ganesh from "../assets/speakers/ganesh.jpg";
import pawan from "../assets/speakers/pawan.jpg";
import nikhil from "../assets/speakers/nikhil.jpg";
import asit from "../assets/speakers/asit.jpg";

const Speakers = () => {
  const speakers = [
    {
      image: rohan,
      name: "Rohan Khamkar",
      role: "Senior Solutions Architect",
      linkedin: "https://www.linkedin.com/in/rohankhamkar/",
    },
    {
      image: arun,
      name: "Arun Nair",
      role: "Senior Solutions Architect",
      linkedin: "https://www.linkedin.com/in/arun-nair-6454585a/",
    },
    {
      image: nayan,
      name: "Nayan Chandak",
      role: "Data Scientist",
      linkedin: "https://www.linkedin.com/in/nayan-chandak/",
    },
    {
      image: akanksha,
      name: "Akanksha Kapoor",
      role: "Customer Success Lead",
      linkedin: "https://www.linkedin.com/in/akanksha-kapoor-545695119/",
    },
    { image: ganesh, 
      name: "Ganesh Divekar",
      role: "Android Developer", 
      linkedin: "https://www.linkedin.com/in/ganesh-divekar-96a72bb7/" },
    {
      image: pawan,
      name: "Pawan Shirke",
      role: "Network Engineer",
      linkedin: "https://www.linkedin.com/in/pawan-shirke/",
    },
    {
      image: shweta,
      name: "Shweta Saraswat",
      role: "Team Lead- Cloud Engineer",
      linkedin: "https://www.linkedin.com/in/shwe/",
    },
    {
      image: nikhil,
      name: "Nikhil Pathak",
      role: "Senior Engineer",
      linkedin: "https://www.linkedin.com/in/nikhil-pathak/",
    },
    {
      image: asit,
      name: "Asit Sonawane",
      role: "DevOps Engineer",
      linkedin: "https://www.linkedin.com/in/asit-sonawane/",
    },
  ];

  return (
    <section className=" w-screen bg-white py-12 px-4 md:px-8 mt-6">
      <div className="relative min-h-screen overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto my-5">
          <h2 className="text-4xl text-black font-bold text-center mb-12 uppercase border-b-2 border-black pb-4">
            Speakers
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-center">
            {speakers.map((speaker, index) => (
              <div key={index} className="bg-white w-80 p-6 rounded-lg">
                <div className="text-center space-y-4">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-35 h-35 rounded-full mx-auto object-cover border-2 border-dashed p-2 border-black"
                  />
                  <h3 className="text-2xl text-black font-bold uppercase">
                    {speaker.name}
                  </h3>
                  <div className="flex flex-col justify-center items-center space-y-2">
                    <p className="text-md font-medium text-gray-600">
                      {speaker.role}
                    </p>
                    <AiOutlineLinkedin className="w-7 h-7 text-gray-500 hover:text-gray-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
