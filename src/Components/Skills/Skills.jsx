import React from "react";
import html from "./../../assets/Skills Imgs/html.png";
import css from "./../../assets/Skills Imgs/css.png";
import sass from "./../../assets/Skills Imgs/sass.png";
import sw from "./../../assets/Skills Imgs/sw eng.png";
import ts from "./../../assets/Skills Imgs/ts.png";
import tw from "./../../assets/Skills Imgs/tw.png";
import bs from "./../../assets/Skills Imgs/bs.png";
import cpp from "./../../assets/Skills Imgs/cpp.png";
import ds from "./../../assets/Skills Imgs/ds.png";
import js from "./../../assets/Skills Imgs/js.png";
import materialUI from "./../../assets/Skills Imgs/Material UI.png";
import oop from "./../../assets/Skills Imgs/oop.png";
import react from "./../../assets/Skills Imgs/react.png";
import redux from "./../../assets/Skills Imgs/redux.png";
import restApi from "./../../assets/Skills Imgs/Restful API.png";
import git from "./../../assets/Skills Imgs/dev tools/git.png";
import github from "./../../assets/Skills Imgs/dev tools/github.png";
import postman from "./../../assets/Skills Imgs/dev tools/postman.png";
import vercel from "./../../assets/Skills Imgs/dev tools/vercel.png";
import vsCode from "./../../assets/Skills Imgs/dev tools/vs code.png";
import figma from "./../../assets/Skills Imgs/dev tools/figma.png";
import jquery from "./../../assets/Skills Imgs/jquery.png";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.6,
    },
  },
};

export default function Skills() {
  const front_skills = [
    { name: "HTML", img: html },
    { name: "CSS", img: css },
    { name: "JS", img: js },
    { name: "Bootstrap", img: bs },
    { name: "TailwindCSS", img: tw },
    { name: "Sass", img: sass },
    { name: "Material UI", img: materialUI },
    { name: "React.JS", img: react },
    { name: "Redux", img: redux },
    { name: "Restful API", img: restApi },
    { name: "TypeScript", img: ts },
    { name: "jQuery", img: jquery },
  ];

  const cs_skills = [
    { name: "Software Engineering", img: sw },
    { name: "OOP", img: oop },
    { name: "C++", img: cpp },
    { name: "Data Structures & Algorithms", img: ds },
  ];

  const dev_tools = [
    { name: "Git", img: git },
    { name: "GitHub", img: github },
    { name: "Postman", img: postman },
    { name: "Vercel", img: vercel },
    { name: "Visual Studio Code", img: vsCode },
    { name: "Figma", img: figma },
  ];

  return (
    <>
      <div className="sm:ml-72 bg-light standard-ht">
        <h1 className="main-title py-4 px-10 w-full">Skills</h1>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="p-10 grid grid-cols-1 lg:grid-cols-2 gap-4 default-font"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
            className="bg-white shadow-lg p-5 rounded-lg"
          >
            <div className="mb-4">
              <h2 className="txt-main border-b-2 border-gray-200 text-xl my-1 font-bold italic">
                Frontend Development Skills:
              </h2>
              <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 my-4`}>
                {front_skills.map((skill, index) => (
                  <div className="flex flex-col items-center rounded-lg shadow-lg p-2">
                    <img
                      src={skill.img}
                      alt={`${skill.name} Logo`}
                      className="w-24 h-24 my-1 hover:scale-110 transition-all duration-300"
                    />
                    <h4 className="text-center font-bold text-gray-700">
                      {skill.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
            className="bg-white shadow-lg p-5 rounded-lg"
          >
            <div className="mb-4">
              <h2 className="txt-main border-b-2 border-gray-200 text-xl my-1 font-bold italic">
                Programming & CS Skills:
              </h2>
              <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 my-4`}>
                {cs_skills.map((skill, index) => (
                  <div className="flex flex-col items-center rounded-lg shadow-lg p-2">
                    <img
                      src={skill.img}
                      alt={`${skill.name} Logo`}
                      className="w-24 h-24 my-1 hover:scale-110 transition-all duration-300"
                    />
                    <h4 className="text-center font-bold text-gray-700">
                      {skill.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
            className="bg-white shadow-lg p-5 rounded-lg"
          >
            <div className="mb-4">
              <h2 className="txt-main border-b-2 border-gray-200 text-xl my-1 font-bold italic">
                Development Tools:
              </h2>
              <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 my-4`}>
                {dev_tools.map((skill, index) => (
                  <div className="flex flex-col items-center rounded-lg shadow-lg p-2">
                    <img
                      src={skill.img}
                      alt={`${skill.name} Logo`}
                      className="w-24 h-24 my-1 hover:scale-110 transition-all duration-300"
                    />
                    <h4 className="text-center font-bold text-gray-700">
                      {skill.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
