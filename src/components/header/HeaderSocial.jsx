import React, { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const HeaderSocial = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <div className="header_social">
      <a
        href="https://linkedin.com"
        target="_blank"
        onClick={() => setActiveNav("#linkedin")}
        className={activeNav === "#linkedin" ? "active" : ""}
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com"
        target="_blank"
        onClick={() => setActiveNav("#github")}
        className={activeNav === "#github" ? "active" : ""}
      >
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocial;
