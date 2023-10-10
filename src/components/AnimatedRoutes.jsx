import { useLocation, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import ProjectsDetail from "../pages/ProjectsDetail";
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectsDetail />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
