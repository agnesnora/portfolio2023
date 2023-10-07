import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="home--container">
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
        <Link className="button--link" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}
