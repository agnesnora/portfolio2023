import { NavLink, Link } from "react-router-dom";

export default function Resume() {
  return (
    <div className="resume--container">
      <div className="resume--header">
        <img
          className="profile--picture"
          src="images/ProfilePicturePalasthy small.png"
        />
        <div className="resume--about">
          <h1>
            Hello there!
            <br />I am Agnes.👋
            <br />
          </h1>
          <p>
            <span className="highlighted--text">Frontend developer</span> with
            an eye for details and in love with CSS. With a background in office
            furniture, design and sales. Strong communication and
            problem-solving skills.{" "}
          </p>
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
      <ul className="techstack--list">
        <li>
          {" "}
          <img
            src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/html5-original-wordmark.svg"
            alt="HTML"
            width="40"
            height="40"
          />
        </li>
        <li>
          <img
            src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/css3-original-wordmark.svg"
            alt="Css"
            width="40"
            height="40"
          />
        </li>
        <li>
          <img
            src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Languages/javascript-original.svg"
            alt="Javascript"
            width="40"
            height="40"
          />
        </li>
        <li>
          <img
            src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/react-original-wordmark.svg"
            alt="React"
            width="40"
            height="40"
          />
        </li>
        <li>
          {" "}
          <img
            src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Software/photoshop-line.svg"
            alt="Photoshop"
            width="40"
            height="40"
          />
        </li>
        <li>
          {" "}
          <img
            src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Software/figma-icon.svg"
            alt="Figma"
            width="40"
            height="40"
          />
        </li>

        <li>
          <img
            src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Other/git-scm-icon.svg"
            alt="Git"
            width="40"
            height="40"
          />
        </li>
      </ul>
      <div className="resume--footer">
        <NavLink className="button--link" to="/projects">
          Explore projects
        </NavLink>

        <button className="button">
          {" "}
          <a href="/images/AgnesKutiPalasthyCV.pdf">Download CV</a>
        </button>
      </div>
    </div>
  );
}
