import React from "react";
import { memo, useCallback, useState } from "react";
import shrawan from '../assets/team/shrawan.jpg';
import aditya from '../assets/team/aditya.JPG';
import nilanjan from '../assets/team/nilanjan.jpg';
import kunal from '../assets/team/kunal.png';
import aman from '../assets/team/aman.jpg';
import namrata from '../assets/team/namrata.jpg';
import atharva from '../assets/team/atharvaw.jpg';
import alisha from '../assets/team/alisha.jpg';
import arjun from '../assets/team/arjun.jpg';
import ritika from '../assets/team/ritika.jpg';
import eric from '../assets/team/eric.jpg';
import alice from '../assets/team/alice.png';
import hariprasad from '../assets/team/hariprasad.jpg';
import suresh from '../assets/team/suresh.jpg';
import asmita from '../assets/team/asmita.jpg';
import roheeni from '../assets/team/roheeni.jpg';
import nikhil from '../assets/team/nikhil.jpg';
import janhavi from '../assets/team/janhavi.jpg';
import khushi from '../assets/team/khushi.jpg';
import sakshiSonawne from '../assets/team/sakshi.jpg';
import adhishri from '../assets/team/adhishri.jpg';
import ankit from '../assets/team/ankit.jpg';
import saloni from '../assets/team/saloni.jpg';
import sakshiChaudhari from '../assets/team/sakshichaudhari.jpg';
import pratyush from '../assets/team/pratyush.jpg';
import rutuja from '../assets/team/rutuja.jpg';
import prisha from '../assets/team/prisha.jpg';
import manasi from '../assets/team/manasi.jpg';
import sachin from '../assets/team/sachin.jpg';
import { FaLinkedin } from "react-icons/fa";


const organizingTeam = [
  {
    id: 1,
    name: "Shrawan Saproo",
    role: "Organizer",
    bio: "I'm Shrawan, a Community Builder, DevRel Leader, Technical Content Creator, and Region Lead at AI Camp, passionate about empowering developers and building thriving ecosystems. Currently leading the API Community India and serving as a DigitalOcean Wavemaker, I bring 2+ years of experience in developer relations, community growth, and event management.",
    linkedin: "https://www.linkedin.com/in/shrawan513/",
    image: shrawan,
  },
  {
    id: 2,
    name: "Aditya Bisht",
    role: "Organizer",
    bio: "Hi, I'm Aditya Bisht, a curious and committed engineering student pursued B.E. in Robotics and Automation, with a passion for software development and community-driven tech innovation. With a strong foundation in C/C++, Python, JavaScript, and modern frameworks like React, Node.js, and Next.js, I thrive at the intersection of software and hardware. I enjoy exploring both front-end and back-end technologies, crafting solutions that are not only functional but also meaningful. Beyond development, I'm deeply invested in community building. I co-founded The API Community India, organizing 10+ events to foster collaboration and API literacy among developers. As a competitive programmer, I've consistently sharpened my algorithmic thinking, ranking among the Top 11K globally in Google Kickstart and mentoring over 80+ students in Data Structures & Algorithms. My passion for learning and teaching is what fuels me every day.I'm currently diving deeper into DevOps, automation, and cloud-native tools, with a long-term vision to innovate at the intersection of AI and real-world problem-solving. When I'm not coding, you'll find me reading about aviation, defense tech, Geopolitics or playing badminton. I believe in the power of curiosity, code, and community to create meaningful change.",
    linkedin: "https://www.linkedin.com/in/aditya894/",
    image: aditya,
  },
];

