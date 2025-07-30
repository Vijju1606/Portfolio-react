import React from "react";
import "./Portfolio.css";

const Portfolio = () => (
  <div className="portfolio-bg">
    <div className="portfolio-content">
      <h2 className="portfolio-heading">
        <span role="img" aria-label="cap">🎓</span> Certificates &amp; Internships
      </h2>
      <div className="certificates-row">
        <div className="certificate-card red-gradient">
          <h3>Front-End Development Internship</h3>
          <p>APSCHE EduNet (June 5 - July 23, 2023)</p>
          <p>
            Earned a certificate after completing a four-week virtual internship.
            <a href="https://drive.google.com/file/d/12BrswhYj6nxmLYxA5bbxF1jqV9K7Eysz/view?usp=sharing" target="_blank" rel="noopener noreferrer"> click here </a>
            for certificate
          </p>
        </div>
        <div className="certificate-card yellow-gradient"></div>
      </div>

      <h2 className="portfolio-heading">
        <span role="img" aria-label="rocket">🚀</span> Projects
      </h2>
      <div className="projects-row">
        <div className="project-card green-gradient">
          <h3>Portfolio Website</h3>
          <p>
            Developed a responsive personal portfolio website using HTML, CSS, JavaScript.
          </p>
         <a href='https://drive.google.com/drive/folders/1IaHI0vmN5BGLY1WiFeDjQ9UV6oZfNKI5?usp=sharing'><button   className="learn-btn">Learn More..</button></a> 
         <a href='https://vijju1606.github.io/new-portfolio/'><button className="view-btn">Launch Project</button></a> 
        </div>
        <div className="project-card blue-gradient">
          <h3>Women Safety and Places Awareness App</h3>
          <p>
            Built a safety app using Java and Android, aimed at improving awareness of safe places for women.
          </p>
          <a href='https://drive.google.com/file/d/1S20QY3P3jQLy9ASvP7xouQlCguIjERwH/view?usp=sharing'><button className="learn-btn">Learn More</button></a>
            <button className="view-btn">Launch Project</button>    
        </div>
        <div className="project-card red-gradient">
          <h3>Personal Portfolio App</h3>
          <p>
            Created a  responsive Portfolio app using React.js showing my skills and projects.
          </p>
          <button className="learn-btn">Learn More</button>
          <button className="view-btn">Launch Project</button>
      </div>
      <div className="project-card yellow-gradient">
          <h3>QR code Generater</h3>
          <p>
            Created a  Qrcode generater app based on text using React.js.
          </p>
         <a href='https://github.com/Vijju1606/qrgen'><button className="learn-btn">Learn More</button></a> 
         <a href=' https://vijju1606.github.io/qrgen/'><button className="view-btn">Launch Project</button></a> 
      </div>
      
    </div>
  </div>
  </div>);

export default Portfolio;