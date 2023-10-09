import { Link } from "react-router-dom";
import { useState } from "react";
import Contact from "./Contact";
import floral from "../../public/floral.png";
export default function Home() {
  const [isContact, setIsContact] = useState(false);

  function setContactInfo() {
    setIsContact((prevContact) => !prevContact);
  }
  return (
    <div className="home--container">
      <div className="home--hero">
        <p>
          <span className="text--uppercase">{`<Hello>`}</span>
        </p>
        <h1>
          I am <span>Agnes Kuti-Palasthy</span>
        </h1>
        <p>
          <span>Frontend developer</span>, designer, landscape architect and
          passionate gardener located in Hungary.
        </p>
        <div className="home--link">
          <Link className="button--link" to="/about">
            About me
          </Link>
          <Link onClick={setContactInfo} className="button--link">
            {!isContact ? "Contact" : "Hide contact"}
          </Link>
        </div>
      </div>

      {isContact ? <Contact /> : null}
    </div>
  );
}
