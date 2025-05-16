import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import blogStyles from "./Blog.module.css";
import ProfileImg from "./../../assets/me.png";
import drawnArrow from "./../../assets/right-arrow.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ParticlesComponent from "../Particles";

const waveAnimation = {
  rotate: [0, 20, -10, 20, -10, 0],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    repeatDelay: 1,
    ease: "easeInOut",
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function Blog() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Frontend Developer.. ", "React.Js Developer.. "],
      typeSpeed: 70,
      backSpeed: 70,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <main className={`${blogStyles.bodyBg} standard-ht bg-light p-10`}>
        <ParticlesComponent id="particles" className="absolute z-0" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-14">
          <motion.figcaption
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 w-full text-4xl text-gray-800 italic flex flex-col text-center md:text-start ms-10"
          >
            <motion.h1 variants={itemVariants}>
              Hi there!{" "}
              <motion.span
                animate={waveAnimation}
                style={{ display: "inline-block", originX: 0.7, originY: 0.7 }}
              >
                👋
              </motion.span>
            </motion.h1>
            <motion.h1 variants={itemVariants} className="lg:my-6">
              I am
              <span className="font-bold ms-2">Lujaina Walid</span>
            </motion.h1>
            <motion.p variants={itemVariants}>
              <span className="autotype text-3xl" ref={typedRef}></span>
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex items-end content-center mt-12"
            >
              <img width={80} src={drawnArrow} alt="Hand Drawn Arrow" />
              <button
                className={`${blogStyles.btn} ms-2 text-xl text-center group`}
              >
                <Link to="home">
                  Click here for more
                  <i className="fa-solid fa-mug-saucer ms-2 text-md drop-shadow-lg"></i>
                </Link>
              </button>
            </motion.div>
          </motion.figcaption>

          <figure className="relative w-full flex justify-center">
            <div
              className={`${blogStyles.blackBorder} relative  top-0 right-16 w-64 h-64 lg:w-96 lg:h-96`}
            ></div>
            <div
              className={`absolute lg:w-96 lg:h-96 w-64 h-64 overflow-hidden top-10 left-8  ${blogStyles.imgContainer} group`}
            >
              <img
                src={ProfileImg}
                alt="Me"
                className={`w-full ${blogStyles.pfp} relative transition-all duration-300 group-hover:blur-sm`}
              />
              <ul
                className={`${blogStyles.socialIcons} flex flex-row content-center gap-2 absolute`}
              >
                <li>
                  <a
                    href="https://www.linkedin.com/in/lujaina-walid-447b14242/"
                    target="_blank"
                    className="inline-flex justify-center items-center w-11 h-11 bg-charcoal/40 rounded-full backdrop-blur-[5px] text-white transition ease-linear duration-75"
                  >
                    <i className="fa-brands fa-linkedin-in text-lg"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Lujaina21"
                    target="_blank"
                    className="inline-flex justify-center items-center w-11 h-11 bg-charcoal/40 rounded-full backdrop-blur-[5px] text-white transition ease-linear duration-75"
                  >
                    <i className="fa-brands fa-github text-lg"></i>
                  </a>
                </li>
              </ul>
            </div>
          </figure>
        </div>
      </main>
    </>
  );
}
