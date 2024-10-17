import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Charles</h1>
        <p className={styles.description}>
        I’m a regular student passionate about technology and design, with a goal to become a web developer. I’m eager to learn the core technologies of web development like HTML, CSS, and JavaScript, and I'm also exploring frameworks like React. My focus is on building visually appealing, responsive, and functional websites.
        </p>
        <a href="https://web.facebook.com/chrlsalldway/" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/myImage.jpeg")}
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
