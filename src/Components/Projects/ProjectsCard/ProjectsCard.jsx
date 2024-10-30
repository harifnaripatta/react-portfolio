import React from "react";
import "./ProjectsCard.css";

const ProjectsCard = ({ id, title, category, img }) => {
  return (
    <div className="projects-card-container">
      <img src={`./assets/images/project/${img}`} alt={title} />
      <dir className="card-content">
        <h4>{title}</h4>
        <p>{category}</p>
        <dir className="card-link">
          <a className="card-link-live" href="#">
            Live Preview
          </a>
          <a className="card-link-github" href="#">
            Github Link
          </a>
        </dir>
      </dir>
    </div>
  );
};

export default ProjectsCard;
