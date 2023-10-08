import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
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
      <div className="project--detail">
        <h2>{project.name}</h2>
        <img className="project--detail--img" src={project.imageUrl} />

        <ul>
          {project.type
            ? project.type.map((type) => <li key={type}>{type}</li>)
            : null}
        </ul>
      </div>
      <div>
        <p>{project.description}</p>
        <div>
          <button className="button--link">
            <a href={project.live}>Live App</a>
          </button>
          <button className="button--link">
            <a href={project.code}>Source code</a>
          </button>
        </div>
      </div>
    </div>
  );
}
