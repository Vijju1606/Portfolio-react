import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./About.css"; // Create/adjust this CSS

const slides = [
  {
    id: "education",
    label: "EDUCATION",
    content: (
      <div className="slide-content">
        <h2>EDUCATION</h2>
        <h3>SSC</h3>
        <p>Completed 10th class at Z.P. High School in 2018, achieving a CGPA of 9.5.</p>
        <h3>Intermediate</h3>
        <p>Completed Intermediate Education at Narayana Junior College in 2020, with a CGPA of 9.3.</p>
        <h3>B.TECH</h3>
        <p>Earned a Bachelor's degree in Computer Science and Engineering from MES College, graduating in 2024 with a CGPA of 7.3.</p>
      </div>
    ),
  },
  {
    id: "experience",
    label: "EXPERIENCE",
    content: (
      <div className="slide-content">
        <h2>EXPERIENCE</h2>
        <p>Describe your experience here.</p>
      </div>
    ),
  },
  {
    id: "skills",
    label: "SKILLS",
    content: (
      <div className="slide-content" id="skills">
        <h2>SKILLS</h2><div> <h3>technical skills</h3>
      <ul>
        <li>Programming Languages: C, Java, Python</li>
        <li>Web Development: HTML, CSS, JavaScript, Bootstrap,react.js</li>
        <li>Database Management: SQL</li></ul></div>

       <div><h3>soft skills</h3>
        <ul>
          <li>Quick Learning</li>
          <li>Communication Skills</li>
          <li>Problem Solving</li>
          <li>Team Collaboration</li>
          </ul></div>
        
      </div>
    ),
  },
];

const About = () => (
  <div className="about-bg">
    <Navbar />
    <div className="about-layout">
      <nav className="side-nav">
        <ul>
          {slides.map((slide) => (
            <li key={slide.id}>
              <a href={`#${slide.id}`}>{slide.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <main className="slides-container">
        {slides.map((slide) => (
          <section id={slide.id} key={slide.id} className="slide-section">
            {slide.content}
          </section>
        ))}
      </main>
    </div>
   
  </div>
);

export default About;