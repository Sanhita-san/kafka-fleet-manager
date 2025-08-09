import styles from "./Navbar.module.css";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { navLinks, bottomNavLinks } from "./navLinks";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <MenuOutlinedIcon className={styles.menuIcon} />

      <ul>
        {navLinks.map((Icon, index) => (
          <li key={index}>
            <Icon className={styles.icon} />
          </li>
        ))}
      </ul>

      <ul className={styles.bottomNav}>
        {bottomNavLinks.map((Icon, index) => (
          <li key={index}>
            <Icon className={styles.icon} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
