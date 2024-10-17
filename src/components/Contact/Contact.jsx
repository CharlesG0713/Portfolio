import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="https://mail.google.com/mail/u/3/#inbox?compose=CllgCHrfTTcNTdTLNkCMsmMkzDzLRqkwjmPCBwpzWmwnjQzMHWlXlBQChGNCGDFgJHvXbvcwrbB">charlesjorcagamuzaran@gmail.com</a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/CharlesG0713">CharlesG0713</a>
        </li>
      </ul>
    </footer>
  );
};
