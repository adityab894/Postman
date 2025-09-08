import React, { memo, useState, useCallback } from "react";
import { FaLinkedin } from "react-icons/fa";

import rohan from "../assets/speakers/rohan.jpg";
import arun from "../assets/speakers/arun.jpg";
import nayan from "../assets/speakers/nayan.jpg";
import akanksha from "../assets/speakers/akanksha.jpg";
import shweta from "../assets/speakers/shweta.jpg";
import ganesh from "../assets/speakers/ganesh.jpg";
import pawan from "../assets/speakers/pawan.jpg";
import nikhil from "../assets/speakers/nikhil.jpg";
import asit from "../assets/speakers/asit.jpg";

const speakers = [
  {
    image: rohan,
    name: "Rohan Khamkar",
    role: "Senior Solutions Architect",
    linkedin: "https://www.linkedin.com/in/rohankhamkar/",
    bio: "Rohan Khamkar is an IT professional with nearly a decade of experience helping enterprises of all sizes, from SMBs to Fortune 100s, solve complex technical challenges. His expertise spans storage and backup solutions, virtualization, SSO integrations, cloud services, and IT infrastructure management. With strong skills in disaster recovery, migrations, and debugging, Rohan is passionate about leveraging technology to deliver secure, scalable, and efficient solutions."
  },
  {
    image: arun,
    name: "Arun Nair",
    role: "Senior Solutions Architect",
    linkedin: "https://www.linkedin.com/in/arun-nair-6454585a/",
    bio: "Arun Nair is an experienced Manager of Technical & Product Support with 13+ years in the industry, including 4+ years in leadership roles. He has led diverse teams of Leads, DBAs, and Technical Support Consultants, driving customer satisfaction, employee engagement, and operational excellence. With strong expertise in troubleshooting, process innovation, and cross-functional collaboration, Arun is passionate about empowering teams and achieving organizational goals."
  },
  {
    image: nayan,
    name: "Nayan Chandak",
    role: "Data Scientist",
    linkedin: "https://www.linkedin.com/in/nayan-chandak/",
    bio: "Nayan Chandak is a Data Scientist at Wolters Kluwer, specializing in data analytics, automation, and revenue forecasting to drive impactful business decisions. He has contributed to key initiatives such as the Annual Price Increase strategy, customer attrition analysis, and the development of a Revenue Bridge model, delivering measurable efficiency gains and revenue insights. Beyond his role, Nayan serves as an Advisory Committee Member at the Artificial Intelligence Students Association, supporting the advancement of AI and data science education. He holds a B.Tech in Artificial Intelligence & Data Science with an Honours in Data Analytics in Economics and Finance, and is certified as a Data Processing Specialist and Software Development Trainee. Passionate about applying data science to solve real-world challenges, Nayan continues to explore innovative ways to fuel business growth."
  },
  {
    image: akanksha,
    name: "Akanksha Kapoor",
    role: "Customer Success Lead",
    linkedin: "https://www.linkedin.com/in/akanksha-kapoor-545695119/",
    bio: "Akanksha Kapoor is a customer success leader with an MBA and certifications from Google Cloud and AWS. At DigitalOcean, she leads a team of Customer Success Managers across APAC and EMEA, driving revenue retention and growth while helping businesses maximize cloud adoption. Skilled in strategic planning, program execution, and cross-functional collaboration, Akanksha has led impactful initiatives such as dashboard creation, customer stories, and quarterly business reviews. Passionate about customer-centric innovation, she also mentors new CSMs and has been recognized for her leadership and consultative approach."
  },
  {
    image: ganesh,
    name: "Ganesh Divekar",
    role: "Android Developer",
    linkedin: "https://www.linkedin.com/in/ganesh-divekar-96a72bb7/",
    bio: "Ganesh Divekar is an engineering leader at Bajaj Markets, driving digital transformation in the finance industry by building resilient and scalable systems. With expertise across backend (Java, Kotlin, Go, Python), frontend (React, Next.js, Angular), and mobile development (Android, iOS, Flutter, KMP), he delivers high-performance, user-centric applications. Skilled in cloud technologies (AWS, GCP), databases (SQL & NoSQL), microservices, and DevOps (CI/CD, Docker, Kubernetes), Ganesh ensures agility and reliability in every solution. Passionate about innovation, he also explores AI, Generative AI, and Large Language Models to shape the future of fintech."
  },
  {
    image: pawan,
    name: "Pawan Shirke",
    role: "Network Engineer",
    linkedin: "https://www.linkedin.com/in/pawan-shirke/",
    bio: "Pawan Shirke is a Network Engineer with 4+ years of proven experience in network delivery services, specializing in design, implementation, configuration, analysis, and troubleshooting across multiple Networking OEM platforms. He has strong expertise in Data Center Networking and Network Automation, with hands-on experience in implementation, migration, and integration projects. Skilled in handling full project life cycle phases—including design, planning, and implementation—Pawan has worked extensively on Core Backbone, Datacenter, and Enterprise wired & wireless networks. He brings in-depth technical knowledge of Juniper, Cisco, Extreme, HPE, Arista, and Open Linux Networking, along with advanced routing and switching protocols such as OSPF, IS-IS, BGP, MP-BGP, MPLS, L3VPN, L2VPN, and IPSec VPN. Additionally, he has working experience with cloud and virtualized environments, including AWS and OpenStack Networking."
  },
  {
    image: shweta,
    name: "Shweta Saraswat",
    role: "Team Lead - Cloud Engineer",
    linkedin: "https://www.linkedin.com/in/shwe/",
    bio: "Shweta Saraswat is a seasoned Cloud Engineer and Database Administrator with over 12 years of experience in the IT industry. She is passionate about leveraging innovative technologies to enhance performance, scalability, and customer experience. Shweta has successfully led high-performing teams at DigitalOcean and Altera Digital Health, driving the implementation of cloud solutions and Electronic Health Records (EHR) across critical projects. Her expertise includes optimizing database performance, streamlining processes, training and mentoring junior team members, and improving operational metrics. She holds a Bachelor of Engineering in Computer Engineering from the University of Pune, along with industry-recognized certifications such as Microsoft Certified Professional and ITIL® Foundation Certificate in IT Service Management. Always eager to learn and adapt, Shweta is committed to continuous growth and contributing to organizational success through technology-driven solutions."
  },
  {
    image: nikhil,
    name: "Nikhil Pathak",
    role: "Senior Engineer",
    linkedin: "https://www.linkedin.com/in/nikhil-pathak/",
    bio: "Nikhil P. is a Senior Engineer at DigitalOcean, with expertise in building and scaling modern cloud-native applications. With a strong foundation in software engineering from the University Institute of Technology, RGPV, he has contributed to developing resilient infrastructure and customer-focused solutions in the cloud ecosystem. At DigitalOcean, Nikhil works on designing and optimizing scalable systems that power businesses worldwide, ensuring high performance, security, and reliability. Passionate about problem-solving, he thrives at the intersection of engineering and innovation, constantly exploring ways to improve developer experiences and cloud efficiencies. Based in Bengaluru, India, Nikhil is part of a global team driving digital transformation for startups, SMBs, and enterprise customers alike."
  },
  {
    image: asit,
    name: "Asit Sonawane",
    role: "DevOps Engineer",
    linkedin: "https://www.linkedin.com/in/asit-sonawane/",
    bio: "Asit Sonawane is a Lead DevOps Engineer at AssetCues, where he specializes in building scalable cloud-native solutions with a focus on Azure. An entrepreneur at heart and a passionate community builder, he actively contributes to the open-source ecosystem by organizing FOSS United Pune and leading the Ubuntu Maharashtra LoCo community. With expertise spanning DevOps practices, automation, and cloud infrastructure, Asit bridges technology and collaboration to drive impactful innovation. Beyond engineering, he is deeply committed to nurturing developer communities and fostering knowledge-sharing initiatives."
  },
];

