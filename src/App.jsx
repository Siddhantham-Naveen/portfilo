import { useState } from "react";
import {
  profile,
  projects,
  jobs,
  skills,
  education,
  certificates,
} from "./data.js";

const jump = [
  ["projects", "Projects"],
  ["experience", "Experience"],
  ["skills", "Skills"],
  ["education", "Education"],
  ["contact", "Contact"],
];

const projectTones = ["mint", "pink", "orange"];

function Photo() {
  const [failed, setFailed] = useState(false);
  return (
    <div className="portrait">
      {failed ? (
        <div className="photo photo-blank" role="img" aria-label="Photo placeholder">
          SN
        </div>
      ) : (
        <img
          className="photo"
          src={profile.photo}
          alt="Portrait of Siddhantham Naveen"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

function Hero() {
  return (
    <header className="band yellow hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <h1 aria-label={profile.name.join(" ")}>
            {profile.name.map((part) => (
              <span className="line" key={part} aria-hidden="true">
                <span>{part}</span>
              </span>
            ))}
          </h1>
          <p className="role">{profile.role}</p>
          {profile.intro.map((p) => (
            <p className="lede" key={p}>
              {p}
            </p>
          ))}
          <p className="jump">
            {jump.map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </p>
        </div>
        <Photo />
      </div>
    </header>
  );
}

function Projects() {
  return (
    <section className="band ivory" id="projects" aria-labelledby="h-projects">
      <div className="wrap">
        <h2 id="h-projects">Projects</h2>
      </div>
      <div className="projects">
        {projects.map((p, i) => (
          <article className={`project ${projectTones[i % projectTones.length]}`} key={p.title}>
            <div className="wrap project-grid">
              <div className="project-title">
                <h3>{p.title}</h3>
                <p className="stack">{p.stack}</p>
                <p className="host">Hosted on {p.host}</p>
              </div>
              <div className="project-body">
                <p>{p.text}</p>
                <p className="actions">
                  <a className="btn" href={p.live} target="_blank" rel="noreferrer">
                    Open live site
                  </a>
                  <a href={p.code} target="_blank" rel="noreferrer">
                    View source code
                  </a>
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="band ink" id="experience" aria-labelledby="h-experience">
      <div className="wrap">
        <h2 id="h-experience">Experience</h2>
        {jobs.map((j) => (
          <div className="job" key={j.role + j.dates}>
            <p className="when">{j.dates}</p>
            <div>
              <h3>{j.role}</h3>
              <p className="org">{j.org}</p>
              <p>{j.text}</p>
              <p className="tech">{j.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="band pink" id="skills" aria-labelledby="h-skills">
      <div className="wrap">
        <h2 id="h-skills">Skills</h2>
        <dl className="skills">
          {skills.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="band ivory" id="education" aria-labelledby="h-education">
      <div className="wrap edu-grid">
        <div>
          <h2 id="h-education">Education</h2>
          <p className="degree">{education.degree}</p>
          <p>{education.school}</p>
          <p className="edu-meta">
            {education.years}. {education.cgpa}.
          </p>
          <p className="coursework">Coursework: {education.coursework}.</p>
        </div>
        <div>
          <h2>Certificates</h2>
          <ul className="certs">
            {certificates.map((c) => (
              <li key={c.name}>
                <a href={c.url} target="_blank" rel="noreferrer">
                  {c.name}
                </a>
                <span className="issuer">
                  {c.issuer}, {c.date}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="band yellow contact" id="contact" aria-labelledby="h-contact">
      <div className="wrap">
        <h2 id="h-contact">Contact</h2>
        <p className="ask">I am available for full-time roles. Email is the fastest way to reach me.</p>
        <a className="mail" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <p className="other">
          <a className="btn" href={profile.resume} download>
            Download resume
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
    </>
  );
}
