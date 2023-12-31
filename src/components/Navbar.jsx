import { NavLink } from "react-router-dom";

export default function NavBar() {
  const activeStyle = {
    fontWeight: "800",
    textDecoration: "underline",

    color: " #d8c9de",
  };
  return (
    <nav className="navbar--container">
      <NavLink style={({ isActive }) => (isActive ? activeStyle : null)} to="/">
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : null)}
        to="/about"
      >
        {" "}
        About
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : null)}
        to="/projects"
      >
        Projects
      </NavLink>
      {/* <NavLink
        style={({ isActive }) => (isActive ? activeStyle : null)}
        to="/contact"
      >
        Contact
      </NavLink> */}
    </nav>
  );
}
