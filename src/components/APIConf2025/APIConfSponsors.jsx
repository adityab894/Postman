import React from 'react';
import logo from '../../assets/logo.png'
import postman from '../../assets/APIConf/postmancommunitypune.png'
import gdg from '../../assets/APIConf/gdg.png'
import technogies from '../../assets/APIConf/technogies.png'
import winjit from '../../assets/APIConf/winjit.jpeg'
import konfhub from '../../assets/APIConf/konfhub.png'
import contentstack from '../../assets/APIConf/contentstack.png'
import APINavbar from './APINavbar';

const APIConfSponsors = () => {
  const sponsorTiers = [
    {
      title: "Title Sponsor",
      tier: "title",
      sponsors: [
        { img: postman }
      ]
    },
    {
      title: "Diamond Sponsor",
      tier: "diamond",
      sponsors: [
        { img: gdg }
      ]
    },
    {
      title: "Booth Partners",
      tier: "booth",
      sponsors: [
        { img: technogies },
        { img: winjit },
        { img: contentstack },
      ]
    },
    {
      title: "Partner Communities",
      tier: "community",
      sponsors: [
        { img: postman },
      ]
    },
    {
      title: "Ticket Partners",
      tier: "ticket",
      sponsors: [
        { img: konfhub },
      ]
    }
  ];

  const getSponsorSize = (tier) => {
    switch (tier) {
      case 'title':
        return 'w-40 h-20';
      case 'diamond':
        return 'w-40 h-20';
      case 'bronze':
        return 'w-36 h-14';
      case 'booth':
        return 'w-32 h-12';
      default:
        return 'w-40 h-16';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-10">
        <APINavbar />
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Sponsors
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sponsors dedicated to building remarkable experience! Thank you to all our partners 
              who make The API Conf Pune 2025 possible.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {sponsorTiers.map((tierGroup, index) => (
          <div key={index} className="mb-16">
            <div className="text-start mb-8">
              <div className={`inline-flex items-start px-6 py-3 rounded-full text-black font-semibold text-lg`}>
                {tierGroup.title}
              </div>
            </div>

            <div className={`grid gap-8 justify-items-start ${
              tierGroup.sponsors.length === 1 
                ? 'grid-cols-1' 
                : tierGroup.sponsors.length === 2 
                ? 'grid-cols-1 md:grid-cols-2' 
                : tierGroup.sponsors.length <= 4 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' 
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'
            }`}>
              {tierGroup.sponsors.map((sponsor, sponsorIndex) => (
                <div 
                  key={sponsorIndex}
                  className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl p-6 border border-gray-200 group-hover:border-blue-300">
                    <div className={`${getSponsorSize(tierGroup.tier)} mx-auto flex items-start justify-center bg-white rounded-lg overflow-hidden`}>
                      <img 
                        src={sponsor.img} 
                        alt={sponsor.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            THE API CONF 2025 • Organized by THE API COMMUNITY PUNE
          </p>
        </div>
      </footer>
    </div>
  );
};

export default APIConfSponsors;
