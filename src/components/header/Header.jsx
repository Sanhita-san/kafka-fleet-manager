import { useState, useEffect } from "react";
import styles from "./Header.module.css";

// For Icons
import { FaUserCircle } from "react-icons/fa";
import { MdArticle } from "react-icons/md";

// For Breadcrumb
import { useLocation } from "react-router";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { MdNavigateNext } from "react-icons/md";

// For TextField
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";

const Header = () => {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState([<p>Home</p>]);

  const [organization, setOrganization] = useState("Acme Fleet");
  const handleChange = (event) => {
    setOrganization(event.target.value);
  };

  // UseEffect to change BreadCrumb Data
  useEffect(() => {
    const lastSegment = location.pathname.split("/").filter(Boolean).pop();

    if (lastSegment === "clusters") {
      setBreadcrumbs([
        <p key="home">Home</p>,
        <p key="cluster">Cluster</p>,
        <p key="intelligence">Intelligence Mongoose</p>,
      ]);
    } else if (lastSegment === "billing") {
      setBreadcrumbs([<p key="home">Home</p>, <p key="billing">Billing</p>]);
    } else {
      // Default
      setBreadcrumbs([
        <p key="home">Home</p>,
        <p key={lastSegment}>{lastSegment}</p>,
      ]);
    }
  }, [location]);

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
          {/* Organization Field Selection */}
          <Box
            sx={{
              width: "350px",
              "& .MuiInputLabel-root": {
                fontFamily: "var(--font-primary)",
                fontSize: "16px",
                color: "var(--color-text)",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                fontSize: "16px",
                border: "2px solid var(--color-border)",
                height: "45px",
                outline: "none",
              },
            }}
          >
            <FormControl fullWidth>
              <InputLabel id="organization-name">Organization</InputLabel>
              <Select
                labelId="organization-name"
                id="organization-name"
                value={organization}
                label="Organization"
                onChange={handleChange}
                sx={{
                  borderRadius: "0px",
                  fontFamily: "var(--font-primary)",
                  color: "var(--color-text)",
                  height: "45px",
                  fontSize: "16px",
                }}
              >
                <MenuItem value={"Acme Fleet"}>Acme Fleet</MenuItem>
                <MenuItem value={"Another Fleet"}>Another Fleet</MenuItem>
                <MenuItem value={"Different Fleet"}>Different Fleet</MenuItem>
              </Select>
            </FormControl>
          </Box>

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
          padding: "5px 20px",
          color: "var(--color-primary)",
          fontSize: "14px",
          textTransform: "capitalize",
        }}
      >
        {breadcrumbs}
      </Breadcrumbs>
    </header>
  );
};

export default Header;
