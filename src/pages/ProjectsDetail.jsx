import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
export default function ProjectDetail() {
  const params = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    fetch(`/api/projects/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProject(data.projects));
  }, [params.id]);

  return (
    <div className="project--detail--container">
      <h2>{project.name}</h2>
      <Link className="back--link" to="/projects">
        <FaArrowLeft className="back--icon" />
        Back to projects
      </Link>
      <div className="project--detail">
        <img className="project--detail--img" src={project.imageUrl} />
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
    </div>
  );
}
