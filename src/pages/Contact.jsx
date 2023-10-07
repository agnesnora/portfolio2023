import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact">
      <h3>agnesnora@gmail.com</h3>
      <div className="social--icons">
        <a href="https://www.linkedin.com/in/agnes-nora-palasthy-b41ba378/">
          {" "}
          <FaLinkedin />
        </a>
        <a href="https://github.com/agnesnora">
          {" "}
          <FaGithub />
        </a>
      </div>
    </div>
  );
}
