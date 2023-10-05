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
    <div className="project-detail-container">
      {project ? (
        <div className="project-detail">
          <img src={project.imageUrl} />
          <i className={`project-type ${project.type} selected`}>
            {project.type}
          </i>
          <h2>{project.name}</h2>

          <p>{project.description}</p>
          <button className="link-button">Live app</button>
          <button className="link-button">Source Code</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
