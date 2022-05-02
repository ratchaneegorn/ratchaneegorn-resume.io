import React from "react";
import "./contact.css";
import { BsEnvelopeFill } from "react-icons/bs";
import Picture1 from "../../assets/Picture1.png";

const Contact = () => {
  return (
    <section id="contact">
      <div className="this_contact_contaioner">
        <h5>Hope to see you</h5>
        <h1>Contact me</h1>
        <div className="contact_all_option">
          <article className="contact_option">
            <BsEnvelopeFill size={30} />
            <h4>E-mail</h4>
            <h3>s.ratchaneegron@kkumail.com</h3>
            <a
              href="mailto:s.ratchaneegron@kkumail.com"
              className="btn btn-second"
            >
              Send a message
            </a>
          </article>
          <div className="about_me_image contact_me_image">
            <img src={Picture1} alt="picture-about-1" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
