import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PiArrowBendRightDownBold } from "react-icons/pi";
import { motion } from "framer-motion";
export default function Projects() {
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
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadProjects();
  }, []);
  // useEffect(() => {
  //   fetch("/api/projects")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.projects), setProjects(data.projects);
  //     });
  // }, []);

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
        <div>
          <div className="project--info">
            {" "}
            {project.id == hoveredProject.id ? (
              <div className="project--text">
                <h3>{project.name}</h3>
                <h5>{project.type[0]}</h5>
                {/* <ul>
                  {project.type.map((type) => (
                    <li key={type}>{type}</li>
                  ))}
                </ul> */}
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
      <h1>Explore my projects</h1>
      <h3>
        hover and click to find out more{" "}
        <PiArrowBendRightDownBold className="arrow--icon" />
      </h3>
      <div className="project--list">{projectElements}</div>
    </motion.div>
  ) : null;
}
