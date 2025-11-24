import { Link } from "react-router-dom";
import { useState } from "react";
import Contact from "./Contact";
import { motion } from "framer-motion";
import Projects from "../pages/Projects";
export default function Home() {
  const [isContact, setIsContact] = useState(false);

  function setContactInfo() {
    setIsContact((prevContact) => !prevContact);
  }

  return (
    <motion.div
      className="home--container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="home--hero">
        {/* <p>
          <span className="text--uppercase">{`<Hello/>`}</span>
        </p> */}
        <h1>
          Hi, I am Ágnes a Frontend Developer and Designer based in Hungary.
        </h1>
        {/* <h2>Frontend Developer & Designer | React & Next.js</h2> */}
        <p></p>
        <p>
          I specialize in React and Next.js, creating intuitive, reliable, and
          efficient web solutions. With experience as a design engineer, I bring
          a practical, solution-oriented approach to every project. I love
          learning new technologies and combining creative ideas into
          functional, beautiful interfaces.
        </p>

        <div className="home--link">
          <Link className="home--button--link" to="/about">
            About me
          </Link>
          <Link onClick={setContactInfo} className="home--button--link">
            {!isContact ? "Contact" : "Hide contact"}
          </Link>
        </div>
      </div>

      {isContact ? <Contact /> : null}
      <Projects className="recent--projects" featured={true} />
    </motion.div>
  );
}
