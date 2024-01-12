import { useEffect } from "react";
import SocialButton from "../components/SocialButton.jsx";

export default function About() {
  useEffect(() => {
    document.title = "HB Portfolio | About";
  });

  return (
    <section className="p-4">
      <div className="flex flex-col gap-y-12 md:flex-row justify-center items-center">
        <div className="w-4/5 md:w-1/2">
          <h1 className="text-[42px] md:text-5xl font-header text-accent text-center md:text-left">
            About Me
          </h1>
          <p className="mt-6 font-mainText text-accent mt-2 text-md md:text-lg">
            I am a recent graduate of BYU-Idaho with a Bachelors of Science in
            Applied Technology with my main focus being in Web Development. I
            graduated with a 3.94 GPA as well as with certificates in Web and
            Computer Programming, Database, and Web Development. Through school,
            I have 2 years of experience in frontend and 1 year of experience in
            backend development. I am passionate about technology, and that
            passion is the main reason for my career switch. I view myself as
            someone who is eager to learn new things and I am constantly looking
            at ways I can improve to further my skills. I am also a huge sports
            fan. Being from the Chicago, IL area I am a die-hard Chicago fan and
            love cheering on the Bears, Cubs, Bulls, and Blackhawks! In my free
            time, I love to spend time with my family, play games, and play
            golf!
          </p>
          <div className="flex flex-row flex-wrap gap-x-6 mt-8 justify-center md:justify-start">
            <SocialButton
              link={"https://www.linkedin.com/in/hunter-blake/"}
              socialName={"LinkedIn"}
            />
            <SocialButton
              link={"https://github.com/hdblake"}
              socialName={"GitHub"}
            />
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end gap-y-8 w-3/4 md:w-1/2">
          <div className="rounded-xl shadow-lg border border-2 border-primary w-3/4">
            <h2 className="font-header bg-primary text-accent rounded-t-lg p-2 text-2xl md:text-3xl text-center">
              Degrees
            </h2>
            <ul className="list-disc list-inside p-4">
              <li className="font-mainText text-lg">
                Bachelors in Applied Technology
              </li>
              <li className="font-mainText text-lg">
                Associate in General Studies
              </li>
            </ul>
          </div>
          <div className="rounded-xl shadow-lg border border-2 border-primary w-3/4">
            <h2 className="font-header bg-primary text-accent rounded-t-lg p-2 text-2xl md:text-3xl text-center">
              Certificates
            </h2>
            <ul className="list-disc list-inside p-4">
              <li className="font-mainText text-lg">Web Development</li>
              <li className="font-mainText text-lg">Database</li>
              <li className="font-mainText text-lg">
                Web and Computer Programming
              </li>
              <li className="font-mainText text-lg">Management</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
