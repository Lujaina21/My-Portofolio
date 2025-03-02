import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import NotFound from "./Components/NotFound/NotFound";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Resume from "./Components/Resume/Resume";
import Blog from "./Components/Blog/Blog";

function App() {
  let routes = createBrowserRouter([
    {
      index: true,
      element: <Blog />,
    },
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "education",
          element: <Education />,
        },
        {
          path: "skills",
          element: <Skills />,
        },
        {
          path: "experience",
          element: <Experience />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "resume",
          element: <Resume />,
        },

        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
      {/* <Toaster position="top-right" reverseOrder={true} /> */}
    </>
  );
}

export default App;
