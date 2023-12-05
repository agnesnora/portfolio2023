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
        <p>
          <span className="text--uppercase">{`<Hello/>`}</span>
        </p>
        <h1>
          I am <span>Agnes.</span>
        </h1>
        <p>
          <span>Frontend developer</span>, designer, landscape architect and a
          passionate gardener located in Hungary.
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
