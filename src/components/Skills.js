import React from "react";
import "./Skills.css";

export const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-div">
        <div className="skills">
          <h3>Frontend</h3>
          <div className="list-container">
            <ul className="skills-list">
              <li>React</li>
              <li>TailwindCSS</li>
              <li>Angular</li>
            </ul>
            <ul className="skills-list">
              <li>NextJS</li>
              <li>Typescript</li>
              <li>Remix</li>
            </ul>
          </div>
        </div>
        <div className="skills">
          <h3>Backend</h3>
          <div className="list-container">
            <ul className="skills-list">
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>Sequelize</li>
            </ul>
            <ul className="skills-list">
              <li>Nestjs</li>
              <li>Socket.io</li>
              <li>Prisma</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
