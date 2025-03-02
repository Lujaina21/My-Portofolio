import React from "react";
import universityImg from "./../../assets/damanhour univ.png";
import routeImg from "./../../assets/download.png";

export default function Education() {
  return (
    <>
      <div className="sm:ml-64 bg-light standard-ht">
        <h1 className="main-title py-4 px-10 w-full">Education</h1>
        <div className="p-10 grid grid-cols-1 lg:grid-cols-2 gap-4 default-font">
          <div className="bg-white shadow-lg p-5 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="txt-main text-3xl my-1 font-bold underline italic">
                <a
                  href="https://www.facebook.com/DamanhorUniversity/"
                  target="_blank"
                >
                  Damanhour University
                </a>
              </h2>
              <img
                src={universityImg}
                alt="Damanhour University Logo"
                className="w-10"
              />
            </div>
            <h3 className="font-bold text-lg text-gray-800">
              Faculty of Computers and Informations Technology
            </h3>
            <ul className="pl-8 list-disc text-lg marker:text-blue-300 my-3 text-gray-800 tracking-wide">
              <li>Bachelor's Degree in Computer Science</li>
              <li>Graduated in June 2024</li>
              <li>Software Engineer</li>
              <li>CGPA: B+</li>
            </ul>
          </div>
          <div className="bg-white shadow-lg p-5 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="txt-main text-3xl my-1 font-bold underline italic">
                <a
                  href="https://www.facebook.com/Routelearning"
                  target="_blank"
                >
                  Route Academy
                </a>
              </h2>
              <img src={routeImg} alt="Route Academy Logo" className="w-12" />
            </div>
            <h3 className="font-bold text-lg text-gray-800">
              Front-End Development Diploma
            </h3>
            <ul className="pl-8 list-disc text-lg marker:text-blue-300 my-3 text-gray-800 tracking-wide">
              <li>Diploma Degree in Frontend</li>
              <li>React.JS | Next.JS</li>
              <li>Graduated in February 2025</li>
              <li>React.js Developer</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
