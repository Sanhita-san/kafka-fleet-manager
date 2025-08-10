import styles from "./Card.module.css";
import clusterData from "../../data/clusterData.json";

import { FaCloud } from "react-icons/fa";
import { MdMoreVert } from "react-icons/md";

const Card = ({ title }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <FaCloud className={styles.icon} />
        <h3>{title}</h3>
        <MdMoreVert className={`${styles.icon} ${styles.moreIcon}`} />
      </div>

      <div className={styles.cardBody}>
        <dl className={styles.infoList}>
          {clusterData.map((data, index) => {
            return (
              <div className={styles.infoItem} key={index}>
                <dt>{data.label}</dt>
                <dd>{data.value}</dd>
              </div>
            );
          })}
        </dl>
      </div>
    </div>
  );
};

export default Card;
