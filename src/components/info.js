import React from "react";
import Typing from 'react-typing-animation';
import FadeIn from 'react-fade-in';

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaInstagram as Insta,
  FaLinkedinIn as LinkedinIn,
  FaGoogle as Google,
  FaHackerrank as Hackerrank
} from "react-icons/fa";

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <Typing speed={100}>
        <div className="display-4" style={{ color: "#FF8A00" }}>
          <span style = {{color : "white"}}>Hello, I'm</span> <br />
          Seshadri.
        </div>
      </Typing>
      <div className="h3 code mt-4 mb-1">About {"{"}</div>
      <div className="row">
        <div className="text-muted mx-5 my-4 h4 text-justify info col-md-6" >
          A Passionate AI, ML Enthusiast, Software Developer and a
          Student of Vedas.
          <br/> 
          You can connect with me through these links.
        </div>
      </div>
      <div className="h3 code mt-0 mb-3">{"}"}</div>
      <br></br>
      <br></br>
      <FadeIn delay={3000}>
        <div className="h1 mt-5">
          <a className="mr-5 icon" href="https://twitter.com/Sesha1011">
            <Twitter className="fa-fade"/>
          </a>
          <a className="mr-5 icon" href="https://instagram.com/sesh10">
            <Insta/>
          </a>
          <a className="mr-5 icon" href="https://github.com/sesh10">
            <Github/>
          </a>
          <a className="mr-5 icon" href="https://www.youtube.com/channel/UCw0FDIL-HpcfzEZrjcQwhMQ">
            <LinkedinIn/>
          </a>
          <a className="mr-5 icon" href="mailto://seshadripv10@gmail.com">
            <Google/>
          </a>
          <a className="mr-5 icon" href="https://www.hackerrank.com/sesh10">
            <Hackerrank/>
          </a>
        </div>
      </FadeIn>
    </div>
  )
}
