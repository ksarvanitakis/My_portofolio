import React from "react";
import "./about.css";
import ME from "../../assets/me-about.JPG";
import { FaAward } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small> 3+ Years Working</small>
            </article>

            <article className="about__card">
              <FaUniversity className="about__icon" />
              <h5>Background</h5>
              <small> Studies </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small> 2 Projects </small>
            </article>
          </div>

          <p>
            A former Environmental scientist, decided to do a career change and
            follow my passion for web development. I am a goal-oriented and
            cheerful team player always eager to accept new challenges. Strong
            supporter of lifelong learning that keeps being my motivation in
            life.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
