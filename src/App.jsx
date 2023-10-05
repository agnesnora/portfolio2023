import "./App.css";
import "./server";
import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Header from "./components/Header";
import Projects from "./pages/Projects";
import ProjectsDetail from "./pages/ProjectsDetail";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <header>
        <Header />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectsDetail />} />
      </Routes>
      {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>
);
