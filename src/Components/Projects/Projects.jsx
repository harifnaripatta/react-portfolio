import React, { useEffect, useState } from "react";
import "./Projects.css";
const [data, setData] = useState([]);
useEffect(() => {
  fetch("project.json")
    .then((res) => res.json())
    .then((data) => setData(data));
});

const Projects = () => {
  return (
    <>
      <div className="projects-container">
        <div className="projects-content">
          <ul className="filter-list"></ul>
        </div>
      </div>
    </>
  );
};

export default Projects;
