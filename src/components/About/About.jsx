import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              As a passionate aspiring web developer, I focus on honing my frontend skills by working on various projects and exploring different technologies. I regularly build responsive websites using HTML, CSS, and JavaScript, experimenting with frameworks like React to enhance my development speed and efficiency.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
              As an aspiring web developer with a keen interest in UI/UX design, I dedicate time to understanding user-centered design principles and the importance of creating intuitive interfaces. I practice by analyzing existing websites and applications, identifying usability issues, and proposing design improvements.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
