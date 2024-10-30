import React from "react";
import "./ProjectsCard.css";

const ProjectsCard = ({ id, title, category, img, live, git }) => {
  return (
    <div className="projects-card-container">
      <img src={`./assets/images/project/${img}`} alt={title} />
      <dir className="card-content">
        <h4>{title}</h4>
        <p>{category}</p>
        <dir className="card-link">
          <a className="card-link-live" href={live} target="_blank">
            Live Preview
          </a>
          <a className="card-link-github" href={git} target="_blank">
            Github Link
          </a>
        </dir>
      </dir>
    </div>
  );
};

export default ProjectsCard;