const teamLeads = [
  {
    id: 1,
    name: "Nilanjan Paul",
    role: "Technical Lead",
    bio: "An attentive and agile learner with a diverse foundation of the tech industry platform experiences such as cloud, Bq, application development, security analysis, AI ML, language processing, QA. Also, an Engineer who has very strong organizational and communicative abilities equipped with technical abilities and a decisive nature necessary for a successful job",
    linkedin: "https://www.linkedin.com/in/nilanjan-paul21/",
    image: nilanjan,
  },
  {
    id: 2,
    name: "Kunal Gavit",
    role: "Media Lead",
    bio: "I'm the Head of Media at the API Community India where I lead content and campaigns that build real connections with the tech community. I've managed cultural festivals and college events that drew large participation and strong engagement OF 1M+ impressions in just span of 30 days. Before that, I grew a fan page for actor Prasad Oak to 20K+ followers which taught me how to build and maintain an active audience. I enjoy working at the intersection of creativity and strategy. Right now I'm pursuing my Degree in Information Technology and exploring opportunities to help brands and communities grow.",
    linkedin: "https://www.linkedin.com/in/kunal-gavit-1504gk/",
    image: kunal,
  },
  {
    id: 3,
    name: "Aman Mogal",
    role: "Growth Lead",
    bio: "Aman Mogal is an AI & DevOps Engineer and Founder of localDev, passionate about automating intelligence in the cloud. As an open-source enthusiast and Community Representative at the API Community India, he focuses on growth management, community relations, and driving impactful developer experiences. Currently pursuing his degree at MCOE (Class of 2026), Aman actively contributes to fostering collaboration and innovation in tech communities.",
    linkedin: "https://www.linkedin.com/in/aman-mogal-b7773b246/",
    image: aman,
  },
  {
    id: 4,
    name: "Namrata Bhalerao",
    role: "Design Lead",
    bio: "I'm Namrata, an Electronics & Telecommunication student with a enthusiasm for visual story telling, UI frameworks and crafting intuitive digital experiences. At the API Community India, I bring my skills as a designer. I focus on shaping our visual presence and ensuring consistent aesthetics across platforms. With a keen eye for design and creativity, I lead the creation of engaging social media visuals and community-driven designs that reflect our vibrant spirit. My goal is to merge technology with creativity.",
    linkedin: "https://in.linkedin.com/in/namrata-bhalerao-66417a244",
    image: namrata,
  },
  {
    id: 5,
    name: "Atharva Wani",
    role: "Design Lead",
    bio: "Atharva Wani is the Design Lead for the API Community India, where he drives engaging designs and impactful storytelling to bring developer communities together. With a keen eye for creativity and detail, he ensures that every campaign, event, and initiative reflects innovation and inclusivity. Passionate about design, tech, and collaboration, Atharva plays a key role in shaping the community's identity and inspiring developers to connect, learn, and grow.",
    linkedin: "https://www.behance.net/waniatharva",
    image: atharva,
  },
  {
    id: 6,
    name: "Alisha Sapkal",
    role: "Web Lead",
    bio: "I'm a passionate Software Developer, skilled in UI frameworks building scalable websites, user-focused applications, I combine strong problem-solving skills with a creative approach to design and development. With hands-on experience in database and node, I thrive on turning complex ideas into impactful digital solutions. Beyond academics, I actively contribute to tech communities and mentor peers, driven by curiosity, adaptability, and a commitment to continuous learning, currently a Web Lead at the API Community India. My goal is to create seamless, performance-optimized experiences that make technology more accessible and meaningful.",
    linkedin: "https://www.linkedin.com/in/alisha-sapkal/",
    image: alisha,
  },
  {
    id: 7,
    name: "Arjun Khadse",
    role: "Operations Lead",
    bio: "I'm a creative Full-Stack Developer and Designer with expertise in modern JavaScript frameworks and libraries. Passionate about crafting intuitive, scalable, and visually engaging digital experiences, I seamlessly blend design with functionality to bring ideas to life. Skilled in custom visual effects, animations, and performance optimization, I specialize in building user-focused applications that leave a lasting impact. Driven by curiosity and continuous learning, I thrive on exploring new technologies, solving complex challenges, and collaborating to transform ideas into reality.",
    linkedin: "https://www.linkedin.com/in/arjunkh",
    image: arjun,
  },
  {
    id: 8,
    name: "Ritika Pasari",
    role: "Operations Lead",
    bio: "Building tech, growing communities, and creating impact. I'm Ritika Pasari — a Software Engineer and Community Builder passionate about blending technology with collaboration. With experience in AI, microservices, and AI full-stack development, I enjoy turning ideas into impactful solutions. Beyond code, I actively contribute to developer communities, fostering growth, knowledge-sharing, and meaningful connections. Driven by curiosity and creativity, I thrive on building both products and people.",
    linkedin: "https://www.linkedin.com/in/ritika-pasari-225139225",
    image: ritika,
  },
  {
    id: 9,
    name: "Eric Fernandes",
    role: "Support Lead",
    bio: "Eric Fernandes is a Graduate Engineer Trainee at iTech Robotics & Automation, working on robotics programming and computer vision. Alongside this, he serves as Community Support Manager at the API Community India, where he contributes to community growth, developer support, and technical advocacy. Passionate about AI, automation, and open-source, Eric is building a career at the intersection of technology",
    linkedin: "https://www.linkedin.com/in/ericfernandes1681/",
    image: eric,
  },
  {
    id: 10,
    name: "Alice Chauhan",
    role: "Content Lead",
    bio: "I'm Alice, a Content Lead and Community Builder, passionate about creating engaging narratives and fostering collaboration in tech communities. At the API Community India, I focus on driving impactful content, strengthening connections, and enabling knowledge-sharing among developers. With a strong interest in storytelling, event engagement, and community growth, I aim to empower individuals through meaningful conversations and resources that help them thrive in the developer ecosystem.",
    linkedin: "https://www.linkedin.com/in/alice-chauhan-661305288",
    image: alice,
  },
  {
    id: 11,
    name: "Hariprasad Sakhare",
    role: "Support Lead",
    bio: "As a recent engineering graduate with a passion for software development, I am eager to leverage my skills in data analysis to solve real-world problems. I excel in problem-solving and possess strong management and communication abilities, which I believe are essential in today's collaborative work environment. My academic background and hands-on projects have equipped me with a solid foundation in technical skills, and I am enthusiastic about applying my knowledge to innovative initiatives. I am actively seeking opportunities where I can contribute to meaningful projects and further develop my expertise",
    linkedin: "https://www.linkedin.com/in/hariprasad-sakhare-8b6834230",
    image: hariprasad,
  },
  {
    id: 12,
    name: "Suresh Chaudhary",
    role: "Creative Lead",
    bio: "I'm Suresh, a self-proclaimed 'noob' coder and a curious, crazy designer at heart. As a dedicated night owl, I thrive on transforming complex and messy work into clean user experiences. Currently, I'm contributing my skills as a Seasonal Software Developer at koiamor and also guide the creative vision as the Creative Lead for the API Community.India I'm always learning and am a passionate developer.",
    linkedin: "https://www.linkedin.com/in/sschoudhary30/",
    image: suresh,
  },
  {
    id: 13,
    name: "Asmita Khuspe",
    role: "Anchors Lead",
    bio: "I'm a passionate technologist with a strong foundation in C, C++, Java, and Python, and a growing expertise in cloud technologies like AWS, GCP, Azure, DevOps, and system administration. I enjoy solving complex problems, exploring new tools, and bringing efficiency to the projects I work on. Currently preparing to pursue an MS in Cloud Computing abroad, I'm eager to deepen my knowledge and contribute meaningfully to the evolving tech landscape. Beyond coding, I love mentoring, public speaking, and guiding aspiring professionals, as I believe sharing knowledge is just as important as gaining it. At heart, I'm curious, collaborative, and always open to learning.",
    linkedin: "https://www.linkedin.com/in/asmita-khuspe/",
    image: asmita,
  },
  {
    id: 14,
    name: "Roheeni Naraynkar",
    role: " Anchors Lead",
    bio: "I'm Roheeni, currently a Full-Time Technology Analyst at Citi Bank and proud Citi Bridge Grad'24. I have held diverse roles such as Mentor, PR, Developer, and Editor in clubs like Vinidra Satellite Club and Kshitij during my college years. My internship experience spans Reknot Solution, Citi Bank, and a research role at my college. Alongside my career, I'm active in both social and tech volunteering initiatives, serving as an anchor for the API Community India and volunteering at Bhumi.",
    linkedin: "http://www.linkedin.com/in/roheeni-narayankar-a7bb49199",
    image: roheeni,
  },
  {
    id: 15,
    name: "Nikhil Rajpurohit",
    role: "Growth Co-Lead",
    bio: "I'm Nikhil Rajpurohit, a Fullstack Web3 Developer driven by a passion for building scalable applications and decentralized solutions. For me, problem-solving isn't just a skill it's a mindset. Whether it's building with communities, contributing to open-source, or collaborating with innovators who share a vision for the future, I thrive on creating meaningful digital experiences that grow with people and technology.",
    linkedin: "https://www.linkedin.com/in/nikhil-rajpurohit-05b39734a/",
    image: nikhil,
  },
  {
    id: 16,
    name: "Janhavi Dahatonde",
    role: "Technical Co-Lead",
    bio: " A passionate software engineer with strengths in problem-solving, adaptability, and creating user-focused, scalable solutions. Thrives in tackling complex challenges, optimizing performance, and turning ideas into impactful products. Driven by curiosity, continuous learning, and a commitment to delivering excellence.",
    linkedin: "https://www.linkedin.com/in/janhavi2409/",
    image: janhavi,
  },
  {
    id: 17,
    name: "Khushi Jamale",
    role: "Growth Team",
    bio: "Turning curiosity into code and conversations🌟. Hey! I'm Khushi Jamale — an Electronics & Telecommunication Engineering student passionate about cloud computing and APIs. With a curiosity for scalable technologies and innovative solutions, I enjoy blending technical problem-solving with people-centric skills. Beyond code, I'm driven by meaningful interactions, collaboration, and honing my management abilities to create impact.",
    linkedin: "https://www.linkedin.com/in/khushi-jamale-051a492b6",
    image: khushi,
  },
  {
    id: 18,
    name: "Sakshi Sonawane",
    role: "Media Co-Lead",
    bio: "Hi there! I'm Sakshi, a passionate Data Science and Machine Learning enthusiast specialising in developing Python-based solutions to solve complex problems. With hands-on experience in building AI chatbots and creating robust ML pipelines, I am proficient in SQL and Power BI for data analysis and visualisation. I am actively seeking opportunities in Data Analytics and AI to apply my skills and contribute to innovative projects. Let's connect and drive data-driven success together!",
    linkedin: "https://www.linkedin.com/in/sakshi-s-284233206/",
    image: sakshiSonawne,
  },
  {
    id: 19,
    name: "Adhishri Kore",
    role: "Designer",
    bio: "I'm Adhishri Kore, a final-year student, Designer, and Technology Explorer driven by creativity, innovation, and community spirit. With a background in technology and a strong inclination toward visual storytelling, I specialize in transforming ideas into impactful designs that connect with people. Currently contributing at the API Community India, I blend design thinking with technical insight to create meaningful experiences. Passionate about continuous learning and collaboration, I thrive on exploring new possibilities and adding value to communities that foster growth and knowledge sharing.",
    linkedin: "https://www.linkedin.com/in/adhishri-kore-31b174296",
    image: adhishri,
  },
  {
    id: 20,
    name: "Ankit Mishra",
    role: "Designer",
    bio: "I'm Ankit, a Tech Explorer passionate about open-source, developer communities, and practical software development. I enjoy working on projects that build my skills in programming, development, and collaboration. Currently, I'm contributing to the Design Team at the API Community India, where I blend creativity with technology to support community initiatives. Outside tech, I explore creativity through designing and editing, bringing fresh perspectives to my work while contributing to thriving communities.",
    linkedin: "https://www.linkedin.com/in/ankit-mishra-56b941282/",
    image: ankit,
  },
  {
    id: 21,
    name: "Saloni Pawar",
    role: "Designer",
    bio: "I'm Saloni Pawar  an engineer who traded circuits for creativity. While my degree says engineering, my passion drives storytelling, design, and digital strategy. I bring ideas to life as a social media, content creator, and graphic designer, crafting digital experiences that make people stop, think, and connect. I thrive at the intersection of creativity and strategy shaping brand presence, curating stories that resonate, and designing visuals that speak with clarity and style. Currently, I'm working with the API Community India a vibrant hub of innovators, developers, and API enthusiasts where technology meets creativity and community.",
    linkedin: "http://linkedin.com/in/saloni-pawar-949aa1178",
    image: saloni,
  },
  {
    id: 22,
    name: "Sakshi Chaudhary",
    role: "Designer",
    bio: "Hi, I'm Sakshi Chaudhari. I'm a 3rd-year student passionate about AI, Data Science, and Full-Stack Development, blending technology with creativity to build digital solutions that are impactful and user-friendly. As a software developer and designer, I work with React, Node.js, Express, MySQL, and MongoDB to create scalable applications. Alongside tech, I contribute as a designer at the API Community India, shaping its visual identity and crafting engaging designs that reflect its innovative spirit.I thrive at the intersection of code and creativity—developing web, curating stories, and designing visuals that connect with people.My goal is to grow as a full-stack developer and creative designer, crafting seamless, performance-optimized experiences that inspire and engage",
    linkedin: "http://www.linkedin.com/in/sakshichaudhari0606",
    image: sakshiChaudhari,
  },
  {
    id: 23,
    name: "Pratyush Panda",
    role: "Video Editor",
    bio: "Hey! I'm Pratyush Panda, a pre-final year Computer Engineering student who enjoys working at the crossroads of technology and creativity. I am currently working with the API Community India as an Editor, where I craft engaging tech reels and event highlights that capture knowledge and community spirit. I also serve as the Content & Community Lead at GDG BVP Pune, where I combine my skills in web development, DSA, and video editing to build content that informs, inspires, and connects. For me, it's all about turning ideas into experiences—whether through code or through storytelling.🚀",
    linkedin: "https://www.linkedin.com/in/pratyush-panda-a50382329",
    image: pratyush,
  },
  {
    id: 24,
    name: "Rutuja",
    role: "Video Editor",
    bio: " Aspiring Software Developer passionate about building scalable applications and solving problems through C, C++, and DSA. Currently learning Full Stack Development while contributing to the API Community India as part of the Media & Event team. I enjoy blending technical skills with creative storytelling  from writing code to designing event content. My goal is to grow as a developer while actively contributing to impactful communities.",
    linkedin: "https://www.linkedin.com/in/rutuja-parde-41478a325",
    image: rutuja,
  },
  {
    id: 25,
    name: "Prisha Shah",
    role: "Photographer",
    bio: "Hey,I'm Prisha Shah. An AI & Data Science student and a passionate Software Developer, skilled in front end technologies,React, Node.js, MongoDB, and MySQL. I enjoy building scalable websites and user-focused applications, combining strong problem-solving abilities with creativity in design and development.With hands-on experience in databases, backend systems, and frontend frameworks, I thrive on transforming complex ideas into meaningful digital solutions. Beyond academics, I'm an active member of the API Community India and a photographer, where I channel the same attention to detail and storytelling that I apply in tech projects.Driven by curiosity, adaptability, and continuous learning, my goal is to grow as a full-stack developer and contribute to creating seamless, performance-optimized experiences that make technology more impactful and accessible.",
    linkedin: "https://www.linkedin.com/in/prisha-shah-085438257",
    image: prisha,
  },
  {
    id: 26,
    name: "Manasi Barge",
    role: "Volunteer",
    bio: "I'm Manasi Barge, a software developer passionate about building impactful projects and strengthening my skills. I worked on full-stack development using Java, Spring Boot, Angular, and MongoDB, contributing to real-world applications. I love collaborating on projects, exploring new technologies, and creating solutions that make a difference. For me, it's all about learning, building, and turning ideas into meaningful digital experiences.",
    linkedin: "https://www.linkedin.com/in/manasi-barge/",
    image: manasi,
  },

  {
    id: 27,
    name: "Sachin Parihar",
    role: "Volunteer",
    bio: "Hi, I'm Sachin Parihar — a Fullstack Developer based in Pune and the founder of Cresta Studio. I specialize in design-driven development, building digital experiences that seamlessly blend form and function. My expertise spans HTML, JavaScript, React.js, Firebase, Python, and more—bringing clean, intuitive interfaces to life with performance and creativity",
    linkedin: "https://www.linkedin.com/in/sachin-parihar-008180264",
    image: sachin,
  },
];

