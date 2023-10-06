export default function Resume() {
  return (
    <div>
      <hero className="resume--header">
        <img
          className="profile--picture"
          src="../src/ProfilePicturePalasthy small.png"
        />
        <div className="resume--about">
          <h1>About</h1>
          <p>
            Hey there, I am Agnes. Self-learner, career changer, front-end
            developer with a background in office furniture, design and sales.
            Strong communication and problem solving skills.{" "}
          </p>

          <ul className="resume--techstack">
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
        </div>
      </hero>
      <main className="resume--main--container">
        <section>
          <h1>Experience</h1>
          <h2>Scrimba projects</h2>
          <p>blabla</p>
          <h2>Sales Support</h2>
          <p>
            Provide support to the sales managers in design, specification,
            presentation and space planning. Prepare a personalized design
            concept. Collaborate with Dealers & Partners
          </p>
          <h2>Design engineer</h2>
          <p>
            Create space planning (2D&3D), design presentations and quotations.
            Present design concepts. Provide customer management.
          </p>
        </section>
        <section>
          <h1>Education</h1>
          <h2>Scrimba Frontend Carrer Path</h2>
          <p>
            Online course with tons of interactive challanges and real-world
            solo projects. Covering HTML, CSS, JavaScript, ES6, Responsive
            design, APIs, React, UI design, Git, Flexbox,Grid and Figma.
          </p>
          <h2>Web Dev For Beginners | Front-end Foxes</h2>
          <p>
            Online web development cohort for woman from all around the world.
            Covering Web Accessibility, HTML, CSS, Javascript and Git.
          </p>
          <h2>BSc & MSc in Landscape Architecture</h2>
          <p>
            Corvinus University of Hungary Polytechnic University of Valencia
          </p>
        </section>
      </main>
    </div>
  );
}
