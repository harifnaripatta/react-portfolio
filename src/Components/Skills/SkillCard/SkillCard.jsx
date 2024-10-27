import "./SkillCard.css";

const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
  console.log(iconUrl);
  return (
    <div
      className={`skill-card ${isActive ? "active" : ""}`}
      onClick={() => onClick()}
    >
      <div className="skill-icon">
        <img src={`./assets/images/${iconUrl}`} alt={title} />
      </div>
      <span>{title}</span>
    </div>
  );
};

export default SkillCard;
