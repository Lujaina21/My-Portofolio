import React from "react";
import resumeStyles from "./Resume.module.css";

export default function Resume() {
  function handlePreview() {
    window.open(
      "https://drive.google.com/file/d/1IqPe_I2CQQr4ZrtsFrAyO78SQa8ByB_u/view?usp=sharing",
      "_blank"
    );
  }
  const prevPDF =
    "https://drive.google.com/file/d/1IqPe_I2CQQr4ZrtsFrAyO78SQa8ByB_u/preview";

  return (
    <>
      <div className=" sm:ml-72 bg-light standard-ht default-font">
        <h1 className="main-title py-4 px-10 w-full">Resume</h1>
        <div className="p-14">
          <div className={`mb-7 ${resumeStyles.btn}`}>
            <button
              className="font-bold w-auto inline-block tracking-wide text-center px-8 py-2"
              onClick={handlePreview}
            >
              Preview <i className="fa-solid fa-magnifying-glass ms-1"></i>
            </button>
          </div>
          <iframe src={prevPDF} className="w-full h-screen" frameborder="0" />
        </div>
      </div>
    </>
  );
}
