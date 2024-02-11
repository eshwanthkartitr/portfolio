import logo from "../assets/my_logo.png";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Company Logo" className={styles.logo} />
      </div>
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
    </header>
  );
}

export default Header;
