import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="typing-font standard-ht sm:ml-64 p-10 bg-light">
        <div className="bg-gray-800 text-white w-full p-6 rounded-lg shadow-lg relative transition-transform transform animate-slideIn">
          {/* Browser Bar */}
          <div className="bg-gray-700 h-6 w-full rounded-t-lg flex items-center px-3 space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          {/* Content */}
          <div className="text-center mt-6">
            <div className="text-4xl mb-4 flex flex-col justify-center items-center">
              <span className="text-sky-300 text-5xl mr-2 mb-5">&lt;/&gt;</span>
              <h1 className="font-bold my-4 tracking-wide text-gray-50 shadow-xl">
                I am a Front-End Developer
              </h1>
              <p className="text-[19px] tracking-wide text-gray-100 my-6">
                A passionate{" "}
                <span className="font-bold text-[#7DD3FC]">React.JS</span>{" "}
                Developer dedicated to building modern, interactive, and
                user-friendly web applications. I specialize in creating
                responsive designs with clean, efficient code. With a strong
                foundation in{" "}
                <span className="font-bold text-[#7DD3FC]">JavaScript</span> ,{" "}
                <span className="font-bold text-[#7DD3FC]">React</span> , and{" "}
                <span className="font-bold text-[#7DD3FC]">Front-End</span>{" "}
                technologies, I love solving complex problems and transforming
                ideas into functional and beautiful digital products. Let's
                create something amazing together! 🚀
              </p>
            </div>
            <div className="flex flex-row justify-center my-4">
              <p>Contact me directly?</p>
              <Link
                to="/contact"
                className="ms-2 hover:tracking-wider transition-all duration-300 text-[#7DD3FC] shadow-lg"
              >
                Click Here <i className="fa-solid fa-comment ms-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
