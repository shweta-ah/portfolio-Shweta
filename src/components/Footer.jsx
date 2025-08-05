import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="left">
        <li style={{ border: "none", fontFamily: "cursive", fontSize: "2rem" }}>
          Me
        </li>
      </ul>
      <ul>
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
          <a href="shweta_resume.pdf">Resume</a>
        </li>
        <li>Blog</li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
      <ul>
        {["fa-whatsapp", "fa-instagram", "fa-youtube", "fa-linkedin-in"].map(
          (icon, index) => (
            <li className="link" key={index}>
              <i className={`fa-brands ${icon}`}></i>
            </li>
          )
        )}
      </ul>
      <div className="footer-about">
        <p>
          Creative portfolio of a passionate web developer. Let's build
          something amazing together!
        </p>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Me. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
