import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsFill } from "react-icons/ri";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills that I have</h5>
      <h2>My experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <FaHtml5 className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <IoLogoJavascript className="experience__details-icon" />
              <div>
                <h4>React</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <RiReactjsFill className="experience__details-icon" />
              <div>
                <h4>TypeScript</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>NodeJS</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <FaHtml5 className="experience__details-icon" />
              <div>
                <h4>ExpressJS</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <IoLogoJavascript className="experience__details-icon" />
              <div>
                <h4>MongoDB/PostgreSQL</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <RiReactjsFill className="experience__details-icon" />
              <div>
                <h4>REST</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>GraphQL</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
