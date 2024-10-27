import { useState } from "react";
import "./Skills.css";
import SkillCard from "./SkillCard/SkillCard";
import { SKILLS } from "../../utils/data";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
  const handleSelectedSkill = () => {
    setSelectedSkill(data);
  };
  return (
    <>
      <div className="skills-container">
        <h3>Technical Proficiency</h3>
        <p>
          Passionate Frontend Developer | Transforming Ideas into Seamless and
          Visually Stunning Web Solutions
        </p>
        <div className="skills-content">
          <div className="skills">
            {SKILLS.map((item) => (
              <SkillCard
                key={item.title}
                iconUrl={item.icon}
                title={item.title}
                isActive={selectedSkill.title === item.title}
                onClick={() => {
                  setSelectedSkill(item);
                }}
              />
            ))}
          </div>
          <div className="skills-info">
            <SkillsInfoCard
              heading={selectedSkill.title}
              skills={selectedSkill.skills}
            />
          </div>
        </div>
      </div>
      <div className="hero-line">
        <img src="./bottom-line-left.png" alt="bottom-line-right" />
      </div>
    </>
  );
};

export default Skills;
