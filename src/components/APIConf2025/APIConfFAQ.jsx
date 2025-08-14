import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import APINavbar from "./APINavbar";

function APIConfFAQ() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqData = [
    {
      question: "What is API Conf 2025?",
      answer:
        "API Conf 2025 is a global community-driven tech conference, hosted by the Google Developer Groups (GDG) community. Each API Conf event is crafted by its GDG organizers to fit the learning needs and interests of their local developer community, with a strong focus on knowledge exchange, networking, and learning about Google developer technologies.[2][4]",
    },
    {
      question: "Who can register for API Conf 2025?",
      answer:
        "API Conf 2025 is open to all developers, technologists, students, tech professionals, and anyone interested in learning about Google's developer technologies. Whether you're a beginner or an experienced developer, everyone is welcome to join and participate in the event.[2][5]",
    },
    {
      question: "Is it mandatory to register to participate in the event?",
      answer:
        "Yes, registration is mandatory to participate in API Conf 2025. Most API Conf events require an RSVP to help organizers plan better events and manage attendance. Registration numbers help us ensure we have adequate resources and space for all attendees.[4][9]",
    },
    {
      question: "I'm a beginner in programming. Can I still register?",
      answer:
        "Absolutely! API Conf 2025 welcomes developers of all skill levels, including beginners. The event features sessions ranging from introductory topics to advanced technical content. It's a great opportunity for beginners to learn, network with experienced developers, and get inspired to continue their programming journey.[2][5]",
    },
    {
      question: "What will attendees get by participating in the event?",
      answer:
        "Attendees will gain access to technical sessions, workshops, networking opportunities, hands-on experiences with Google technologies, learning about the latest trends in AI/ML, Android, Firebase, Google Cloud, and more. You'll also receive swag, have opportunities to connect with industry experts, and potentially win prizes during various activities.[2][3]",
    },
    {
      question: "How can I become a member of GDG?",
      answer:
        "You can become a member by visiting the GDG Event Platform or using the map tool to find a Google Developer Group chapter near you. Visit each Google Developer Group's page to find more information about the group, events, and how to join. You can also become an organizer and lead a GDG chapter in your local community.[4][5]",
    },
    {
      question: "How can I communicate my queries?",
      answer:
        "For any inquiries or concerns regarding API Conf 2025, you can reach out to the organizers at connect@gdgpune.in. You can also contact the GDG Pune community through their official social media channels or community platforms.[9][5]",
    },
    {
      question: "What technologies will be covered at API Conf 2025?",
      answer:
        "API Conf 2025 covers a wide range of Google technologies including Android development, Firebase, Flutter for cross-platform development, Google Cloud, Machine Learning, TensorFlow, AI/ML, Web Development, and much more. This year's focus includes Responsible AI and emerging technologies.[3][4][7]",
    },
    {
      question: "Will the event be in-person or virtual?",
      answer:
        "API Conf 2025 is an in-person event held at The Westin, Koregaon Park, Pune. However, API Conf events globally can be in-person, online, or hybrid depending on what each GDG chapter decides is best for their community.[3][9]",
    },
    {
      question: "Can I speak at API Conf 2025?",
      answer:
        "Yes! If you're interested in speaking at API Conf 2025, you can contact the local GDG chapter to learn about speaking opportunities. The Call for Papers (CFP) is typically announced several months before the event, allowing community members to submit their talk proposals.[6][4]",
    },
    {
      question: "Are there student discounts available?",
      answer:
        "Yes, API Conf 2025 typically offers student tickets at discounted rates. However, these tickets are limited and tend to sell out quickly. Keep an eye on the registration announcements and register early to secure your student ticket.[7][9]",
    },
  ];

  return (
    <div>
      <APINavbar />
      <div className="text-black mt-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-start">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <h4 className="text-xl opacity-90 max-w-2xl text-start">
            Need Answers? Everything you need to know about The API Conf Pune 2025
          </h4>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 bg-gray-200 rounded-2xl">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-lgoverflow-hidden"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-100 focus:outline-none transition-colors duration-200"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-md text-gray-900 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems[index] ? (
                    <ChevronUpIcon className="h-4 w-4 text-gray-500" />
                  ) : (
                    <ChevronDownIcon className="h-4 w-4 text-gray-500" />
                  )}
                </div>
              </button>

              {openItems[index] && (
                <div className="px-6 pb-5">
                  <div className="pt-2">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default APIConfFAQ;
