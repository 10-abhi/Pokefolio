interface SkillCardProps {
    title: string
    type: string
    skills: string[]
  }
  
  export const SkillCard = ({ title, type, skills }: SkillCardProps) => {
    return (
      <div className={`skill-card ${type}`}>
        <div className="skill-header">
          <div className={`skill-icon ${type}`}></div>
          <h3>{title}</h3>
        </div>
  
        <ul className="skill-list">
          {skills.map((skill, index) => (
            <li key={index}>
              <div className="skill-dot"></div>
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }