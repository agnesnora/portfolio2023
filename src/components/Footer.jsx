import { FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <footer>
      <p>Developed and designed by AgnesNora 2024</p>
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