const SpeakerCard = memo(({ speaker, onClick }) => {
  const handleClick = useCallback(() => {
    onClick();
  }, [onClick]);

  return (
    <div 
      className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
      onClick={handleClick}
    >
      <div className="flex flex-col items-center space-y-4 bg-white p-6 rounded-2xl">
        {/* Profile Image */}
        <div className="w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 flex items-center justify-center bg-gray-100 rounded-full overflow-hidden border-2 border-gray-200">
          <img
            src={speaker.image}
            alt={speaker.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name + Role */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {speaker.name}
          </h3>
          <p className="text-sm font-medium text-blue-600">{speaker.role}</p>
        </div>

        {/* LinkedIn */}
        <a
          href={speaker.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-600 transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          <FaLinkedin className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
});
SpeakerCard.displayName = "SpeakerCard";

const SpeakerModal = memo(({ speaker, isOpen, onClose }) => {
  if (!isOpen || !speaker) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-start md:items-center justify-center p-4 bg-black/30 backdrop-blur-sm overflow-auto animate-fadeIn"
      style={{ paddingTop: window.innerWidth < 768 ? "6rem" : undefined }}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl md:max-w-4xl max-h-[85vh] overflow-y-auto relative transform transition-all duration-300 ease-out animate-slideUp">
        <button
          onClick={onClose}
          className="absolute text-2xl top-4 right-4 z-10 w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-all duration-200 text-black font-bold hover:scale-110"
        >
          ×
        </button>

        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="flex-shrink-0">
              <div className="w-36 h-36 md:w-48 md:h-48 flex items-center justify-center bg-gray-100 rounded-full overflow-hidden border-4 border-gray-200">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {speaker.name}
              </h2>
              <p className="text-lg md:text-xl font-semibold text-blue-600 mb-1">
                {speaker.role}
              </p>
              <div className="mb-6">
                <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
                  About
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {speaker.bio}
                </p>
              </div>
              <div className="flex items-center">
                <a
                  href={speaker.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
                >
                  <FaLinkedin className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

SpeakerModal.displayName = "SpeakerModal";

export default function Speakers() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSpeakerClick = useCallback((speaker) => {
    setSelectedSpeaker(speaker);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedSpeaker(null);
  }, []);

  return (
    <section className="w-full bg-white py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 border-b-2 border-gray-300 pb-4">
          Speakers
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {speakers.map((speaker, index) => (
            <SpeakerCard 
              key={index} 
              speaker={speaker} 
              onClick={() => handleSpeakerClick(speaker)}
            />
          ))}
        </div>
      </div>

      {/* Speaker Modal */}
      <SpeakerModal
        speaker={selectedSpeaker}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
