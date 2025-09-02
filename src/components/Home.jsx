import React from "react";
import star from "../assets/star.png";
import { IoIosArrowDown } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import {
  MessageSquare,
  ChevronsLeftRight,
  Package,
  Database,
} from "lucide-react";
import digitalOcean from "../assets/partners/digitalOcean.svg";
import kotlin from "../assets/partners/kotlin.svg";
import devDisplay from "../assets/partners/devDisplay.svg";
import GDSC from "../assets/partners/gdsc.svg";
import girlInTech from "../assets/partners/girlInTech.svg";
import MLH from "../assets/partners/MLH.svg";
import puneDAO from "../assets/partners/puneDAO.svg";
import spheron from "../assets/partners/spheron.svg";
import Email from "./Email";
import About from "./About";
import konfhub from '../assets/partners/konfhub.svg'

function Home() {
  const partners = [
    { name: "devDisplay", img: devDisplay },
    { name: "digitalOcean", img: digitalOcean },
    { name: "spheron", img: spheron },
    { name: "konfhub", img: konfhub },
    { name: "kotlin", img: kotlin },
    { name: "GDSC", img: GDSC },
    { name: "girlInTech", img: girlInTech },
    { name: "MLH", img: MLH },
    { name: "konfhub", img: konfhub },
    { name: "devDisplay", img: devDisplay },
    { name: "digitalOcean", img: digitalOcean },
    { name: "spheron", img: spheron },
    { name: "kotlin", img: kotlin },
    { name: "puneDAO", img: puneDAO },
    { name: "devDisplay", img: devDisplay },
    { name: "GDSC", img: GDSC },
    { name: "girlInTech", img: girlInTech },
    { name: "MLH", img: MLH },
    { name: "puneDAO", img: puneDAO },
    { name: "konfhub", img: konfhub },
  ];

  const available = [
    {
      icon: <MessageSquare />,
      label: "Online Forums",
      description: "Engage in discussions with peers",
    },
    {
      icon: <ChevronsLeftRight />,
      label: "Collaboration",
      description: "Work together on open-source projects",
    },
    {
      icon: <Package />,
      label: "Resources",
      description: "Access exclusive learning materials",
    },
    {
      icon: <Database />,
      label: "Job Board",
      description: "Find API-related career opportunities",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center mt-24">
      <div className="relative z-10 flex flex-col items-center justify-center px-2 sm:px-4 md:px-6 lg:px-8 max-w-full">
        <div className="bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center mx-auto max-w-full w-full sm:w-auto">
          <div className="w-full flex flex-row items-center bg-gray-50 rounded-t-2xl p-2 sm:p-3 mb-1 gap-2 sm:gap-4">
            <div className="flex flex-row gap-1 sm:gap-2">
              <div className="h-3 w-3 sm:h-4 sm:w-4 bg-red-600 rounded-full"></div>
              <div className="h-3 w-3 sm:h-4 sm:w-4 bg-yellow-500 rounded-full"></div>
              <div className="h-3 w-3 sm:h-4 sm:w-4 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 text-black font-bold text-sm sm:text-lg text-center sm:pl-4">
              <span className="text-orange-600">POSTMAN</span> Community Pune
            </div>
          </div>

          <div className="w-full h-2"></div>

          <div className="flex flex-row items-center gap-1 sm:gap-2 px-2 sm:px-4 pt-4 sm:py-2 mb-2 flex-wrap justify-center">
            <div className="flex flex-row items-center justify-around gap-1 sm:gap-2 border border-black rounded-md px-2 sm:px-4 py-2 font-bold text-black bg-white flex-grow max-w-full sm:max-w-[550px]">
              <div className="flex items-center gap-1 sm:gap-2 border-r-2 border-gray-200 pr-2">
                <span className="text-xs sm:text-base">POST</span>
                <IoIosArrowDown className="h-3 w-3 text-gray-400" />
              </div>
              <div className="truncate text-xs sm:text-base text-orange-600">
                THE API Community Pune
              </div>
            </div>
            <div className="h-8 sm:h-10 sm:w-25 font-semibold flex flex-row items-center justify-around gap-1 sm:gap-2 bg-blue-600 rounded-md cursor-pointer shrink-0 mx-2 sm:mx-0 px-2 sm:px-4 text-white hover:bg-blue-700 transition-colors">
              <div className="text-xs sm:text-base">Send</div>
              <IoIosArrowDown className="h-3 w-3 text-white" />
            </div>
          </div>

          <div className="w-[650px] sm:max-w-[650px]"></div>

          {/* Table header */}
          <div className="w-full max-w-full sm:max-w-[600px] flex flex-row text-xs sm:text-sm border border-black px-2 sm:px-4 text-gray-700 rounded-sm mb-2 overflow-x-auto">
            <div className="w-12 sm:w-10 h-8 border-r border-black shrink-0"></div>
            <div className="w-36 sm:w-46.5 h-8 border-r border-black pl-1 sm:pl-2 truncate">
              Key
            </div>
            <div className="w-56 sm:w-77 h-8 pl-1 sm:pl-2 border-r border-black truncate">
              Value
            </div>
            <div className="w-24 h-8 text-center flex justify-end gap-1 sm:gap-2 text-gray-400 shrink-0">
              <BsThreeDots className="h-4 sm:h-5 w-4 sm:w-5" />
              <span className="hidden sm:inline">Bulk Edit</span>
            </div>
          </div>

          {[
            { key: "Community", value: "POSTMAN Pune" },
            { key: "Member", value: "2000" },
            {
              key: "Focus",
              value: '["API Development", "Testing", "Collaboration"]',
            },
            { key: "Fastest-growing-community", value: "True" },
            { key: "Join", value: "True" },
          ].map((row) => (
            <div
              key={row.key}
              className="w-full max-w-full sm:max-w-[600px] flex flex-row border border-black px-2 sm:px-4 mb-2 rounded-sm text-gray-700 text-xs sm:text-sm overflow-x-auto"
            >
              <div className="w-12 sm:w-10 h-8 border-r border-black shrink-0"></div>
              <div className="w-36 sm:w-46 border-r border-black text-left text-gray-700 pl-1 sm:pl-2 truncate">
                {row.key}
              </div>
              <div className="w-56 sm:w-76 border-r border-black text-left text-gray-700 pl-1 sm:pl-2 truncate">
                {row.value}
              </div>
              <div className="w-24 h-8 flex justify-end gap-1 sm:gap-2 text-gray-400 shrink-0">
                <BsThreeDots className="h-4 sm:h-5 w-4 sm:w-5" />
                <span className="hidden sm:inline">Bulk Edit</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-orange-500 py-1 sm:py-2 transform rotate-3 my-16">
        <div className="flex animate-scroll-left gap-6 w-max">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="flex items-center gap-1 sm:gap-2">
              <img
                className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5"
                src={star}
                alt="Star"
              />
              <span className="text-white font-bold text-[10px] sm:text-xs md:text-sm">POSTMAN</span>
              <img
                className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5"
                src={star}
                alt="Star"
              />
              <span className="text-white font-bold text-[10px] sm:text-xs md:text-sm">COMMUNITY</span>
              <img
                className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5"
                src={star}
                alt="Star"
              />
              <span className="text-white font-bold text-[10px] sm:text-xs md:text-sm">PUNE</span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full mt-10 flex flex-col gap-8 justify-center items-center px-4">
        <div className="overflow-hidden w-full max-w-screen-xl">
          <div className="flex animate-scroll-left gap-6 w-max">
            {[...partners, ...partners].map(({ name, img }, i) => (
              <img
                key={i}
                src={img}
                alt={name}
                className="h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 w-auto rounded-xl object-cover flex-shrink-0 p-2"
              />
            ))}
          </div>
        </div>

        <div className="overflow-hidden w-full max-w-screen-xl">
          <div className="flex animate-scroll-right gap-6 w-max">
            {[...partners, ...partners].map(({ name, img }, i) => (
              <img
                key={i + partners.length}
                src={img}
                alt={name}
                className="h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 w-auto rounded-xl object-cover flex-shrink-0 p-2"
              />
            ))}
          </div>
        </div>
      </div>

      <About />

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-4 lg:px-10 mt-10 mb-10 max-w-7xl mx-auto">
        <div className="w-full lg:w-3/5">
          <div className="flex flex-col justify-center items-start text-black mt-10 lg:mt-0">
            <div className="w-fit rounded-full bg-gradient-to-r from-orange-700 to-orange-400 text-white text-center text-sm font-bold py-2 px-4 mb-4">
              Join Our Community
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
              Become Part of the
              <span className="text-orange-500"> API Revolution</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-700 w-full max-w-xl mb-6">
              Join our growing community of developers, testers, and API
              enthusiasts. Share knowledge, collaborate on projects, and stay
              updated with the latest trends in API development.
            </p>

            <div className="w-full max-w-xl flex flex-col items-start text-black">
              {available.map((item, index) => (
                <div key={index} className="flex items-start gap-3 mb-4">
                  <div className="text-orange-500 mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-black text-lg font-semibold">
                      {item.label}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/5 mt-10 lg:mt-0">
          <Email />
        </div>
      </div>
    </div>
  );
}

export default Home;
