import React from "react";
import "./header.css";
import Download from "./Download";

import profile from "../../assets/profile.jpg";
import HeaderSocial from "./HeaderSocial";
import { Menubar } from "../menubar/Menubar";

export const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello, I'm</h5>
        <h1>Ratchaneegorn Srijan-on</h1>
        <h2>web/app developer</h2>
        <Download />
        <div className="proflie">
          <img src={profile} alt="profile image" height="339" width="298" />
        </div>
        <h1>1.22</h1>
        <Menubar/>
        <HeaderSocial/>
        
      </div>
    </header>
  );
};
