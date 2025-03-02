import React, { useEffect } from "react";
import projectStyles from "./Projects.module.css";
import hc1 from "./../../assets/Projects Imgs/hc1.png";
import hc2 from "./../../assets/Projects Imgs/hc2.png";
import hc3 from "./../../assets/Projects Imgs/hc3.png";
import hc4 from "./../../assets/Projects Imgs/hc4.png";
import gradImg from "./../../assets/Projects Imgs/grad.png";
import react1 from "./../../assets/Projects Imgs/react1.png";
import react2 from "./../../assets/Projects Imgs/react2.png";
import react3 from "./../../assets/Projects Imgs/react3.png";
import js1 from "./../../assets/Projects Imgs/js1.png";
import js2 from "./../../assets/Projects Imgs/js2.png";
import js3 from "./../../assets/Projects Imgs/js3.png";
import js4 from "./../../assets/Projects Imgs/js4.png";
import js5 from "./../../assets/Projects Imgs/js5.png";
import js6 from "./../../assets/Projects Imgs/js6.png";

export default function Projects() {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <>
      <div className="sm:ml-64 bg-light standard-ht">
        <h1 className="main-title py-4 px-10 w-full">Projects</h1>
        <div className="p-10 default-font">
          <div class="mb-4">
            <ul
              className="flex flex-wrap justify-center -mb-px text-sm font-medium gap-1 text-center"
              id="default-styled-tab"
              data-tabs-toggle="#default-styled-tab-content"
              data-tabs-active-classes="text-xl hover:text-blue-400 text-blue-400 border-blue-400"
              data-tabs-inactive-classes="transition-all duration-500 text-lg text-gray-500 hover:text-blue-400 border-gray-100 hover:border-blue-400"
              role="tablist"
            >
              {/* HTML CSS Tab */}
              <li className="me-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="htmlcss-styled-tab"
                  data-tabs-target="#styled-htmlcss"
                  type="button"
                  role="tab"
                  aria-controls="htmlcss"
                  aria-selected="false"
                >
                  HTML & CSS
                </button>
              </li>

              {/* JS Tab */}
              <li className="me-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="javascript-styled-tab"
                  data-tabs-target="#styled-javascript"
                  type="button"
                  role="tab"
                  aria-controls="javascript"
                  aria-selected="false"
                >
                  JavaScript
                </button>
              </li>

              {/* ReactJs Tab */}
              <li role="presentation">
                <button
                  class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="react-styled-tab"
                  data-tabs-target="#styled-react"
                  type="button"
                  role="tab"
                  aria-controls="react"
                  aria-selected="false"
                >
                  React.JS
                </button>
              </li>
            </ul>
          </div>

          <div id="default-styled-tab-content">
            {/* HTML & CSS Content */}
            <div
              class="hidden p-4 rounded-lg bg-light"
              id="styled-htmlcss"
              role="tabpanel"
              aria-labelledby="htmlcss-tab"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div
                  className={`${projectStyles.box} max-w-sm bg-white rounded-lg shadow-md`}
                >
                  <div className={`relative ${projectStyles.boxImg}`}>
                    <img
                      className={`rounded-t-lg`}
                      src={gradImg}
                      alt="Graduation Project Img"
                    />
                    <div
                      className={`absolute w-full h-full ${projectStyles.layer}`}
                    >
                      <div
                        className={`${projectStyles.gitIcons} flex gap-5 justify-center translate-y-12`}
                      >
                        <div>
                          <a
                            href="https://lujaina21.github.io/EgyXplore/"
                            target="_blank"
                          >
                            <i class="fa-solid fa-up-right-from-square text-white drop-shadow-lg text-3xl"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://github.com/Lujaina21/EgyXplore"
                            target="_blank"
                          >
                            <i class="fa-brands fa-github text-white text-3xl drop-shadow-lg"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <a
                      href="https://github.com/Lujaina21/EgyXplore"
                      target="_blank"
                    >
                      <h5 className="mb-2 text-xl font-bold tracking-wide txt-main hover:underline">
                        EgyXplore (All in one tourism app)
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700">
                      My graduation project is a tourism website developed using
                      HTML, CSS, and basic JavaScript for dynamic functionality.
                    </p>
                  </div>
                </div>

                <div
                  className={`${projectStyles.box} max-w-sm bg-white rounded-lg shadow-md`}
                >
                  <div className={`relative ${projectStyles.boxImg}`}>
                    <img
                      className={`rounded-t-lg`}
                      src={hc1}
                      alt="Devfolio landing page Img"
                    />
                    <div
                      className={`absolute w-full h-full ${projectStyles.layer}`}
                    >
                      <div
                        className={`${projectStyles.gitIcons} flex gap-5 justify-center translate-y-12`}
                      >
                        <div>
                          <a
                            href="https://lujaina21.github.io/DevFolio/"
                            target="_blank"
                          >
                            <i class="fa-solid fa-up-right-from-square text-white drop-shadow-lg text-3xl"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://github.com/Lujaina21/DevFolio"
                            target="_blank"
                          >
                            <i class="fa-brands fa-github text-white text-3xl drop-shadow-lg"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <a
                      href="https://github.com/Lujaina21/DevFolio"
                      target="_blank"
                    >
                      <h5 className="mb-2 text-xl font-bold tracking-wide txt-main hover:underline">
                        DevFolio
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700">
                      Portofolio landing page built with Bootstrap.
                    </p>
                  </div>
                </div>

                <div
                  className={`${projectStyles.box} max-w-sm bg-white rounded-lg shadow-md`}
                >
                  <div className={`relative ${projectStyles.boxImg}`}>
                    <img
                      className={`rounded-t-lg`}
                      src={hc2}
                      alt="Daniels portofolio section Img"
                    />
                    <div
                      className={`absolute w-full h-full ${projectStyles.layer}`}
                    >
                      <div
                        className={`${projectStyles.gitIcons} flex gap-5 justify-center translate-y-12`}
                      >
                        <div>
                          <a
                            href="https://lujaina21.github.io/Daniels/"
                            target="_blank"
                          >
                            <i class="fa-solid fa-up-right-from-square text-white drop-shadow-lg text-3xl"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://github.com/Lujaina21/Daniels"
                            target="_blank"
                          >
                            <i class="fa-brands fa-github text-white text-3xl drop-shadow-lg"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <a
                      href="https://github.com/Lujaina21/Daniels"
                      target="_blank"
                    >
                      <h5 className="mb-2 text-xl font-bold tracking-wide txt-main hover:underline">
                        Daniels Website
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700">
                      Portofolio landing page built with Bootstrap and some
                      animations.
                    </p>
                  </div>
                </div>

                <div
                  className={`${projectStyles.box} max-w-sm bg-white rounded-lg shadow-md`}
                >
                  <div className={`relative ${projectStyles.boxImg}`}>
                    <img
                      className={`rounded-t-lg`}
                      src={hc3}
                      alt="Cyber Security home page Img"
                    />
                    <div
                      className={`absolute w-full h-full ${projectStyles.layer}`}
                    >
                      <div
                        className={`${projectStyles.gitIcons} flex gap-5 justify-center translate-y-12`}
                      >
                        <div>
                          <a
                            href="https://lujaina21.github.io/Cyber-Security-template/"
                            target="_blank"
                          >
                            <i class="fa-solid fa-up-right-from-square text-white drop-shadow-lg text-3xl"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://github.com/Lujaina21/Cyber-Security-template"
                            target="_blank"
                          >
                            <i class="fa-brands fa-github text-white text-3xl drop-shadow-lg"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <a
                      href="https://github.com/Lujaina21/Cyber-Security-template"
                      target="_blank"
                    >
                      <h5 className="mb-2 text-xl font-bold tracking-wide txt-main hover:underline">
                        Cyber Security template website
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700">
                      Website built using HTML and CSS, featuring multiple pages
                      but without responsiveness.
                    </p>
                  </div>
                </div>

                <div
                  className={`${projectStyles.box} max-w-sm bg-white rounded-lg shadow-md`}
                >
                  <div className={`relative ${projectStyles.boxImg}`}>
                    <img
                      className={`rounded-t-lg`}
                      src={hc4}
                      alt="Mealify landing page Img"
                    />
                    <div
                      className={`absolute w-full h-full ${projectStyles.layer}`}
                    >
                      <div
                        className={`${projectStyles.gitIcons} flex gap-5 justify-center translate-y-12`}
                      >
                        <div>
                          <a
                            href="https://lujaina21.github.io/Mealify/"
                            target="_blank"
                          >
                            <i class="fa-solid fa-up-right-from-square text-white text-3xl drop-shadow-lg"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://github.com/Lujaina21/Mealify"
                            target="_blank"
                          >
                            <i class="fa-brands fa-github text-white text-3xl drop-shadow-lg"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <a
                      href="https://github.com/Lujaina21/Mealify"
                      target="_blank"
                    >
                      <h5 className="mb-2 text-xl font-bold tracking-wide txt-main hover:underline">
                        Mealify Website
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700">
                      Developed using HTML, CSS, and Media Queries, featuring
                      animations for an enhanced user experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* JS Content */}
            <div
              class="hidden p-4 rounded-lg bg-light dark:bg-gray-800"
              id="styled-javascript"
              role="tabpanel"
              aria-labelledby="javascript-tab"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div
                  className={`${projectStyles.box} max-w-sm bg-white rounded-lg shadow-md`}
                >
                  <div className={`relative ${projectStyles.boxImg}`}>
                    <img
                      className={`rounded-t-lg`}
                      src={js1}
                      alt="Online Games website Img"
                    />
                    <div
                      className={`absolute w-full h-full ${projectStyles.layer}`}
                    >
                      <div
                        className={`${projectStyles.gitIcons} flex gap-5 justify-center translate-y-12`}
                      >
                        <div>
                          <a
                            href="https://lujaina21.github.io/Online-Games/"
                            target="_blank"
                          >
                            <i class="fa-solid fa-up-right-from-square text-white drop-shadow-lg text-3xl"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://github.com/Lujaina21/Online-Games"
                            target="_blank"
                          >
                            <i class="fa-brands fa-github text-white text-3xl drop-shadow-lg"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <a
                      href="https://github.com/Lujaina21/Online-Games"
                      target="_blank"
                    >
                      <h5 className="mb-2 text-xl font-bold tracking-wide txt-main hover:underline">
                        Onine Games
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700">
                      A web-based application for browsing and viewing details
                      of online games from the Free-to-Play Games Database API.
                      Users can filter games by category, view game details, and
                      navigate seamlessly between the main games list and
                      individual game details.
                    </p>
                  </div>
                </div>

                <div
                  className={`${projectStyles.box} max-w-sm bg-white rounded-lg shadow-md`}
                >
                  <div className={`relative ${projectStyles.boxImg}`}>
                    <img
                      className={`rounded-t-lg`}
                      src={js2}
                      alt="Weather Forecast website Img"
                    />
                    <div
                      className={`absolute w-full h-full ${projectStyles.layer}`}
                    >
                      <div
                        className={`${projectStyles.gitIcons} flex gap-5 justify-center translate-y-12`}
                      >
                        <div>
                          <a
                            href="https://lujaina21.github.io/Weather-Forecast/"
                            target="_blank"
                          >
                            <i class="fa-solid fa-up-right-from-square text-white drop-shadow-lg text-3xl"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://github.com/Lujaina21/Weather-Forecast"
                            target="_blank"
                          >
                            <i class="fa-brands fa-github text-white text-3xl drop-shadow-lg"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <a
                      href="https://github.com/Lujaina21/Weather-Forecast"
                      target="_blank"
                    >
                      <h5 className="mb-2 text-xl font-bold tracking-wide txt-main hover:underline">
                        Live Weather Forecast
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700">
                      A web-based tool using weather API that provides accurate
                      and up-to-date weather information for any city in the
                      world. Users can view a three-day weather forecast with
                      details such as temperature, humidity, wind speed, and
                      more.
                    </p>
                  </div>
                </div>

                <div
                  className={`${projectStyles.box} max-w-sm bg-white rounded-lg shadow-md`}
                >
                  <div className={`relative ${projectStyles.boxImg}`}>
                    <img
                      className={`rounded-t-lg`}
                      src={js3}
                      alt="Smart Login website Img"
                    />
                    <div
                      className={`absolute w-full h-full ${projectStyles.layer}`}
                    >
                      <div
                        className={`${projectStyles.gitIcons} flex gap-5 justify-center translate-y-12`}
                      >
                        <div>
                          <a
                            href="https://lujaina21.github.io/Smart-Login/"
                            target="_blank"
                          >
                            <i class="fa-solid fa-up-right-from-square text-white drop-shadow-lg text-3xl"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://github.com/Lujaina21/Smart-Login"
                            target="_blank"
                          >
                            <i class="fa-brands fa-github text-white text-3xl drop-shadow-lg"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <a
                      href="https://github.com/Lujaina21/Smart-Login"
                      target="_blank"
                    >
                      <h5 className="mb-2 text-xl font-bold tracking-wide txt-main hover:underline">
                        Smart Login
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700">
                      Login and Signup page implemented using JavaScript,
                      featuring validations and regular expressions.
                    </p>
                  </div>
                </div>

                <div
                  className={`${projectStyles.box} max-w-sm bg-white rounded-lg shadow-md`}
                >
                  <div className={`relative ${projectStyles.boxImg}`}>
                    <img
                      className={`rounded-t-lg`}
                      src={js4}
                      alt="Bookmarker website Img"
                    />
                    <div
                      className={`absolute w-full h-full ${projectStyles.layer}`}
                    >
                      <div
                        className={`${projectStyles.gitIcons} flex gap-5 justify-center translate-y-12`}
                      >
                        <div>
                          <a
                            href="https://lujaina21.github.io/Bookmarker/"
                            target="_blank"
                          >
                            <i class="fa-solid fa-up-right-from-square text-white drop-shadow-lg text-3xl"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://github.com/Lujaina21/Bookmarker"
                            target="_blank"
                          >
                            <i class="fa-brands fa-github text-white text-3xl drop-shadow-lg"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <a
                      href="https://github.com/Lujaina21/Bookmarker"
                      target="_blank"
                    >
                      <h5 className="mb-2 text-xl font-bold tracking-wide txt-main hover:underline">
                        Bookmarker
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700">
                      The Bookmarker Website is a user-friendly tool for saving
                      and organizing bookmarks. With a simple and intuitive
                      interface, users can add a site name and link, view a list
                      of saved bookmarks, and store them locally.
                    </p>
                  </div>
                </div>

                <div
                  className={`${projectStyles.box} max-w-sm bg-white rounded-lg shadow-md`}
                >
                  <div className={`relative ${projectStyles.boxImg}`}>
                    <img
                      className={`rounded-t-lg`}
                      src={js5}
                      alt="Smart Login website Img"
                    />
                    <div
                      className={`absolute w-full h-full ${projectStyles.layer}`}
                    >
                      <div
                        className={`${projectStyles.gitIcons} flex gap-5 justify-center translate-y-12`}
                      >
                        <div>
                          <a
                            href="https://lujaina21.github.io/Current-Clock/"
                            target="_blank"
                          >
                            <i class="fa-solid fa-up-right-from-square text-white drop-shadow-lg text-3xl"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://github.com/Lujaina21/Current-Clock"
                            target="_blank"
                          >
                            <i class="fa-brands fa-github text-white text-3xl drop-shadow-lg"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <a
                      href="https://github.com/Lujaina21/Current-Clock"
                      target="_blank"
                    >
                      <h5 className="mb-2 text-xl font-bold tracking-wide txt-main hover:underline">
                        Current Clock
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700">
                      A simple website that displays the current time in
                      real-time.
                    </p>
                  </div>
                </div>

                <div
                  className={`${projectStyles.box} max-w-sm bg-white rounded-lg shadow-md`}
                >
                  <div className={`relative ${projectStyles.boxImg}`}>
                    <img
                      className={`rounded-t-lg`}
                      src={js6}
                      alt="Quotes Generator website Img"
                    />
                    <div
                      className={`absolute w-full h-full ${projectStyles.layer}`}
                    >
                      <div
                        className={`${projectStyles.gitIcons} flex gap-5 justify-center translate-y-12`}
                      >
                        <div>
                          <a
                            href="https://lujaina21.github.io/Quotes-Qenerator/"
                            target="_blank"
                          >
                            <i class="fa-solid fa-up-right-from-square text-white drop-shadow-lg text-3xl"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://github.com/Lujaina21/Quotes-Qenerator"
                            target="_blank"
                          >
                            <i class="fa-brands fa-github text-white text-3xl drop-shadow-lg"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <a
                      href="https://github.com/Lujaina21/Quotes-Qenerator"
                      target="_blank"
                    >
                      <h5 className="mb-2 text-xl font-bold tracking-wide txt-main hover:underline">
                        Quotes Generator
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700">
                      A simple and interactive Quote Generator built with JS.
                      The application randomly displays a quote from a
                      predefined list of quotes each time the user clicks the
                      "Another Quote" button.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* React Content */}
            <div
              class="hidden p-4 rounded-lg bg-light dark:bg-gray-800"
              id="styled-react"
              role="tabpanel"
              aria-labelledby="react-tab"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div
                  className={`${projectStyles.box} max-w-sm bg-white rounded-lg shadow-md`}
                >
                  <div className={`relative ${projectStyles.boxImg}`}>
                    <img
                      className={`rounded-t-lg`}
                      src={react1}
                      alt="Start of framework home page Img"
                    />
                    <div
                      className={`absolute w-full h-full ${projectStyles.layer}`}
                    >
                      <div
                        className={`${projectStyles.gitIcons} flex gap-5 justify-center translate-y-12`}
                      >
                        <div>
                          <a
                            href="https://start-of-framework.vercel.app/"
                            target="_blank"
                          >
                            <i class="fa-solid fa-up-right-from-square text-white drop-shadow-lg text-3xl"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://github.com/Lujaina21/Start-of-Framework"
                            target="_blank"
                          >
                            <i class="fa-brands fa-github text-white text-3xl drop-shadow-lg"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <a
                      href="https://github.com/Lujaina21/Start-of-Framework"
                      target="_blank"
                    >
                      <h5 className="mb-2 text-xl font-bold tracking-wide txt-main hover:underline">
                        Simple Website
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700">
                      Simple React.JS design for Routing and Single Page
                      Application.
                    </p>
                  </div>
                </div>

                <div
                  className={`${projectStyles.box} max-w-sm bg-white rounded-lg shadow-md`}
                >
                  <div className={`relative ${projectStyles.boxImg}`}>
                    <img
                      className={`rounded-t-lg`}
                      src={react2}
                      alt="Recipes home page Img"
                    />
                    <div
                      className={`absolute w-full h-full ${projectStyles.layer}`}
                    >
                      <div
                        className={`${projectStyles.gitIcons} flex gap-5 justify-center translate-y-12`}
                      >
                        <div>
                          <a
                            href="https://meals-recipes.vercel.app/"
                            target="_blank"
                          >
                            <i class="fa-solid fa-up-right-from-square text-white drop-shadow-lg text-3xl"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://github.com/Lujaina21/Meals-Recipes"
                            target="_blank"
                          >
                            <i class="fa-brands fa-github text-white text-3xl drop-shadow-lg"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <a
                      href="https://github.com/Lujaina21/Meals-Recipes"
                      target="_blank"
                    >
                      <h5 className="mb-2 text-xl font-bold tracking-wide txt-main hover:underline">
                        Meals Recipes
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700">
                      A React.js-based web application that allows users to
                      explore various meal recipes with detailed instructions
                      and ingredients. Built with React Router DOM for seamless
                      navigation, Axios for fetching recipe data, and state
                      management using Context API. The UI is crafted with Sass
                      & Tailwind CSS, ensuring a modern, responsive, and
                      visually appealing user experience across all devices.
                    </p>
                  </div>
                </div>

                <div
                  className={`${projectStyles.box} max-w-sm bg-white rounded-lg shadow-md`}
                >
                  <div className={`relative ${projectStyles.boxImg}`}>
                    <img
                      className={`rounded-t-lg`}
                      src={react3}
                      alt="Fresh Market home page Img"
                    />
                    <div
                      className={`absolute w-full h-full ${projectStyles.layer}`}
                    >
                      <div
                        className={`${projectStyles.gitIcons} flex gap-5 justify-center translate-y-12`}
                      >
                        <div>
                          <a
                            href="https://fresh-market-seven.vercel.app/"
                            target="_blank"
                          >
                            <i class="fa-solid fa-up-right-from-square text-white drop-shadow-lg text-3xl"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://github.com/Lujaina21/Fresh-Market"
                            target="_blank"
                          >
                            <i class="fa-brands fa-github text-white text-3xl drop-shadow-lg"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <a
                      href="https://github.com/Lujaina21/Fresh-Market"
                      target="_blank"
                    >
                      <h5 className="mb-2 text-xl font-bold tracking-wide txt-main hover:underline">
                        Fresh Cart
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700">
                      Developed a full-featured eCommerce app using React.js
                      during my internship in Route to enhance my skills.
                      Implemented React Query for data fetching, Redux & Context
                      API for state management, and React Router for navigation.
                      Used Axios for API requests, React Spinners for loading
                      states, and React DevTools for debugging. Designed a
                      modern UI with Styled Components, Tailwind CSS, and Slick
                      Sliders, while ensuring robust form validation with Yup &
                      Formik. Integrated React Hot Toast for user notifications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
