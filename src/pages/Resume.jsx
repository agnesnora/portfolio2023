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
            <span className="highlighted--text">Frontend developer</span> with a
            background in office furniture, design and sales. Strong
            communication and problem solving skills.{" "}
          </p>
        </div>
      </div>
      <main className="resume--main--container">
        <div>
          <h3>About me</h3>
          <p>
            Hello again! I graduated as a landscape architect from Corvinus
            University of Budapest and jumped into the office furniture business
            right after my graduation. Working as a designer I have provided
            support to sales managers in design concepts, space planning,
            visualization and also in quotations. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            perferendis reiciendis eius, est, obcaecati odio, totam et quisquam
            incidunt saepe eaque. Tenetur cumque labore voluptatem optio, amet
            aliquid reiciendis beatae.
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
          <a href="/images/AgnesPalasthy CV.pdf">Download CV</a>
        </button>
      </div>
    </div>
  );
}
