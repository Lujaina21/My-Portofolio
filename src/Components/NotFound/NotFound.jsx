import React from "react";
import notFoundStyles from "./NotFound.module.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className=" sm:ml-72 bg-light standard-ht">
        <h1 className="main-title py-4 px-10 w-full">Not Found</h1>
        <div className="p-10 cool-font">
          <div className="flex flex-col gap-6 justify-center items-center mt-28">
            <h2 className="text-center txt-main font-bold text-4xl tracking-wider">
              Oops! The page you're looking for doesn't exist.
            </h2>
            <button
              className={`px-4 py-3 text-xl w-44 rounded-full ${notFoundStyles.btn} font-bold tracking-widest`}
            >
              <Link to="home">Home</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
