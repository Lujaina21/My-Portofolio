import React, { useState } from "react";
import sidebarStyles from "./Sidebar.module.css";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-md txt-main rounded-full sm:hidden hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
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
        className={`${
          sidebarStyles.aside
        } fixed top-0 left-0 z-40 w-72 h-screen transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-secondary shadow-lg">
          <Link
            to="/"
            className={`${sidebarStyles.icon} flex flex-col items-center border-b-2 pb-3`}
          >
            <span className="text-3xl font-semibold">Lujaina Walid</span>
            <small className="italic text-md font-semibold">
              Frontend Developer
            </small>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className={`${sidebarStyles.icon} absolute top-4 right-1 lg:hidden sm:block`}
          >
            <i className="fa-solid fa-xmark text-3xl"></i>
          </button>

          <ul className="space-y-2 font-medium mt-5">
            {[
              { to: "home", icon: "fa-house", label: "Home" },
              { to: "about", icon: "fa-user", label: "About" },
              { to: "projects", icon: "fa-images", label: "Projects" },
              {
                to: "experience",
                icon: "fa-arrow-trend-up",
                label: "Experience",
              },
              { to: "skills", icon: "fa-chart-simple", label: "Skills" },
              { to: "education", icon: "fa-user-graduate", label: "Education" },
              { to: "contact", icon: "fa-envelope", label: "Contact" },
              { to: "resume", icon: "fa-scroll", label: "Resume" },
            ].map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `${
                      sidebarStyles.navlink
                    } flex items-center m-4 py-2 rounded-lg group ${
                      isActive ? sidebarStyles.active : ""
                    }`
                  }
                >
                  <i className={`fa-solid ${item.icon}`}></i>
                  <span className="ms-3">{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
