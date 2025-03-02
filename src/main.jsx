import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "./../node_modules/flowbite";
import "./../node_modules/flowbite/dist/flowbite.min.js";
import "./../node_modules/flowbite/dist/flowbite.min.css";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
