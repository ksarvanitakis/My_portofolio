import React from "react";
import "./portofolio.css";
import IMG5 from "../../assets/beerLogo.png";
import IMG1 from "../../assets/My private chef.png";
const Portofolio = () => {
  return (
    <section id="portofolio">
      <h5>My recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio__container">
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>The Beer App</h3>
          <div className="portofolio__item-cta">
          <a
            href="https://github.com/ksarvanitakis/The-Beer-App"
            className="btn"
            target="_blank">Github </a>
          <a
            href="https://github.com/ksarvanitakis/The-Beer-App"
            className="btn btn-primary"
            target="_blank"
          >Live Demo</a>
          </div>
        </article>
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>My Private Chef</h3>
          <div className="portofolio__item-cta">
          <a
            href="https://github.com/ksarvanitakis/client"
            className="btn"
            target="_blank"
          >
            Github
          </a>
          <a
            href="https://myprivatechef.herokuapp.com/"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portofolio;
