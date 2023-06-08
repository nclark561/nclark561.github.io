import React from "react";
import "./MyProjects.css";
import pokelfLogo from "./project-images/pokelfLogo.png";
import narrativenexus from "./project-images/narrativenexus.png"

export const MyProjects = () => {
  return (
    <>
      <div className="projects-header">
        <h2>Some of my projects</h2>
        <div className="git-link">
          <h3>My github</h3>
          <a href="https://github.com/nclark561" className="github-link" target="_blank">
            here
          </a>
        </div>
        <div className="project-container">
          <a href="http://52.53.220.241/" target="_blank">
            <div className="img-div">
              <img src={pokelfLogo} alt="PokeLF" />
            </div>
          </a>
          <div className="project-desc">
            <h2>Poke LF</h2>
            <div className="desc-txt">
              <p>
                A fullstack web app designed to assist pokemon trainers with
                trading.
              </p>
            </div>
            <p className="proj-tech">
              React.js | AWS | Express | Node.js | PostgreSQL
            </p>
          </div>
        </div>
        <div className="project-container">
          <div className="project-desc">
            <h2>Narrative Nexus</h2>
            <div className="desc-txt">
              <p>
                A NextJS app created for aspiring authors to organize their thoughts and start their journey to write their dream story.
              </p>
            </div>
            <p className="proj-tech">
              React | TypeScript | NextJS | TailwindCSS | Prisma
            </p>
          </div>
          <a href="https://narrative-nexus.vercel.app/" target="_blank">
            <div className="img-div">
              <img className="narr" src={narrativenexus} alt="narrative-nexus" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};
