import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className='header_social'>
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin/>
      </a>
      <a href="https://github.com" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocial;
