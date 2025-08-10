import Card from "./card/Card";
import styles from "./Dashboard.module.css";

const dashboard = () => {
  const cards = [
    "cluster info",
    "performance",
    "kubernetes fleet info",
    "Dashboards",
    "Actions",
    "Billing",
    "Endpoints",
  ];
  return (
    <main className={styles.main}>
      <h2>Intellectual-Mongoose</h2>
      <div className={styles.dashboard}>
        {cards.map((cardNm, index) => (
          <Card key={index} title={cardNm} />
        ))}
      </div>
    </main>
  );
};

export default dashboard;
