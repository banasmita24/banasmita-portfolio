import React from 'react';
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../index.css';
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Socials = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Let's connect!
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Socials
        </h2>
      </motion.div>
      <div className="socials">
        <a
          href="https://github.com/banasmita24"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="social-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/banasmita-jena-z2405/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="social-icon" />
        </a>
        <a
          href="https://www.instagram.com/banasmita_jena_5/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className="social-icon" />
        </a>
        <a
          href="https://x.com/Banasmita24"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
        >
          <FaTwitter className="social-icon" />
        </a>
        <a
          href="mailto:banasmitajena2405@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Gmail"
        >
          <FaEnvelope className="social-icon" />
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(Socials, "socials");
