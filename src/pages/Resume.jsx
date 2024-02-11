import { NavLink, Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import shortid from "shortid";
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
      src: "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Software/figma-icon.svg",
      alt: "Figma",
      id: 6,
    },
    {
      src: "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Other/git-scm-icon.svg",
      alt: "git",
      id: 7,
    },
    {
      src: "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Software/photoshop-line.svg",
      alt: "Photoshop",
      id: 8,
    },
    { src: "/images/Vitejs-logo.svg.png", alt: "Vite", id: 9 },
  ];
  const studyTechStackData = [
    {
      src: "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Languages/typescript-original.svg",
      alt: "Typescript",
      id: 10,
    },
    {
      src: "../images/php.svg",
      alt: "PHP",
      id: 11,
    },
    {
      src: "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Testing/jestjsio-icon.svg",
      alt: "Jest",
      id: 12,
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
            Hello again! I graduated as a landscape architect from Corvinus
            University of Budapest and started to work as a design engineer at a
            furniture company. Working as a designer, I provided support to
            sales managers in design concepts, space planning, visualization and
            tenders. As a creative person, layouts and visualization have always
            been my favourite. But my logical side was missing something.
          </p>
          <p>
            In 2022, I had the chance to join a Frontend Dev Cohort of women
            from all around the world and realized that, as a frontend
            developer, both my creative and logical sides could be satisfied.
            Since the day I stepped into the world of coding, I could not stop
            learning and immediately joined the Frontend Career Path at Scrimba.
            This course was a game-changer for me. With tons of coding
            challenges and real-world solo projects, it has really challenged me
            again and again and made me realize how motivated I am.
          </p>
          <p>
            Now I feel ready to get more adventurous and, after all of these
            real-world solo projects, finally start to work as a frontend
            developer.
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
          href="/images/Ágnes Kuti-Palásthy CV_no-photo.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}
