import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
export default function ProjectDetail() {
  const params = useParams();
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  async function getProjects() {
    const res = await fetch(`/api/projects/${params.id}`);
    const data = await res.json();
    return data.projects;
  }

  useEffect(() => {
    async function loadProject() {
      setLoading(true);
      try {
        const data = await getProjects();
        setProject(data);
      } catch (err) {
        setErr(err);
      } finally {
        setLoading(false);
      }
    }
    loadProject();
  }, [params.id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return project ? (
    <motion.div
      className="project--detail--container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>{project.name}</h2>
      <div className="go--back--btn">
        {" "}
        <Link className="back--link" to="/projects">
          <FaArrowLeft className="back--icon" />
          Go to projects
        </Link>
        <Link className="back--link" to="/">
          <FaArrowLeft className="back--icon" />
          Go to Home
        </Link>
      </div>

      <div className="project--detail">
        <img
          className="project--detail--img"
          alt={`snapshot of ${project.name} project`}
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
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            Live App
          </a>
        </button>
        <button className="button">
          <a href={project.code} target="_blank" rel="noopener noreferrer">
            Source code
          </a>
        </button>
      </div>
    </motion.div>
  ) : null;
}
