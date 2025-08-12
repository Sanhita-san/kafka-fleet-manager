import { NavLink } from "react-router";

import styles from "./Navbar.module.css";

import { MdMenu } from "react-icons/md";
import { navLinks, bottomNavLinks } from "./navLinks";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <MdMenu className={styles.menuIcon} />

      <ul>
        {navLinks.map((Icon, index) => (
          <NavLink
            to={Icon.link}
            className={({ isActive }) =>
              isActive ? styles.active : styles.inActive
            }
          >
            <li key={index}>
              <Icon.icon className={styles.icon} />
            </li>
          </NavLink>
        ))}
      </ul>

      <ul className={styles.bottomNav}>
        {bottomNavLinks.map((Icon, index) => (
          <NavLink
            to={Icon.link}
            className={({ isActive }) =>
              isActive ? styles.active : styles.inActive
            }
          >
            <li key={index}>
              <Icon.icon className={styles.icon} />
            </li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
