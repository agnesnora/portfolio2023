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

  const techStackData = [
    {
      src: "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Languages/javascript-original.svg",
      alt: "Javascript",
      id: 1,
    },
    {
      src: "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/react-original-wordmark.svg",
      alt: "React",
      id: 2,
    },
    {
      src: "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/html5-original-wordmark.svg",
      alt: "HTML",
      id: 3,
    },
    {
      src: "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/css3-original-wordmark.svg",
      alt: "CSS",
      id: 4,
    },
    {
      src: "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/sass-original.svg",
      alt: "Sass",
      id: 5,
    },
    {
      src: "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/tailwindcss-icon.svg",
      alt: "Tailwindcss",
      id: 6,
    },
    {
      src: "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Other/git-scm-icon.svg",
      alt: "git",
      id: 7,
    },

    { src: "/images/Vitejs-logo.svg.png", alt: "Vite", id: 8 },
    {
      src: "https://profilinator.rishav.dev/skills-assets/nextjs.png",
      alt: "NextJS",
      id: 9,
    },

    {
      src: "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Languages/typescript-original.svg",
      alt: "Typescript",
      id: 10,
    },
    {
      src: "images/MongoDB_Logo.svg",
      alt: "mongoDB",
      id: 11,
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
  const studyTechStackData = [
    {
      src: "/images/php.svg",
      alt: "PHP",
      id: 14,
    },
    {
      src: "/images/Laravel.svg.png",
      alt: "Laravel",
      id: 15,
    },
    {
      src: "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Testing/jestjsio-icon.svg",
      alt: "Jest",
      id: 16,
    },
    {
      src: "/images/docker-mark-blue.png",
      alt: "docker",
      id: 17,
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
            <span className="highlighted--text">Frontend developer</span> with
            an eye for details and in love with CSS and pixel-perfect design.
            With a background in office furniture, design and sales I have
            sharpened strong communication and problem-solving skills. I am
            deeply passionate about creating user interfaces that not only meet
            functional requirements but also elevate the overall experience.{" "}
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
            Hi! I am a frontend developer with a unique background in landscape
            architecture, holding a degree from Corvinus University of Budapest.
            My journey into tech began through design engineering in the
            furniture industry, where I specialized in spatial planning,
            visualization, and concept design. Though I loved the creative work,
            I found myself craving more logical and technical challenges.
          </p>
          <p>
            In 2022, I joined a global Frontend Development Cohort for women,
            which was a turning point in my career. I discovered the perfect
            blend of creativity and logic in coding and was immediately hooked.
            Since then, I have been consistently growing my skill set through
            intensive learning programs like the Scrimba Frontend Career Path,
            building real-world projects, and experimenting with a wide range of
            tools and frameworks.
          </p>
          <p>
            Today, I work as a frontend developer with experience in React,
            Next.js, TypeScript, and more. I am currently deepening my backend
            knowledge with Java and Spring Boot to grow into a fullstack role. I
            thrive in environments where learning never stops and enjoy building
            beautiful, responsive interfaces that solve real problems.
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
