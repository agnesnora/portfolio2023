import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
export default function ProjectDetail() {
  const params = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    fetch(`/api/projects/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.projects.imageUrl), setProject(data.projects);
      });
  }, [params.id]);

  return project ? (
    <motion.div
      className="project--detail--container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>{project.name}</h2>
      <Link className="back--link" to="/projects">
        <FaArrowLeft className="back--icon" />
        Back to projects
      </Link>
      <div className="project--detail">
        <img
          className="project--detail--img"
          // src={`/public/${project.imageUrl}`}
          src={`/${project.imageUrl}`}
        />
        <div className="project--detail--info">
          <p>{project.description}</p>
          <ul className="project--detail--type">
            {project.type
              ? project.type.map((type) => (
                  <li className={type.toLowerCase()} key={type}>
                    {type}
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>

      <div>
        <button className="button">
          <a href={project.live}>Live App</a>
        </button>
        <button className="button">
          <a href={project.code}>Source code</a>
        </button>
      </div>
    </motion.div>
  ) : null;
}
