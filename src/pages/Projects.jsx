import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PiArrowBendRightDownBold } from "react-icons/pi";
import { motion } from "framer-motion";
export default function Projects(props) {
  const [projects, setProjects] = useState([]);
  const [hoveredProject, setHoveredProject] = useState({});
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  async function getProjects() {
    const res = await fetch("/api/projects");
    const data = await res.json();
    return data.projects;
  }

  useEffect(() => {
    async function loadProjects() {
      setLoading(true);
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (err) {
        setErr(err);
      } finally {
        setLoading(false);
      }
    }
    loadProjects();
  }, []);

  function mouseEnter(e) {
    if (e.target.dataset.hover) {
      setHoveredProject(
        projects.filter((project) => project.id == e.target.dataset.hover)[0]
      );
    }
  }
  function mouseLeave() {
    setHoveredProject({});
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }
  const projectElements = (
    props.featured ? projects.slice(0, 3) : projects
  ).map((project) => (
    <Link key={project.id} to={`/projects/${project.id}`}>
      <div
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        key={project.id}
        className="project--tile"
        data-hover={project.id}
      >
        <img
          className="project--img"
          src={project.imageUrl}
          data-hover={project.id}
          alt={`snapshot of ${project.name} project`}
        />
        <div>
          <div className="project--info">
            {" "}
            {project.id == hoveredProject.id ? (
              <div className="project--text">
                <h3>{project.name}</h3>
                <h5>{project.type[0]}</h5>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Link>
  ));
  return projects ? (
    <motion.div
      className="project--list--container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <h1 className={props.featured ? "featured" : ""}>
        {props.featured ? "Some of my latest work" : "Explore my projects"}
      </h1>
      <h3>
        hover and click to find out more{" "}
        <PiArrowBendRightDownBold className="arrow--icon" />
      </h3>
      <div className="project--list">{projectElements}</div>
    </motion.div>
  ) : null;
}
