import Card from "./card/Card";
import styles from "./Dashboard.module.css";
import data from "../data/dashboardData.json";

const Dashboard = () => {
  return (
    <main className={styles.main}>
      <h2>Intellectual-Mongoose</h2>
      <div className={styles.dashboard}>
        {data.cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </main>
  );
};

export default Dashboard;
