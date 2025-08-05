import React from "react";
import image from "./asset/image-removebg-preview.png";
const About = () => {
  return (
    <section className="box" id="About">
      <div className="card">
        <img
          src={image}
          className="rotate image-card"
          alt="browser not support"
        />
        <ul>
          <h1 style={{ color: "var(--higlightcolor)" }}>About Me</h1>
          <br />
          <li>I am a passionate Full Stack Developer...</li>
          <br />
          <li>With hands-on experience...</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
