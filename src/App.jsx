import React, { useEffect } from "react";
import "./App.css";
import "boxicons/css/boxicons.min.css";
import Typed from "typed.js";

// Images
import Khalid from "./assets/khalid.png";
import HTML from "./assets/html.png";
import CSSimg from "./assets/css.png";
import JS from "./assets/js.png";
import REACT from "./assets/react.png";
import NODE from "./assets/node.png";
import Express from "./assets/Express.png";
import Mongodb from "./assets/Mongodb.png";

const skills = [
  { name: "HTML", img: HTML, percent: 80 },
  { name: "CSS", img: CSSimg, percent: 70 },
  { name: "JavaScript", img: JS, percent: 60 },
  { name: "React.js", img: REACT, percent: 70 },
  { name: "Node.js", img: NODE, percent: 74 },
  { name: "Express.js", img: Express, percent: 85 },
  { name: "MongoDB", img: Mongodb, percent: 70 },
];

const proSkills = [
  { name: "Creativity", percent: 90 },
  { name: "Communication", percent: 65 },
  { name: "Problem Solving", percent: 75 },
  { name: "Team Work", percent: 85 },
];

const App = () => {
  useEffect(() => {
    const typed = new Typed(".Text", {
      strings: ["Frontend Developer", "Backend Developer", "Web Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <h1>Portfolio.</h1>
        </a>

        <nav className="Navbar">
          <a href="#" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#Skill">Skill</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Home Section */}
      <section className="home">
        <div className="home-content-wrapper">
          <div className="home-content-text">
            <h3>Hello It's Me</h3>
            <h1>Malik Muhammad Khalid</h1>
            <h3>
              And I'm a <span className="Text"></span>
            </h3>

            <p>
              I'm a motivated fresher learning web development.
              I enjoy building projects & improving my skills.
            </p>

            <div className="home-sci">
              <a href="#"><i className="bx bxl-facebook"></i></a>
              <a href="#"><i className="bx bxl-instagram"></i></a>
              <a href="#"><i className="bx bxl-whatsapp"></i></a>
            </div>

            <a href="#" className="btn-box">More About Me</a>
          </div>

          <div className="home-content-image">
            <img src={Khalid} alt="Khalid" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-img">
          <img src={Khalid} alt="Khalid" />
        </div>

        <div className="about-text">
          <h2>About <span>Me</span></h2>
          <h4>MERN Stack Developer</h4>
          <p>
            I’m a fresher MERN Stack Developer who loves creating modern web applications.
            I enjoy solving problems and building projects using 
            <span> HTML, CSS, JavaScript, React.</span>
          </p>

          <a href="#" className="btn-box">More About Me</a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="Skill" id="Skill">
        <h1 className="sub-tittle">My <span>Skills</span></h1>

        <div className="Technical-bars">
          {skills.map((skill) => (
            <div className="bar" key={skill.name}>
              <div className="info">
                <img src={skill.img} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
              <div className="line">
                <div
                  className="line-fill"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}

          <div className="container1">
            <h1>Professional Skills</h1>
            <div className="circle-wrapper">
              {proSkills.map((s) => (
                <div
                  className="radial-bar"
                  key={s.name}
                  style={{ "--progress": s.percent }}
                >
                  <svg viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="80" className="progress-bg" />
                    <circle cx="100" cy="100" r="80" className="progress-bar" />
                  </svg>
                  <div className="percentage">{s.percent}%</div>
                  <div className="text">{s.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION (COMBINED VERSION) */}
      <section className="contact-section" id="contact">
        <h2>Let's Work Together</h2>
        <p>
          I'm open to opportunities, freelance projects, collaborations, or even just a friendly chat.
          Feel free to reach out!
        </p>

        {/* Contact Buttons */}
        <div className="contact-buttons">
          <a href="mailto:khalid094p@gmail.com" className="contact-btn">
            <i className="bx bx-envelope"></i> Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/malik-khalid-1209b4334/"
            target="_blank"
            rel="noreferrer"
            className="contact-btn"
          >
            <i className="bx bxl-linkedin"></i> LinkedIn
          </a>
          <a
            href="https://github.com/Malik-Jawad7?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="contact-btn"
          >
            <i className="bx bxl-github"></i> GitHub
          </a>
        </div>

        {/* Form */}
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent!");
          }}
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit" className="contact-btn">Submit</button>
        </form>
      </section>
    </>
  );
};

export default App;
