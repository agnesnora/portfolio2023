import { useState, useEffect } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data.projects));
  }, []);

  const projectElements = projects.map((project) => (
    <div key={project.id} className="project-tile">
      <img src={project.imageUrl} />
      <div className="project-info">
        <h3>{project.name}</h3>
        <p>
          ${project.price}
          <span>/day</span>
        </p>
      </div>
      <i className={`project-type ${project.type} selected`}>{project.type}</i>
    </div>
  ));
  return (
    <div className="project--list--container">
      <h1>Explore my works</h1>
      <div className="project--list">{projectElements}</div>
    </div>
  );
}
