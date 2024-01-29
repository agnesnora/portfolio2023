import { FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <footer>
      <p>
        Designed and developed by AgnesNora utilizing React Router for smooth
        and dynamic navigation
      </p>
      <a
        className="social--icons"
        href="https://github.com/agnesnora"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <FaGithub className="social--hover" />
      </a>
    </footer>
  );
}
