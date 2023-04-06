import React from "react";
import { Github } from "./Github";
import { Linkedin } from "./LinkedIn";
import "./MediaBar.css";
import { Facebook } from "./Facebook";

export const MediaBar = () => {
  return (
    <div className="media-bar">
      <a href="https://www.linkedin.com/in/noah-clark-62532426b/">
        <Linkedin />
      </a>
      <a href="https://github.com/nclark561">
        <Github />
      </a>
      <a href="https://www.facebook.com/noah.clark.3785">
        <Facebook />
      </a>
    </div>
  );
};
