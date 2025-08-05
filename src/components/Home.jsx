import React from "react";
import image from "../asset/IMG-.jpg";
import shweta_resume from "../asset/shweta_resume!!.pdf";
// my-portfolio/src/asset/
const Home = () => {
  return (
    <section className="item" id="Home">
      <div className="left">
        <h1 style={{ color: "var(--higlightcolor)" }}>Hii I Am Shweta Rani</h1>
        <h1 style={{ color: "var(--higlightcolor)", width: "300px" }}>
          Software Developer
        </h1>
        <br />
        <p>I specialize in building high-performance web applications...</p>
        <br />
        <button className="btn">Hire me</button>
        <button className="btn-border">
          <a href={shweta_resume}>Download CV</a>
        </button>
        <br />
        <br />
        <div style={{ gap: "10px", display: "flex" }}>
          {[
            { href: "https://wa.me/917857949290", icon: "fa-whatsapp" },
            {
              href: "https://www.instagram.com/_sizzling__shweta_/",
              icon: "fa-instagram",
            },
            {
              href: "https://github.com/shweta-ah",
              icon: "fa-brands fa-square-github",
            },
            {
              href: "https://www.linkedin.com/in/shweta-rani-a186311b6/",
              icon: "fa-linkedin-in",
            },
          ].map(({ href, icon }) => (
            <li className="link" key={icon}>
              <a href={href} target="_blank" rel="noreferrer">
                <i className={`fa-brands ${icon}`}></i>
              </a>
            </li>
          ))}
        </div>
      </div>
      <div className="right">
        <img
          src={image}
          width="300"
          height="300"
          style={{
            borderRadius: "50%",
            objectFit: "cover",
          }}
          alt="browser not supported"

          // className="rotate"
          // alt="browser not support"
        />
      </div>
    </section>
  );
};

export default Home;
