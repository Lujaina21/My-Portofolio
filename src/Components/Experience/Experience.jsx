import React, { useEffect } from "react";
import "./Experience.module.css";
import routeLogo from "./../../assets/download.png";
import itiLogo from "./../../assets/itiLogo.png";
import gdscLogo from "./../../assets/gdsc.png";

export default function Experience() {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <>
      <div className="sm:ml-64 bg-light standard-ht">
        <h1 className="main-title py-4 px-10 w-full">Experience</h1>
        <div className="p-10 default-font">
          <div id="accordion-open" data-accordion="open">
            {/* first experience */}
            <div className="my-5">
              <h2
                id="accordion-open-heading-1"
                className="bg-gray-100 rounded-lg shadow-lg"
              >
                <button
                  type="button"
                  className="flex transition-all duration-300 items-center justify-between w-full p-5 rounded-t-lg font-medium rtl:text-right text-gray-700 border border-b-0 gap-3"
                  data-accordion-target="#accordion-open-body-1"
                  aria-controls="accordion-open-body-1"
                >
                  <span className="flex items-center gap-4 text-lg font-bold">
                    <img
                      src={routeLogo}
                      alt="Route Academy Logo"
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex flex-col items-start">
                      Frontend Development Intern
                      <small className="text-gray-500 italic">
                        Route Academy
                      </small>
                    </div>
                  </span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
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
              <div
                id="accordion-open-body-1"
                className="hidden shadow-lg"
                aria-labelledby="accordion-open-heading-1"
              >
                <div className="p-5 border border-b-0 bg-gray-50 rounded-b-lg">
                  <ul className=" text-gray-800 list-disc ps-10">
                    <li className="mb-2">Onsite</li>
                    <li className="mb-2">(September 2024 – February 2025)</li>
                    <li className="mb-2">
                      During the internship I successfully completed the
                      Full-Stack Frontend Development Diploma, gaining in-depth
                      expertise in modern frontend technologies. I built and
                      optimized responsive web applications using React.js,
                      JavaScript, HTML5, CSS3, and Tailwind CSS while developing
                      hands-on experience with state management, API
                      integration, and performance optimization. Additionally, I
                      collaborated with a team to deliver real-world projects,
                      enhancing my problem-solving and debugging skills.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Second experience */}
            <div className="my-5">
              <h2
                id="accordion-open-heading-2"
                className="bg-gray-100 rounded-lg shadow-lg"
              >
                <button
                  type="button"
                  className="flex transition-all duration-300 items-center justify-between w-full p-5 rounded-t-lg font-medium rtl:text-right text-gray-700 border border-b-0 gap-3"
                  data-accordion-target="#accordion-open-body-2"
                  aria-controls="accordion-open-body-2"
                >
                  <span className="flex items-center gap-4 text-lg font-bold">
                    <img
                      src={itiLogo}
                      alt="Route Academy Logo"
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex flex-col items-start">
                      React Web Development Intern
                      <small className="text-gray-500 italic">
                        Information Technology Institute (ITI)
                      </small>
                    </div>
                  </span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
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
              <div
                id="accordion-open-body-2"
                className="hidden shadow-lg"
                aria-labelledby="accordion-open-heading-2"
              >
                <div className="p-5 border border-b-0 bg-gray-50 rounded-b-lg">
                  <ul className=" text-gray-800 list-disc ps-10">
                    <li className="mb-2">Remotely</li>
                    <li className="mb-2">(6 August 2023 – 21 August 2023)</li>
                    <li className="mb-2">
                      I completed a 78-hour intensive React Web Development
                      training, building foundational skills in React.js, ES6,
                      JavaScript, HTML5, CSS3, and Bootstrap while gaining
                      hands-on experience in frontend development through
                      structured learning and projects.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Third Experience */}
            <div className="my-5">
              <h2
                id="accordion-open-heading-3"
                className="bg-gray-100 rounded-lg shadow-lg"
              >
                <button
                  type="button"
                  className="flex transition-all duration-300 items-center justify-between w-full p-5 rounded-t-lg font-medium rtl:text-right text-gray-700 border border-b-0 gap-3"
                  data-accordion-target="#accordion-open-body-3"
                  aria-controls="accordion-open-body-3"
                >
                  <span className="flex items-center gap-4 text-lg font-bold">
                    <img
                      src={gdscLogo}
                      alt="Route Academy Logo"
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex flex-col items-start">
                      Core Team Member (Organizing Committee)
                      <small className="text-gray-500 italic">
                        GDSC Damanhour University
                      </small>
                    </div>
                  </span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
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
              <div
                id="accordion-open-body-3"
                className="hidden shadow-lg"
                aria-labelledby="accordion-open-heading-3"
              >
                <div className="p-5 border border-b-0 bg-gray-50 rounded-b-lg">
                  <ul className=" text-gray-800 list-disc ps-10">
                    <li className="mb-2">Remotely</li>
                    <li className="mb-2">(August 2022 – August 2023)</li>
                    <li className="mb-2">
                      Planned events, led team coordination, and strengthened
                      communication skills with hands-on experience.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
