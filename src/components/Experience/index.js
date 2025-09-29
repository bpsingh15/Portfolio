import Loader from "react-loaders";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";

const Experience = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["E", "x", "p", "e", "r", "i", "e", "n", "c", "e"]}
              idx={15}
            />
          </h1>

          <p>
            Here you can showcase your professional journey! Add roles,
            internships, or projects you've worked on, along with key skills you
            gained.
          </p>

          <ul>
            <li>
              <strong>Company A</strong> — Software Developer Intern (2025)
            </li>
            <li>
              <strong>Startup B</strong> — Full-Stack Developer (2024)
            </li>
            <li>
              <strong>Freelance</strong> — Personal projects & consulting work
            </li>
          </ul>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Experience;
