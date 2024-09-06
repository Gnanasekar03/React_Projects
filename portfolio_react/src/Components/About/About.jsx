import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";
import sandy_img from '../../assets/sandy_img.jpg';


const About = () => {
  return (
    <div id="About" className="about">
      <div className="about-title">
        <h1>About Me </h1>
        <img src={theme_pattern} alt="" />
      </div>
      < div className="about-sections">

        <div className="about-left">
          <img src={sandy_img} alt="" />
        </div>

        <div className="about-right">

          <div className="about-para">
            <p>
              I’m a dedicated Front-End Developer with a passion for creating
              intuitive and dynamic web applications. Skilled in HTML, CSS, and
              JavaScript, I focus on delivering high-quality, user-friendly
              digital experiences.
            </p>
            <p>
              I'm always eager to learn and take on new challenges in web
              development...!
            </p>
          </div>

            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p> <hr style={{ width:"45%"}} /></div>
                <div className="about-skill"><p>JavaScript</p> <hr style={{ width:"80%"}} /></div>
                <div className="about-skill"><p>React Js</p> <hr style={{ width:"70%"}} /></div>
                <div className="about-skill"><p>Java & Sql </p> <hr style={{ width:"50%"}} /></div>
            </div>
          </div>
        </div>
        <div className="about-achievments">
            <div className="about-achievment">
                <h1>1+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievment">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievment">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
            <hr />
        </div>
      </div>
  );
};

export default About;
