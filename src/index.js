import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Projects from "./components/Projects.jsx";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Wrapping all routes with the App component */}
        <Route path="/" element={<App />}>
          {/* Nested routes will be rendered inside App's Outlet */}
          <Route index element={<MainPage />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="work" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
