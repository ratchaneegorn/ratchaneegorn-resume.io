import React from "react";
import "./about.css";
import Picture2 from "../../assets/Picture2.png";
import { BsTrophy, BsBookFill, BsGlobe } from "react-icons/bs";

export const About = () => {
  return (
    <section id="about">
      <div className="container ">
        <h5>Get to know</h5>
        <h1>About me</h1>
        <h2>
          2019 - 2022 | Bachelor of Computer engineering at khon kaen university
        </h2>
        <div className="about_container">
          <div className="about_content">
            <div className="about_all_card">
              <article className="about_card">
                <BsTrophy className="about_card_icon" />
                <h5>Experience</h5>
                <small>new developer</small>
              </article>
              <article className="about_card">
                <BsBookFill className="about_card_icon" />
                <h5>Projects</h5>
                <small>5 projects in class</small>
              </article>
              <article className="about_card">
                <BsGlobe className="about_card_icon" />
                <h5>Language</h5>
                <small>English and Thai</small>
              </article>
            </div>
            <p>
              I'm a computer engineering interested in developing websites and
              mobile apps from Javascript and React. I have a good understanding
              of OOP, software achitecture able to use REST API, JSON, and basic
              SQL as well.
            </p>
            <a href="#contact" className="btn btn-primary">
              Contact me
            </a>
          </div>
          <div className="about_me">
            <div className="circle"></div>
            <div className="circle-mini"></div>
            <div className="about_me_image">
              <img src={Picture2} alt="picture-about-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

