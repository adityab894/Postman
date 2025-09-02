import React from 'react';
import communityIcon from "../assets/community.png";
import workshopIcon from "../assets/workshop.png";
import partnerIcon from "../assets/partners.png";

function About() {
  const stats = [
    { value: "2000+", label: "Community", icon: communityIcon },
    { value: "45+", label: "Events", icon: communityIcon },
    { value: "20+", label: "Workshops", icon: workshopIcon },
    { value: "5+", label: "Partners", icon: partnerIcon },
  ];

  return (
    <div className="mt-20 px-4 max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-10">
      
      <div className="flex-1 bg-white rounded-2xl shadow-xl p-6 sm:p-8 max-w-full">
        <h2
          id="about"
          className="text-2xl sm:text-3xl font-bold text-black mb-6 scroll-mt-24"
        >
          Building the API Community in Pune
        </h2>

        <p className="text-sm sm:text-base text-gray-700 mb-4 text-justify">
          We at The API Community Pune are passionate about API education,
          collaboration, and innovation. Our goal is to bring together
          developers, students, and professionals to learn, build, and grow
          in the API ecosystem.
        </p>

        <p className="text-sm sm:text-base text-gray-700 mb-6 text-justify">
          Through workshops, hackathons, and hands-on coding sessions, we
          provide a platform for enhancing API skills, networking with
          industry experts, and staying updated with the latest trends in
          API development.
        </p>

        <div className="space-y-4 mb-8">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="flex flex-col items-start p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center mb-2 gap-2">
                <div className="bg-orange-400 rounded-full h-4 w-4"></div>
                <span className="font-bold text-black">
                  Knowledge Sharing
                </span>
              </div>
              <span className="text-sm text-gray-700 text-justify">
                Learn from industry experts and share your expertise with
                others
              </span>
            </div>
          ))}
        </div>

        <button className="bg-gradient-to-r from-orange-700 to-orange-400 text-white font-bold py-3 px-6 sm:px-8 rounded-lg transition-colors flex items-center gap-2 mx-auto">
          Learn More About Us →
        </button>
      </div>

      <div className="flex-1 w-full max-w-full bg-gray-900 rounded-2xl shadow-xl p-6 sm:p-8 grid grid-cols-2 gap-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-md hover:shadow-lg transition duration-300"
          >
            <img
              src={stat.icon}
              alt={stat.label}
              className="h-16 w-16 mb-4 object-contain"
            />
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {stat.value}
            </div>
            <div className="text-sm font-medium text-gray-700 text-center">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
