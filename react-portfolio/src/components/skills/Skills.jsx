import React from "react";
import "./skills.css";
import { BsTrophy, BsBookFill } from "react-icons/bs";

export const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <div className="skill_header">
          <h5>What skills i have</h5>
          <h1>My Skills</h1>
        </div>
        <div className="container_skill_card">
          <article className="skill_card">
            <h2>Web</h2>
            <li>HTML, Javascript, CSS, Bootstarp</li>
            <li>NodeJS, React.js</li>
            <li>SQL, Firebase, PHP</li>
            <li>Web design, AdobeXD</li>
            <li>JSON, Web service, REST API, Framework</li>
          </article>
          <article className="skill_card_mobile">
            <h2>Mobile</h2>
            <li>Kotlin, React Native</li>
            <li>Android studio</li>
            <li>Design Application by AdobeXD</li>
          </article>
        </div>
      </div>
    </section>
  );
};
