import { ExperienceItem } from "./ExperienceItem";
export interface SkillProps {
  name: string;
  level: string;
}
export const ExperienceList = ({
  title,
  skills,
}: {
  title: string;
  skills: SkillProps[];
}) => {
  return (
    <div>
      <h2>{title}</h2>
      {skills.map((skill) => (
        <ExperienceItem
          key={skill.name}
          name={skill.name}
          level={skill.level}
        ></ExperienceItem>
      ))}
    </div>
  );
};
