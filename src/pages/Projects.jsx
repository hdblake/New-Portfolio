import ProjectsCard from "../components/ProjectsCard.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <section className="p-4">
      <h1 className="text-[42px] md:text-5xl font-header text-accent text-center">
        Projects
      </h1>
      <ProjectsCard projects={projects} />
    </section>
  );
}
