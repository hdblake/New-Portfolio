export default function Home() {
  return (
    <section className="p-2">
      <h1 className="text-[42px] md:text-5xl font-header text-accent text-center md:text-left">
        Hi, I&apos;m{" "}
        <span className="text-primary underline decoration-4 decoration-secondary">
          Hunter Blake!
        </span>
      </h1>
      <div className="w-full md:w-1/2 mt-2 text-md md:text-lg text-center md:text-left">
        <p className="font-mainText text-accent">
          I am a full-stack developer with 2 years in frontend and 1 year in
          backend development. You&apos;ll learn about me, my skills, and see
          some examples of my work. You can also reach out via a contact form
          and view my resume!
        </p>
      </div>
    </section>
  );
}
