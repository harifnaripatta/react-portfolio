import ExpereinceCard from "./ExperienceCard/ExpereinceCard";
import { WORK_EXPERIENCE } from "../../utils/data";
import "./WorkExperience.css";

const WorkExperience = () => {
  return (
    <>
      <div className="experience-container">
        <h5>Work Experience</h5>
        <p>
          Passionate Frontend Developer | Transforming Ideas into Seamless and
          Visually Stunning Web Solutions
        </p>
        <div className="experience-content">
          {WORK_EXPERIENCE.map((item) => (
            <ExpereinceCard key={item.title} details={item} />
          ))}
        </div>
      </div>
      <div className="hero-line">
        <img src="./bottom-line-right.png" alt="bottom-line-right" />
      </div>
    </>
  );
};

export default WorkExperience;
