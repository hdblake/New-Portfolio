/* eslint-disable react/prop-types */
export default function ProjectsCard({ projects }) {
  return (
    <div className="mt-6 flex flex-wrap justify-center gap-y-6 gap-x-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex m-2 relative shadow-xl rounded-2xl transition duration-300 ease-in hover:-translate-y-1 hover:scale-105"
        >
          <img
            src={project.image}
            alt={project.title}
            width={550}
            height={343}
            className="relative object-cover object-center border border-2 border-primary rounded-xl"
          />
          <div className="flex flex-col gap-y-2 justify-center items-center absolute w-full h-full opacity-0 hover:opacity-95 bg-secondary rounded-xl border border-2 border-primary">
            <h2 className="font-header text-accent text-lg md:text-2xl">
              Name: {project.title}
            </h2>
            <p className="font-mainText text-accent text-sm md:text-lg">
              Created with: {project.skills}
            </p>
            <div className="flex flex-row flex-wrap gap-x-6 gap-y-2 justify-center">
              <a href={project.repo} target="_blank" rel="noreferrer">
                <button className="font-mainText text-accent bg-primary text-md md:text-lg p-2 rounded-xl w-32">
                  GitHub Repo
                </button>
              </a>
              <a href={project.link} target="_blank" rel="noreferrer">
                <button className="font-mainText text-accent bg-primary text-md md:text-lg p-2 rounded-xl w-32">
                  Link
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
