import { useEffect } from "react";
import { skills } from "../data/skills";
import SkillsAccordion from "../components/SkillsAccordion.jsx";

export default function Skills() {
  useEffect(() => {
    document.title = "HB Portfolio | Skills";
  });

  return (
    <section className="p-4">
      <h1 className="text-[42px] md:text-5xl font-header text-accent text-center">
        My Skills
      </h1>
      <SkillsAccordion skills={skills} />
    </section>
  );
}
