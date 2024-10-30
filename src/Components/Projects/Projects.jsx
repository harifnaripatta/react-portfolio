import React, { useState } from "react";
import "./Projects.css";
import { PROJECTS } from "../../utils/data";
import ProjectsCard from "./ProjectsCard/ProjectsCard";

const Projects = () => {
  const [projects, setProjects] = useState(PROJECTS);
  const [selectedCateroty, setselectedCateroty] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);
  const handleFilterClick = (category) => {
    setselectedCateroty(category);
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) => project.category === category
      );
      setFilteredProjects(filtered);
    }
  };
  return (
    <>
      <div className="projects-container">
        <div className="projects-content">
          <h4>Recent Projects</h4>
          <p>
            Passionate Frontend Developer | Transforming Ideas into Seamless and
            Visually Stunning Web Solutions
          </p>
          <ul className="projects-btn">
            {["All", "HTML/CSS", "React", "Node.js", "MERN"].map((category) => (
              <li>
                <a
                  onClick={() => handleFilterClick(category)}
                  className={category === selectedCateroty ? "active" : ""}
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
          <ul className="project-card">
            {filteredProjects.map((project) => (
              <li>
                <ProjectsCard
                  id={project.id}
                  title={project.title}
                  category={project.category}
                  img={project.image}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="hero-line">
        <img src="./bottom-line-right.png" alt="bottom-line-right" />
      </div>
    </>
  );
};

export default Projects;
