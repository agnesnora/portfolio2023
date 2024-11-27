import { NavLink, Link } from "react-router-dom";
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
            functional requirements but also elevate the user's overall
            experience.{" "}
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
            Hi! I am a landscape architect by degree, having graduated from
            Corvinus University of Budapest, but my career path has taken some
            exciting turns. I started working as a design engineer in a
            furniture company, where I focused on design concepts, space
            planning, visualization, and tenders. Throughout my time there, I
            found that my creative side thrived on designing layouts and
            creating visualizations—but something was missing. I realized that
            my logical side was craving more challenges.
          </p>
          <p>
            In 2022, I had the opportunity to join a global Frontend Development
            Cohort for women. This experience was a revelation. I discovered
            that as a frontend developer, I could combine creativity with
            logical problem-solving. From that moment on, I was hooked on
            coding. I dove deep into learning, immediately joining the Frontend
            Career Path at Scrimba, which pushed me to tackle coding challenges
            and real-world projects that further fueled my passion for
            development.
          </p>
          <p>
            Since then, I have been driven by a persistent desire to learn new
            technologies. I am always exploring ways to expand my skill set and
            stay up-to-date with the latest tools and frameworks. From
            JavaScript, React, and CSS to more advanced tools like Next.js and
            TypeScript, I am constantly seeking out new challenges that allow me
            to grow as a developer.
          </p>
          <p>
            One of the things I love most about frontend development is how it
            lets me balance both my creative and logical sides. I get to design
            beautiful, user-friendly interfaces while also solving complex
            technical problems. I am not afraid of diving into new technologies
            and tackling unfamiliar challenges head-on. In fact, I thrive in
            environments where learning never stops. I am excited to keep
            pushing the boundaries of what I can do and eager to take on new
            projects that allow me to apply my skills while learning even more
            along the way.
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
          href="/images/Ágnes Kuti-Palásthy CV 2024-10canva.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}
