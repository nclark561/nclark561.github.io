import React from "react";
import "./MyProjects.css";
import pokelfLogo from "./project-images/pokelfLogo.png";
import narrativenexus from "./project-images/narrativenexus.png"
import jukify from './project-images/Jukify.png'

export const MyProjects = () => {
  return (
    <>
      <div className="projects-header">
        <h2>Some of my projects</h2>
      </div>
      <div className="projects-section">
        <div className="project-container">
          <div className="project-desc">
            <h2>Jukify</h2>
            <div className="desc-txt">
              <p>
                A jukebox app designed to allow users to host and join song queues, add songs, and upvote/downvote songs to control song order.
              </p>
            </div>
            <p className="proj-tech">
              Nextjs | TypeScript | SpotifyAPI | TailwindCSS | Socket.io
            </p>
          </div>
          <a href="https://www.youtube.com/watch?v=nK6ggr6-on0" target="_blank">
            <div className="img-div">
              <img className="jukify" src={jukify} alt="jukify" />
            </div>
          </a>
        </div>
        <div className="project-container pokelf-container">
          <a href="http://52.53.220.241:3000/" target="_blank">
            <div className="img-div">
              <img className="pokelf" src={pokelfLogo} alt="PokeLF" />
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
              React | AWS | Express | Node.js | PostgreSQL
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
              React | TypeScript | Nexjs | TailwindCSS | Prisma
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
