import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [hoveredProject, setHoveredProject] = useState({});

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data.projects));
  }, []);

  function mouseEnter(e) {
    setHoveredProject(
      projects.filter((project) => project.id == e.target.dataset.hover)[0]
    );
  }
  function mouseLeave() {
    setHoveredProject({});
  }

  const projectElements = projects.map((project) => (
    <Link key={project.id} to={`/projects/${project.id}`}>
      <div
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        key={project.id}
        className="project--tile"
        data-hover={project.id}
        style={
          project.id == hoveredProject.id ? { backgroundColor: "red" } : null
        }
      >
        <img src={project.imageUrl} data-hover={project.id} />
        <div className="project--info">
          {project.id == hoveredProject.id ? <h3>{project.name}</h3> : null}
        </div>
        <i className={`project--type ${project.type} selected`}>
          {project.type}
        </i>
      </div>
    </Link>
  ));
  return (
    <div className="project--list--container">
      <h1>Explore my works</h1>
      <div className="project--list">{projectElements}</div>
    </div>
  );
}
