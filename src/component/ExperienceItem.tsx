export const ExperienceItem = ({
  name,
  level,
}: {
  name: string;
  level: string;
}) => {
  return (
    <article>
      <img src="" alt="" />
      <div>
        <h3>{name}</h3>
        <p>{level}</p>
      </div>
    </article>
  );
};
