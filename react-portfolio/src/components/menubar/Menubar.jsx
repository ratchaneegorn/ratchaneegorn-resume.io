import React, { useState } from "react";
import "./menubar.css";
import {
  BsFillHouseDoorFill,
  BsFillPersonFill,
  BsChatDotsFill,
  BsFillArchiveFill,
  BsFillBriefcaseFill,
} from "react-icons/bs";

export const Menubar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <BsFillHouseDoorFill />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <BsFillPersonFill />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
      >
        <BsFillArchiveFill />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BsFillBriefcaseFill />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BsChatDotsFill />
      </a>
    </nav>
  );
};
