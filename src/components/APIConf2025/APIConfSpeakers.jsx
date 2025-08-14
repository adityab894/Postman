import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import man from '../../assets/man.jpg'
import APINavbar from "./APINavbar";

const APIConfSpeakers = () => {
  const speakers = [
  {
    image: man,
    name: "Ananya Joshi",
    role: "Lead UX Designer",
    linkedin: "https://www.linkedin.com/in/ananya-joshi/",
  },
  {
    image: man,
    name: "Karan Mehta",
    role: "Full Stack Developer",
    linkedin: "https://www.linkedin.com/in/karan-mehta/",
  },
  {
    image: man,
    name: "Priya Deshmukh",
    role: "AI Research Scientist",
    linkedin: "https://www.linkedin.com/in/priya-deshmukh/",
  },
  {
    image: man,
    name: "Siddharth Kulkarni",
    role: "Product Manager",
    linkedin: "https://www.linkedin.com/in/siddharth-kulkarni/",
  },
  {
    image: man,
    name: "Manish Verma",
    role: "Mobile App Developer",
    linkedin: "https://www.linkedin.com/in/manish-verma/",
  },
  {
    image: man,
    name: "Reena Shah",
    role: "Cybersecurity Specialist",
    linkedin: "https://www.linkedin.com/in/reena-shah/",
  },
  {
    image: man,
    name: "Omkar Patil",
    role: "Cloud Infrastructure Engineer",
    linkedin: "https://www.linkedin.com/in/omkar-patil/",
  },
  {
    image: man,
    name: "Ishita Agarwal",
    role: "Senior QA Engineer",
    linkedin: "https://www.linkedin.com/in/ishita-agarwal/",
  },
  {
    image: man,
    name: "Devansh Bhatia",
    role: "Blockchain Developer",
    linkedin: "https://www.linkedin.com/in/devansh-bhatia/",
  },
];


  return (
    <section className=" w-screen bg-white py-12 px-4 md:px-8 mt-6">
        <APINavbar />
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

export default APIConfSpeakers;
