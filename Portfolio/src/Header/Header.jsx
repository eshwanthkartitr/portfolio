import React, { useState, useEffect } from 'react';
import logo from "../assets/my_logo.png";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Company Logo" className={styles.logo} />
      </div>
      {!isMobile && (
        <nav className={styles.navbar}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>Home</li>
            <li className={styles.navItem}>About</li>
            <li className={styles.navItem}>
              <a
                className={styles.a}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github <FontAwesomeIcon className={styles.icon} icon={faGithub} />
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
                <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
              </a>
            </li>
            <li className={styles.navItem}>Services</li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
