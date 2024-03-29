import {
  FaLinkedin,
  FaGithub,
  FaPhoneSquare,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact">
      <div>
        <div className="contact--data">
          <FaEnvelope className="social--icons" />
          <p>agnesnora@gmail.com</p>
        </div>
        <div className="contact--data">
          <FaPhoneSquare className="social--icons" />
          <p>+36 70 342 8677</p>
        </div>
        <div className="social">
          <a
            className="social--icons"
            href="https://www.linkedin.com/in/agnes-nora-palasthy-b41ba378/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FaLinkedin className="social--hover" />
          </a>
          <a
            className="social--icons"
            href="https://github.com/agnesnora"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FaGithub className="social--hover" />
          </a>
        </div>
      </div>
    </div>
  );
}
