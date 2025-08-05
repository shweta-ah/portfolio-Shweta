import React from "react";

const Contact = () => {
  return (
    <section className="item" id="Contact">
      <div className="left">
        <ul>
          <li className="link">
            <i className="fa-solid fa-location-dot"></i> Dak Bunglow Patna
          </li>
          <li className="link">
            <i className="fa-solid fa-phone"></i> 7857949290
          </li>
          <li className="link">
            <i className="fa-solid fa-envelope"></i> iamshwetarani78@gmail.com
          </li>
          <li className="link">
            <a href="https://wa.me/917857949290">
              <i className="fa-brands fa-whatsapp"></i>
            </a>{" "}
            Whatsapp
          </li>
          <li className="link">
            <a href="https://www.instagram.com/_sizzling__shweta_/">
              <i className="fa-brands fa-instagram"></i>
            </a>{" "}
            Instagram
          </li>
          <li className="link">
            <a href="https://github.com/shweta-ah">
              <i className="fa-brands fa-square-github"></i>
            </a>{" "}
            Github
          </li>
          <li className="link">
            <a href="https://www.linkedin.com/in/shweta-rani-a186311b6/">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>{" "}
            LinkedIn
          </li>
        </ul>
      </div>
      <div className="right">
        <form>
          <h1>Contact Me</h1>
          <div className="group-input">
            <label htmlFor="Name">Name</label>
            <input type="text" placeholder="Name" id="Name" />
          </div>
          <div className="group-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="iamshwetarani@gmail.com"
              id="email"
            />
          </div>
          <div className="group-input" style={{ display: "block" }}>
            <label htmlFor="massages">Messages</label>
            <textarea
              name="massages"
              id="massages"
              rows="8"
              cols="35"
              placeholder="Type your message here"
            ></textarea>
          </div>
          <br />
          <button
            className="btn-border"
            onClick={() => alert("This feature is not implemented")}
            style={{ width: "90%", textAlign: "center" }}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
