import React from "react";
import "./ProjectsCard.css";

const ProjectsCard = ({ project }) => {
  // console.log(project);
  return (
    <div className="projects-card-container">
      <img src="{project.image}" alt="image" />
      <h4>{project.title}</h4>
      <p>{project.category}</p>
    </div>
  );
};

export default ProjectsCard;
