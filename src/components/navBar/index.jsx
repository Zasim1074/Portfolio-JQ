import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./styles.scss";
import imgg from "./jaseem.jpg";

const data = [
  { label: "HOME", to: "/" },
  { label: "ABOUT ME", to: "/about" },
  { label: "SKILLS", to: "/skills" },
  { label: "RESUME", to: "/resume" },
  { label: "PROJECTS", to: "/portfolio" },
  { label: "CONTACT", to: "/contact" },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => setToggleIcon(!toggleIcon);

  const closeMobileMenu = () => setToggleIcon(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to={"/"} className="navbar-container-logo" onClick={closeMobileMenu}>
          <img src={imgg} alt="Logo" />
        </Link>

        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      <ul className={`navbar-container-menu ${toggleIcon ? "active" : ""}`}>
        {data.map((item, key) => (
          <li key={key} className="navbar-container-menu-item">
            <Link
              className="navbar-container-menu-item-links"
              to={item.to}
              onClick={closeMobileMenu}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
