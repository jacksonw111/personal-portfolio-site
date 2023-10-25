import { FC, PropsWithChildren } from "react";

export const Experience: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section>
      <p>Explore My</p>
      <h1>Experience</h1>
      <div>{children}</div>
    </section>
  );
};
