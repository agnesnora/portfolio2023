import "./App.css";
import "./server";
import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Layout from "../src/components/Layout";
import Contact from "../src/pages/Contact";

import Projects from "./pages/Projects";
import ProjectsDetail from "./pages/ProjectsDetail";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectsDetail />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Route>
      </Routes>

      {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>
);

// );
