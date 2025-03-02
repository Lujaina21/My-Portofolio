import React, { useEffect } from "react";
import "./Contact.module.css";
import contactStyles from "./Contact.module.css";
import telImg from "./../../assets/telhand.png";

export default function Contact() {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <>
      <div className="bg-light standard-ht sm:ml-64">
        <h1 className="main-title py-4 px-10 w-full">Contact</h1>
        <div className="p-10 default-font">
          <ul className="pl-5">
            {/* Email */}
            <li
              className={`${contactStyles.contact1} flex items-center gap-4 my-10`}
            >
              <div>
                <button
                  data-tooltip-target="tooltip-email"
                  type="button"
                  className="text-center"
                >
                  <div className="icon flex items-center content-center justify-center bg-gray-500 rounded-full w-16 h-16">
                    <i className="fa-solid fa-envelope text-3xl drop-shadow-2xl text-white"></i>
                  </div>
                </button>
                <div
                  id="tooltip-email"
                  role="tooltip"
                  className=" absolute z-10 invisible inline-block px-3 py-2 text-md font-medium text-white transition-opacity duration-300 bg-gray-800 rounded-full shadow-xs opacity-0 tooltip"
                >
                  Email
                </div>
              </div>
              <div>
                <a
                  href="mailto:lujynawalid21@gmail.com"
                  className={`${contactStyles.link} relative pb-2 transition-all duration-300 txt-main font-bold tracking-wider text-lg`}
                >
                  lujynawalid21@gmail.com
                </a>
              </div>
            </li>

            {/* linkedin */}
            <li
              className={`${contactStyles.contact2} flex items-center gap-4 my-10`}
            >
              <div>
                <button
                  data-tooltip-target="tooltip-linkedin"
                  type="button"
                  className="text-center"
                >
                  <div className="icon flex items-center content-center justify-center bg-gray-500 rounded-full w-16 h-16">
                    <i className="fa-brands fa-linkedin-in text-3xl drop-shadow-2xl text-white"></i>
                  </div>
                </button>
                <div
                  id="tooltip-linkedin"
                  role="tooltip"
                  className=" absolute z-10 invisible inline-block px-3 py-2 text-md font-medium text-white transition-opacity duration-300 bg-gray-800 rounded-full shadow-xs opacity-0 tooltip"
                >
                  LinkedIn
                </div>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/lujaina-walid-447b14242/"
                  className={`${contactStyles.link} relative pb-2 transition-all duration-300 txt-main font-bold tracking-wider text-lg`}
                >
                  https://www.linkedin.com/in/lujaina-walid-447b14242/
                </a>
              </div>
            </li>

            {/* github */}
            <li
              className={`${contactStyles.contact3} flex items-center gap-4 my-10`}
            >
              <div>
                <button
                  data-tooltip-target="tooltip-github"
                  type="button"
                  className="text-center"
                >
                  <div className="icon flex items-center content-center justify-center bg-gray-500 rounded-full w-16 h-16">
                    <i className="fa-brands fa-github drop-shadow-2xl text-white text-3xl"></i>
                  </div>
                </button>
                <div
                  id="tooltip-github"
                  role="tooltip"
                  className=" absolute z-10 invisible inline-block px-3 py-2 text-md font-medium text-white transition-opacity duration-300 bg-gray-800 rounded-full shadow-xs opacity-0 tooltip"
                >
                  GitHub
                </div>
              </div>
              <div>
                <a
                  href="https://github.com/Lujaina21"
                  className={`${contactStyles.link} relative pb-2 transition-all duration-300 txt-main font-bold tracking-wider text-lg`}
                >
                  https://github.com/Lujaina21
                </a>
              </div>
            </li>
          </ul>

          <div className="flex justify-end">
            <img
              src={telImg}
              alt="Hand Telephone Img"
              className="w-60 mt-0 md:-mt-60"
            />
          </div>
        </div>
      </div>
    </>
  );
}