const TeamMemberCard = memo(({ member, onClick }) => {
  const handleClick = useCallback(() => {
    onClick();
  }, [onClick]);

  return (
    <div
      className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
      onClick={handleClick}
    >
      <div className="flex flex-col items-center space-y-4">
        {/* Team Member Image */}
        <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 flex items-center justify-center bg-gray-100 rounded-full overflow-hidden border-2 border-gray-200">
          <img
            src={member.image}
            alt={member.name}
            width={240}
            height={240}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target;
              target.style.display = "none";
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `
                  <div class="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center rounded-full">
                    <div class="text-center">
                      <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                `;
              }
            }}
          />
        </div>

        {/* Team Member Info */}
        <div className="text-center">
          <h3 className="text-lg font-bold text-gray-800 mb-1">
            {member.name}
          </h3>
          <p className="text-sm font-semibold text-blue-600 mb-1">
            {member.role}
          </p>
        </div>
      </div>
    </div>
  );
});

TeamMemberCard.displayName = "TeamMemberCard";

const TeamModal = memo(({ member, isOpen, onClose }) => {
  if (!isOpen || !member) return null;

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
                  src={member.image}
                  alt={member.name}
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {member.name}
              </h2>
              <p className="text-lg md:text-xl font-semibold text-blue-600 mb-1">
                {member.role}
              </p>
              <div className="mb-6">
                <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
                  About
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {member.bio}
                </p>
              </div>
              <div className="flex items-center">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
                >
                  <FaLinkedin className="w-5 h-5 text-white text-2xl" />
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

TeamModal.displayName = "TeamModal";

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMemberClick = useCallback((member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedMember(null);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Organizing Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 mt-16">
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">
              Organizing Team
            </h2>
            <p className="text-lg text-gray-600 max-w-9xl mx-auto leading-relaxed text-left">
              Our mission is to equip our community members with practical skills, enabling them to communicate their insights and drive innovative solutions effectively. Whatever your challenge, these leaders on the front line of transformation, innovation, and exploration helped solve it with you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {organizingTeam.map((member) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                onClick={() => handleMemberClick(member)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Team Leads Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">
              Team Leads & Members
            </h2>
            <p className="text-lg text-gray-600 max-w-9xl mx-auto leading-relaxed text-left ">
              Our Team Leads are the guiding stars, illuminating the path for our community members. They inspire, motivate, and empower our teams to achieve extraordinary results. By leveraging their strategic thinking and problem-solving abilities, they empower our community members to overcome obstacles and achieve groundbreaking results. They empower our community members by providing the tools, resources, and mentorship needed to unlock their full potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teamLeads.map((member) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                onClick={() => handleMemberClick(member)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Team Modal */}
      <TeamModal
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
