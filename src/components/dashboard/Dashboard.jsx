import Card from "../card/Card.jsx";
import styles from "./Dashboard.module.css";
import { cards } from "./dashboardData.js";

const Dashboard = () => {
  return (
    <>
      <h2>Intellectual-Mongoose</h2>
      <div className={styles.dashboard}>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
