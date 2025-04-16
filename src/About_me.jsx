import React from "react";
import "./about_me.css";
import { motion } from "framer-motion";
import youtube from "./images/youtube.png";

const AboutMe = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.2,
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
      className="about_me"
      id="aboutMey"
    >
      <h2 className="heading">About Me</h2>
      <br />
      <div className="about_me_info">
        <p className="about_me_left">
          HELLO! <br /> My name is Tarun Nagle. I am tech enthusiast and keen interest
          in Creating Hard Surface Animation using Blender Workflow. You can
          find my work on YouTube
        </p>

        {/* <div className="about_me_right"></div> */}
      </div>
      <a href="https://www.youtube.com/@tarun_nagle" target="_blank">
        <img
          src={youtube}
          alt="https://www.youtube.com/@tarun_nagle"
          height="400px"
        />
      </a>
    </motion.div>
  );
};

export default AboutMe;
