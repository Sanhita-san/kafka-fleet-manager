import styles from "./Header.module.css";

import { FaUserCircle } from "react-icons/fa";
import { MdArticle } from "react-icons/md";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import { MdNavigateNext } from "react-icons/md";

const Header = () => {
  const breadcrumbs = [
    <p>Home</p>,
    <p>Cluster</p>,
    <p>Intelligence Mongoose</p>,
  ];

  return (
    <header className={styles.header}>
      <div className={styles.topHeader}>
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
      </div>

      <Breadcrumbs
        separator={
          <MdNavigateNext
            style={{
              fontSize: "20px",
              color: "var(--color-text-muted)",
            }}
          />
        }
        aria-label="breadcrumb"
        style={{
          padding: "10px 20px",
          color: "var(--color-primary)",
          fontSize: "14px",
        }}
      >
        {breadcrumbs}
      </Breadcrumbs>
    </header>
  );
};

export default Header;
