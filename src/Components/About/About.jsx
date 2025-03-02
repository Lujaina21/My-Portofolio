import React from "react";

export default function About() {
  const details = [
    { label: "City", value: "Alexandria, Egypt" },
    { label: "Degree", value: "Bachelor's degree in Computer Science" },
    {
      label: "Education",
      value:
        "Graduated from Faculty of Computers and Information Technology, Damanhour University",
    },
    { label: "Birthdate", value: "21-10-2001" },
    { label: "Age", value: "23" },
  ];
  return (
    <>
      <div className=" sm:ml-64 bg-light standard-ht">
        <h1 className="main-title py-4 px-10 w-full">About</h1>
        <div className="p-10 default-font">
          <h2 className="txt-main text-xl font-bold  mb-5 tracking-wide">
            - A passionate fronted developer using{" "}
            <span className="border-b-2 border-gray-500 hover:italic">
              <a
                href="https://react.dev/learn/react-developer-tools"
                target="_blank"
              >
                React.JS
              </a>
            </span>{" "}
            as a framework, and currently focus on{" "}
            <span className="border-b-2 border-gray-500 hover:italic">
              <a href="https://nextjs.org/" target="_blank">
                Next.JS
              </a>
            </span>
            .
          </h2>
          <div className="transition-transform transform animate-slideInX">
            <ul className="text-lg">
              {details.map((item, index) => (
                <li key={index} className="my-4">
                  <i className="fas fa-chevron-right txt-main"></i>
                  <strong className="ms-3 text-gray-700">{item.label}</strong>
                  <span className="mx-3 font-bold txt-main">:</span>
                  <span className="italic typing-font">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
