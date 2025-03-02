import React from "react";
import sidebarStyles from "./Sidebar.module.css";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-md txt-main rounded-full sm:hidden hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        className={`${sidebarStyles.aside} fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-secondary shadow-lg dark:bg-gray-800">
          <Link
            to="/"
            className={`${sidebarStyles.icon} border-gray-300 border-b-2 flex flex-col items-center content-center ps-2.5 mb-3 p-5`}
          >
            <span className="text-3xl self-center font-semibold whitespace-nowrap mb-2 dark:text-white">
              Lujaina Walid
            </span>
            <small className="self-center italic text-md font-semibold whitespace-nowrap dark:text-white">
              Frontend Developer
            </small>
          </Link>
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink
                to="home"
                className={({ isActive }) =>
                  `${
                    sidebarStyles.navlink
                  } flex items-center m-4 py-2 rounded-lg dark:text-white group ${
                    isActive ? sidebarStyles.active : ""
                  }`
                }
              >
                <i className="fa-solid fa-house"></i>
                <span className="ms-3">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  `${
                    sidebarStyles.navlink
                  } flex items-center m-4 py-2 rounded-lg dark:text-white group ${
                    isActive ? sidebarStyles.active : ""
                  }`
                }
              >
                <i className="fa-solid fa-user"></i>
                <span className="ms-3">About</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="projects"
                className={({ isActive }) =>
                  `${
                    sidebarStyles.navlink
                  } flex items-center m-4 py-2 rounded-lg dark:text-white group ${
                    isActive ? sidebarStyles.active : ""
                  }`
                }
              >
                <i className="fa-solid fa-images"></i>
                <span className="ms-3">Projects</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="experience"
                className={({ isActive }) =>
                  `${
                    sidebarStyles.navlink
                  } flex items-center m-4 py-2 rounded-lg dark:text-white group ${
                    isActive ? sidebarStyles.active : ""
                  }`
                }
              >
                <i className="fa-solid fa-arrow-trend-up"></i>
                <span className="ms-3">Experience</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="skills"
                className={({ isActive }) =>
                  `${
                    sidebarStyles.navlink
                  } flex items-center m-4 py-2 rounded-lg dark:text-white group ${
                    isActive ? sidebarStyles.active : ""
                  }`
                }
              >
                <i className="fa-solid fa-chart-simple"></i>
                <span className="ms-3">Skills</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="education"
                className={({ isActive }) =>
                  `${
                    sidebarStyles.navlink
                  } flex items-center m-4 py-2 rounded-lg dark:text-white group ${
                    isActive ? sidebarStyles.active : ""
                  }`
                }
              >
                <i className="fa-solid fa-user-graduate"></i>
                <span className="ms-3">Education</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  `${
                    sidebarStyles.navlink
                  } flex items-center m-4 py-2 rounded-lg dark:text-white group ${
                    isActive ? sidebarStyles.active : ""
                  }`
                }
              >
                <i className="fa-solid fa-envelope"></i>
                <span className="ms-3">Contact</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="resume"
                className={({ isActive }) =>
                  `${
                    sidebarStyles.navlink
                  } flex items-center m-4 py-2 rounded-lg dark:text-white group ${
                    isActive ? sidebarStyles.active : ""
                  }`
                }
              >
                <i className="fa-solid fa-scroll"></i>
                <span className="ms-3">Resume</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>

      {/* <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center h-48 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              <svg
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
