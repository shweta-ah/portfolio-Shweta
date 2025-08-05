import React from "react";
import App_Design from "../asset/cb6d07ce3ed6d97d88b0140963844161-removebg-preview.png";

const Skills = () => {
  let object = [
    {
      skil: "Python Programming",
      path: "img/4.png",
      level: "Intermediate",
      experience: "2 years",
      category: "Python Programming",
      certified: true,
      description:
        "I specialize in writing clean, efficient, and scalable Python code that automates complex workflows. With a strong foundation in core Python and its powerful libraries, I build solutions that are both reliable and easy to maintain. My focus is always on performance, readability, and writing code that follows modern best practices.",
    },
    {
      skil: "MERN Stack",
      path: "img/2.png",
      level: "Advanced",
      experience: "1.5 years",
      category: "MERN Stack",
      certified: false,
      description:
        "I build full-stack web applications using the MERN stack—MongoDB, Express.js, React.js, and Node.js. From creating powerful RESTful APIs to designing dynamic and responsive user interfaces, I handle both frontend and backend with efficiency and clean code practices.",
    },
    {
      skil: "Full Stack Development",
      path: "img/5.png",
      level: "Intermediate",
      experience: "1 year",
      category: "Full Stack Development",
      certified: true,
      description:
        "I specialize in Full Stack Web Development, handling everything from responsive frontend designs to secure and scalable backend systems. Whether it's crafting interactive user interfaces or building robust APIs, I ensure seamless user experiences across the stack.",
    },
  ];

  return (
    <section style={{ padding: "10%", placeItems: "center" }}>
      <h1>My Skills</h1>
      <br />
      <div className="box" style={{ height: "auto" }}>
        {object.map((skill, index) => (
          <div className="card card-box" key={index}>
            <div>
              <img
                src={skill.path}
                className="rotate"
                style={{ transform: "rotateX(0deg)" }}
                alt="browser not support"
              />
              <br />
              <h1 style={{ color: "var(--higlightcolor)" }}>
                {skill.category}
              </h1>
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
