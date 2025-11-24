import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

export default function Resume() {
  const [hoveredImgId, setHoveredImgId] = useState(null);

  const handleMouseEnter = (e) => {
    const detailedId = e.target.dataset.id;
    setHoveredImgId(detailedId);
  };
  const handleMouseLeave = () => setHoveredImgId(null);

  // Main tech stack: prioritize TS, Next.js, React
  const techStackData = [
    {
      src: "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Languages/typescript-original.svg",
      alt: "TypeScript",
      id: 1,
    },
    {
      src: "https://profilinator.rishav.dev/skills-assets/nextjs.png",
      alt: "NextJS",
      id: 2,
    },
    {
      src: "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/react-original-wordmark.svg",
      alt: "React",
      id: 3,
    },
    {
      src: "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/html5-original-wordmark.svg",
      alt: "HTML",
      id: 4,
    },
    {
      src: "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/css3-original-wordmark.svg",
      alt: "CSS",
      id: 5,
    },
    {
      src: "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/sass-original.svg",
      alt: "SCSS",
      id: 6,
    },
    {
      src: "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/tailwindcss-icon.svg",
      alt: "Tailwindcss",
      id: 7,
    },
    {
      src: "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Other/git-scm-icon.svg",
      alt: "Git",
      id: 8,
    },
    { src: "/images/Vitejs-logo.svg.png", alt: "Vite", id: 9 },
    {
      src: "images/MongoDB_Logo.svg",
      alt: "MongoDB",
      id: 10,
    },
    {
      src: "images/MySQL-Logo.wine.svg",
      alt: "MySQL",
      id: 11,
    },
    {
      src: "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Software/figma-icon.svg",
      alt: "Figma",
      id: 12,
    },
    {
      src: "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Software/photoshop-line.svg",
      alt: "Photoshop",
      id: 13,
    },
  ];

  // Studying / in progress techs
  const studyTechStackData = [
    {
      src: "/images/nodejs.png",
      alt: "Node.js",
      id: 14,
    },
  ];

  const TechStackEl = () => {
    return techStackData.map((tech) => (
      <li key={tech.alt}>
        <img
          src={tech.src}
          alt={tech.alt}
          width="40"
          height="40"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          data-id={tech.id}
        />
        {hoveredImgId == tech.id ? (
          <p className="hovered--alt">{tech.alt}</p>
        ) : (
          ""
        )}
      </li>
    ));
  };
  const StudyTechStackEl = () => {
    return studyTechStackData.map((tech) => (
      <li key={tech.alt}>
        <img
          src={tech.src}
          alt={tech.alt}
          width="40"
          height="40"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          data-id={tech.id}
        />
        {hoveredImgId == tech.id ? (
          <p className="hovered--alt">{tech.alt}</p>
        ) : (
          ""
        )}
      </li>
    ));
  };
  return (
    <div className="resume--container">
      <div className="resume--header">
        <img
          className="profile--picture"
          src="images/ProfilePicturePalasthy small.png"
          alt="profile picture"
        />
        <div className="resume--about">
          <h1>Hello there! I am Agnes.</h1>
          <p>
            <span className="highlighted--text">Frontend developer</span> with a
            passion for building intuitive, responsive, and visually polished
            web applications. I specialize in React, Next.js, and TypeScript,
            delivering solutions that combine clean code, thoughtful design, and
            practical functionality. I enjoy tackling complex challenges and
            combining tools and techniques creatively to ensure clients get
            exactly what they need.
          </p>
          <button className="big--github ">
            <a
              href="https://github.com/agnesnora"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Visit my GitHub</p> <FaGithub className="big--github--icon " />
            </a>
          </button>
        </div>
      </div>
      <main className="resume--main--container">
        <div>
          <h3>About me</h3>
          <p>
            With experience as a design engineer and frontend developer, I have
            worked on a range of projects from concept to deployment. I
            currently contribute to the Beeco app as a frontend developer and
            have completed multiple other projects.I focus on building solutions
            that are efficient, practical, and tailored to client needs,
            combining design, code, and creativity in smart ways. I enjoy
            experimenting with different approaches to deliver the best possible
            outcome while optimizing resources.
          </p>

          <p>
            My technical stack includes React, Next.js, and TypeScript. I am
            also expanding my backend knowledge and currently learning Node.js
            to grow into fullstack development.I thrive on problem-solving,
            creating user-friendly interfaces, and collaborating with teams or
            clients to turn ideas into reliable, maintainable web solutions.
          </p>
        </div>
      </main>
      <div className="resume--techstack"></div>
      <h3>My techstack</h3>
      <ul className="techstack--list">{TechStackEl()}</ul>
      <h3>Current studies</h3>
      <ul className="techstack--list">{StudyTechStackEl()}</ul>
      <div className="resume--footer">
        <NavLink className="button--link" to="/projects">
          Explore projects
        </NavLink>

        <a
          className="button--link"
          href="/images/Ágnes Kuti-Palásthy CV 2025-07.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}
