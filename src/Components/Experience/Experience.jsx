import React, { useEffect, useState } from "react";
import routeLogo from "./../../assets/download.png";
import itiLogo from "./../../assets/itiLogo.png";
import gdscLogo from "./../../assets/gdsc.png";
import { AnimatePresence, motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="sm:ml-72 bg-light standard-ht">
      <h1 className="main-title py-4 px-10 w-full">Experience</h1>
      <div className="p-10 default-font">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            {
              id: 1,
              logo: routeLogo,
              title: "Frontend Development Intern",
              org: "Route Academy",
              type: "Onsite",
              duration: "September 2024 – February 2025",
              desc: `Successfully completed the Full-Stack Frontend Development Diploma, gaining in-depth expertise in React.js, JavaScript, HTML5, CSS3, Tailwind CSS, and API integration.`,
            },
            {
              id: 2,
              logo: itiLogo,
              title: "React Web Development Intern",
              org: "Information Technology Institute (ITI)",
              type: "Remotely",
              duration: "6 August 2023 – 21 August 2023",
              desc: `Completed 78-hour intensive React training in React.js, JavaScript, HTML5, CSS3, and Bootstrap with real-world projects.`,
            },
            {
              id: 3,
              logo: gdscLogo,
              title: "Core Team Member (Organizing Committee)",
              org: "GDSC Damanhour University",
              type: "Remotely",
              duration: "August 2022 – August 2023",
              desc: `Planned events, led team coordination, and strengthened communication skills with hands-on experience.`,
            },
          ].map((item) => (
            <motion.div key={item.id} variants={itemVariants} className="my-5">
              <h2 className="bg-gray-100 rounded-lg shadow-lg">
                <button
                  onClick={() => toggleAccordion(item.id)}
                  type="button"
                  className="flex transition-all duration-300 items-center justify-between w-full p-5 rounded-t-lg font-medium rtl:text-right text-gray-700 border border-b-0 gap-3"
                >
                  <span className="flex items-center gap-4 text-lg font-bold">
                    <img
                      src={item.logo}
                      alt={`${item.org} Logo`}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex flex-col items-start">
                      {item.title}
                      <small className="text-gray-500 italic">{item.org}</small>
                    </div>
                  </span>
                  <svg
                    className={`w-3 h-3 transform transition-transform duration-500 ${
                      activeIndex === item.id ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>

              <AnimatePresence initial={false}>
                {activeIndex === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden shadow-lg"
                  >
                    <div className="p-5 border border-b-0 bg-gray-50 rounded-b-lg">
                      <ul className="text-gray-800 list-disc ps-10">
                        <li className="mb-2">{item.type}</li>
                        <li className="mb-2">({item.duration})</li>
                        <li className="mb-2">{item.desc}</li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
