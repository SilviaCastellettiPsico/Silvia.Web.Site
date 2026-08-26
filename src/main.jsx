import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fontsource/raleway/300.css"; // Specify weight
import "@fontsource/raleway/300-italic.css"; // Specify weight and style
import "@fontsource/raleway/600.css"; // Specify weight
import "@fontsource/raleway/600-italic.css"; // Specify weight and style
import "./globalStyles/global.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
