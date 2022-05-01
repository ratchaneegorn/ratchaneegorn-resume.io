import React from "react";
import "./experience.css";
import Digipay from "../../assets/digipay.png";
import Hospital from "../../assets/kku-hospital.jpg";
import AllAlert from "../../assets/KKUAllAlert.jpg";
import Renew from "../../assets/renew.jpg";

export const Experience = () => {
  return (
    <section id="experience">
      <div className="container exp_container">
        <h5>An experience i have</h5>
        <h1>My Experience</h1>
        <div className="card_all_exp">
          <article className="card_exp">
            <img
              src={Hospital}
              alt="profile image"
              height="120"
              width="250"
              className="exp_img"
            />
            <h5>Web App for KKU hospital service</h5>
            <a href="#contact" className="btn btn-primary">
              more
            </a>
          </article>
          <article className="card_exp">
            <img
              src={Digipay}
              alt="profile image"
              height="120"
              width="250"
              className="exp_img"
            />
            <h5>Web App for Digipay service</h5>
            <a href="#contact" className="btn btn-primary">
              more
            </a>
          </article>
          <article className="card_exp mobile">
            <img
              src={Renew}
              alt="profile image"
              height="120"
              width="250"
              className="exp_img"
            />
            <h5>
              Android app for IT equipment available to borrow KKU Library
            </h5>
            <a href="#contact" className="btn btn-primary">
              more
            </a>
          </article>
          <article className="card_exp">
            <img
              src={AllAlert}
              alt="profile image"
              height="120"
              width="250"
              className="exp_img"
            />
            <h5>Android app for reporting disaster around KKU</h5>
            <a href="#contact" className="btn btn-primary">
              more
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};
