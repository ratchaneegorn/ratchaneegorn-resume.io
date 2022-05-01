import React from "react";
import ParticlesBg from "particles-bg";
import { Header } from "./components/header/Header";
import { About } from "./components/about/About";
import { Skills } from "./components/skills/Skills";
import { Experience } from "./components/experience/Experience";
import { Contact } from "./components/contact/Contact";
import { Menubar } from "./components/menubar/Menubar";
export const App = () => {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Experience />
      <Contact/>
      <Menubar/>
    </>
  );
};

export default App;
