import { Link } from "react-router-dom";
import resume from "../images/Resume.pdf";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "HB Portfolio | Home";
  });

  return (
    <section className="p-4 absolute top-1/3">
      <h1 className="text-[42px] md:text-5xl font-header text-accent text-center md:text-left">
        Hi, I&apos;m{" "}
        <span className="text-primary underline decoration-4 decoration-secondary">
          Hunter Blake!
        </span>
      </h1>
      <div className="w-full md:w-2/5 mt-2 text-md md:text-lg text-center md:text-left">
        <p className="font-mainText text-accent">
          I am a full-stack developer with 2 years in frontend and 1 year in
          backend development. You&apos;ll learn about me, my skills, and see
          some examples of my work. You can also reach out via the contact form
          below and view my resume!
        </p>
        <div className="mt-8 flex flex-row gap-x-6 lg:gap-x-12 justify-center">
          <Link to="/contact">
            <button className="font-mainText text-accent text-2xl lg:text-3xl p-4 bg-primary rounded-xl shadow-lg transition duration-300 ease-in hover:-translate-y-1 hover:scale-110">
              Contact
            </button>
          </Link>
          <Link to={resume} target="_blank" rel="noopener noreferrer">
            <button className="font-mainText text-accent text-2xl lg:text-3xl p-4 bg-primary rounded-xl shadow-lg transition duration-300 ease-in hover:-translate-y-1 hover:scale-110">
              Resume
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
