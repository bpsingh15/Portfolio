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
      {/* Reuse contact-page styles for identical layout */}
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["E", "x", "p", "e", "r", "i", "e", "n", "c", "e"]}
              idx={15}
            />
          </h1>

          {/* EXPERIENCE LIST */}
          <section className="experience-list">
            <article className="exp-item">
              <h2 className="title">
                Vice President of Events, Google Developer Student Clubs –
                McGill University
              </h2>
              <p className="exp-meta">Sept 2025 – Present · Montreal, QC</p>
              <ul className="job-description">
                <li>
                  Planned and executed professional-development events
                  (workshops, speaker sessions, networking).
                </li>
                <li>
                  Collaborated with industry partners to grow relationships and
                  club reach.
                </li>
                <li>
                  Contributed as a developer to a campus activity tracker using
                  Firebase Firestore, Express, React, and Node.js.
                </li>
                <li>
                  Assisted with implementation and testing to meet project
                  requirements.
                </li>
              </ul>
            </article>

            <article className="exp-item">
              <h2 className="title">
                Chief Technology Officer (CTO), Credit Mantra
              </h2>
              <p className="exp-meta">Jun 2025 – Present · FinTech Startup</p>
              <ul className="job-description">
                <li>
                  Led early development of a cross-platform app in Flutter/Dart
                  (iOS, Android, Web, Windows).
                </li>
                <li>
                  Built an admin dashboard integrated with AWS EC2 and RDS for
                  user data and backend operations.
                </li>
                <li>
                  Developed a waitlist website backed by AWS Lambda + API
                  Gateway + DynamoDB with secure email auth.
                </li>
              </ul>
            </article>
          </section>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Experience;
