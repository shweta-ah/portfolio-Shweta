import React from "react";
import resume from "../asset/shweta_resume!!.pdf";

const Header = () => {
  return (
    <header className="header">
      <ul>
        <li style={{ border: "none", fontFamily: "cursive", fontSize: "2rem" }}>
          Me
        </li>
      </ul>
      <input type="checkbox" id="toggle" hidden />
      <label htmlFor="toggle" className="target-menu">
        <span>
          <i className="fa-solid fa-bars-staggered"></i>
        </span>
      </label>
      <ul className="menu">
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Works">Works</a>
        </li>
        <li>
          <a href={resume}>Resume</a>
        </li>
        <li>Blog</li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
        <li className="light-dark">
          <label htmlFor="light-dark-toggle">
            <i
              className="fa-solid fa-lightbulb"
              style={{
                background: "none",
                boxShadow: "none",
                color: "var(--color)",
              }}
            ></i>
          </label>
        </li>
      </ul>
    </header>
  );
};

export default Header;
