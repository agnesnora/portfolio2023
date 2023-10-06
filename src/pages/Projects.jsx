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
    if (e.target.dataset.hover) {
      setHoveredProject(
        projects.filter((project) => project.id == e.target.dataset.hover)[0]
      );
    }
  }
  function mouseLeave() {
    setHoveredProject({});
  }

  const projectElements = projects.map((project) => (
    // <Link key={project.id} to={`/projects/${project.id}`}>
    //   <div
    //     onMouseEnter={mouseEnter}
    //     onMouseLeave={mouseLeave}
    //     key={project.id}
    //     className="project--tile"
    //     data-hover={project.id}
    //     // style={
    //     //   project.id == hoveredProject.id ? { backgroundColor: "red" } : null
    //     // }
    //   >
    //     <div
    //       className="project--hovered"
    //       style={
    //         project.id == hoveredProject.id
    //           ? {
    //               backgroundImage: `url("${project.imageUrl}")`,
    //               backgroundSize: "cover",
    //               backgroundColor: "black",
    //               opacity: "20%",
    //             }
    //           : {
    //               backgroundImage: `url("${project.imageUrl}")`,
    //               backgroundSize: "cover",
    //             }
    //       }
    //       data-hover={project.id}
    //     >
    //       {" "}
    //       {/* <img src={project.imageUrl} data-hover={project.id} /> */}
    //       <div className="project--info">
    //         {project.id == hoveredProject.id ? <h3>{project.name}</h3> : null}
    //       </div>
    //     </div>
    //   </div>
    // </Link>
    <Link key={project.id} to={`/projects/${project.id}`}>
      <div
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        key={project.id}
        className="project--tile"
        data-hover={project.id}
        // style={
        //   project.id == hoveredProject.id ? { backgroundColor: "red" } : null
        // }
      >
        <img
          className="project--img"
          src={project.imageUrl}
          data-hover={project.id}
        />
        <div className="project--info">
          <div className="project--text">
            {" "}
            {project.id == hoveredProject.id ? <h5>{project.name}</h5> : null}
          </div>
        </div>
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
