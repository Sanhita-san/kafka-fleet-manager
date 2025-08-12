import { Link } from "react-router";

import styles from "./Navbar.module.css";

import { MdMenu } from "react-icons/md";
import { navLinks, bottomNavLinks } from "./navLinks";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <MdMenu className={styles.menuIcon} />
      </Link>

      <ul>
        {navLinks.map((Icon, index) => (
          <Link to={Icon.link}>
            <li key={index}>
              <Icon.icon className={styles.icon} />
            </li>
          </Link>
        ))}
      </ul>

      <ul className={styles.bottomNav}>
        {bottomNavLinks.map((Icon, index) => (
          <Link to={Icon.link}>
            <li key={index}>
              <Icon.icon className={styles.icon} />
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
