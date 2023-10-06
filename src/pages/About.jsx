import { Link } from "react-router-dom";
import Resume from "../pages/Resume";
export default function About() {
  return (
    <div>
      <Resume />
      <Link to="/">Go to home</Link>
    </div>
  );
}
