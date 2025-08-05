import React from "react";

const Work = () => {
  let object = [
    {
      project_title: "CS Prep Website",
      path: "img/9.png",
      desc: "Provide platform for students to prepare for exams like GATE/UGCNET by personalized tests",
      Tech_used: "Technologies used – Express JS, Mongo DB.",
      demo: <a href="https://csprep-2.onrender.com/">Click Me</a>,
    },
    {
      project_title: "Tic Tac Toe Game",
      path: "img/7.png",
      desc: "Tic Tac Toe is a simple, turn-based game where two players take turns marking spaces on a 3x3 grid to align three symbols",
      Tech_used: "Technologies used – React JS, Javascript.",
      demo: <a href="https://tic-tac-toe-in-react.onrender.com/">Click Me</a>,
    },
    {
      project_title: "To Do Manage",
      path: "img/6.png",
      desc: "To-Do Manage is a simple task organizer that lets users add, update, delete, and track daily tasks with ease",
      Tech_used: "Technologies used – React JS, Javascript.",
      demo: (
        <a href="https://todo-application-08theme-switcher.onrender.com/">
          Click Me
        </a>
      ),
    },
    {
      project_title: "EDMAMA Clone",
      path: "img/8.png",
      desc: "An EDMAMA Clone is a recreated platform that provides moms and kids with curated products and a seamless shopping experience",
      Tech_used: "Technologies used – HTML, CSS.",
      demo: <a href="https://kids-clothing-website.onrender.com/">Click Me</a>,
    },
  ];
  return (
    <section style={{ padding: "10%", placeItems: "center" }} id="Works">
      <h1>My Works</h1>
      <br />
      <div className="box" style={{ height: "auto" }}>
        {object.map((title, index) => (
          <div className="card card-box Works" key={index}>
            <div>
              <div
                style={{
                  height: "200px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  src={title.path}
                  style={{
                    position: "absolute",
                    width: "100%",
                    top: 40,
                    left: 0,
                  }}
                  // className="rotate"
                  // alt="browser not support"
                />
              </div>
              <br />
              <h3 style={{ color: "var(--higlightcolor)" }}>
                {title.project_title}
              </h3>
              {/* <h4 style={{ color: "var(--higlightcolor)" }}>{title.demo}</h4> */}
              {/* {title.demo} */}
              <button>{title.demo}</button>
              <p>{title.desc}</p>
              <p style={{ color: "var(--higlightcolor)" }}>{title.Tech_used}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
