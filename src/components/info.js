import React from "react";
import Typing from 'react-typing-animation';
import FadeIn from 'react-fade-in';
import Photos from './photos'
// import CrossfadeImage from 'react-crossfade-image';

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaInstagram as Insta,
  FaLinkedinIn as LinkedinIn,
  FaGoogle as Google
} from "react-icons/fa";

export default function info() {
  return (
    <div>
      <div className="container bg">
      <br></br>
      <br></br>
      <Photos></Photos>
      <Typing speed={50}>
        <div className="display-4" style={{ color: "#FF8A00" }}>
          <span style = {{color : "white"}}>Hello,<br/> I'm </span>
          Seshadri.
        </div>
      </Typing>
      
      <FadeIn delay={900}>
        <div className="h3 code mt-4 mb-1 about">About <span className="brackets">{"{"}</span></div>
        <div className="text-muted mx-5 my-4 h4 text info col-md-6" >
          A Passionate AI, ML Enthusiast, Software Developer and a Student of Vedas.
          <br/> 
          You can connect with me through these links.
        </div>
        <div className="h3 code mt-0 mb-3"><span className="brackets">{"}"}</span></div>
      </FadeIn>

      <br></br>
      
      <div className="icon-tray">
      <FadeIn delay={3200}>
        <div className="h1 mt-5">
          <a className="mr-5 icon" href="https://twitter.com/Sesha1011">
            <Twitter className="fa-fade"/>
          </a>
          <a className="mr-5 icon iconinsta" href="https://instagram.com/sesh10">
            <Insta/>
          </a>
          <a className="mr-5 icon" href="https://github.com/sesh10">
            <Github/>
          </a>
          <a className="mr-5 icon" href="https://www.linkedin.com/in/sesha1098/">
            <LinkedinIn/>
          </a>
          <a className="mr-5 icon" href="mailto://seshadripv10@gmail.com">
            <Google/>
          </a>
        </div>
      </FadeIn>
      </div>
    </div>
    </div>
  )
}
