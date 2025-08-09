import styles from "./Card.module.css";

import CloudIcon from "@mui/icons-material/Cloud";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <CloudIcon />
        <h3>Cluster Info</h3>
        <MoreVertIcon />
      </div>
      <div className={styles.cardBody}>
        <table>
          <tr>
            <th>Cluster ID</th>
            <td>92749826y357yfjskf-43734</td>
          </tr>
          <tr>
            <th>SKU</th>
            <td>STRIMZI/Shared</td>
          </tr>
          <tr>
            <th>Organization</th>
            <td>acme</td>
          </tr>
          <tr>
            <th>Date Created</th>
            <td>Jun 17, 2025, 11:53AM</td>
          </tr>
          <tr>
            <th>Date Modified</th>
            <td>Jun 17, 2025, 12:05PM</td>
          </tr>
          <tr>
            <th>Infrastructure</th>
            <td>different-aardwolf</td>
          </tr>
          <tr>
            <th>Version</th>
            <td>3.8.0</td>
          </tr>
          <tr>
            <th>Status</th>
            <td>Healthy</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Card;
