import styles from "./Header.module.css";

import { FaUserCircle } from "react-icons/fa";
import { MdArticle } from "react-icons/md";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Left Section */}
      <div className={styles.logo}>
        <h1 className={styles.title}>Kafka Fleet Manager</h1>
        <span className={styles.subtitle}>by Platformatory</span>
      </div>

      {/* Right Section */}
      <div className={styles.right}>
        <fieldset>
          <legend>Organization</legend>
          <select id="organization-name" className={styles.dropdown}>
            <option>Acme Fleet</option>
          </select>
        </fieldset>
        <MdArticle className={styles.icon} />
        <FaUserCircle className={`${styles.icon} ${styles.profile}`} />
      </div>
    </header>
  );
};

export default Header;
