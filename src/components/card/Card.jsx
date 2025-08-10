import styles from "./Card.module.css";

import { FaCloud } from "react-icons/fa";
import { MdMoreVert } from "react-icons/md";
import { MdBarChart } from "react-icons/md";
import { MdEqualizer } from "react-icons/md";
import { MdBusiness } from "react-icons/md";
import { BsGrid1X2Fill } from "react-icons/bs";
import Gauge from "./Gauge";

const icons = {
  cluster: <FaCloud className={styles.icon} />,
  performance: <MdBarChart className={styles.icon} />,
  kubernetes: <MdBusiness className={styles.icon} />,
  dashboard: <MdEqualizer className={styles.icon} />,
  action: <BsGrid1X2Fill className={styles.icon} />,
};

const Card = ({
  title,
  icon,
  fields,
  gauges,
  links,
  sections,
  actionsMenu,
}) => {
  return (
    <div
      className={`${styles.card} ${gauges ? styles.spanTwo : styles.spanOne}`}
    >
      <div className={styles.cardHeader}>
        {icons[icon]}
        <h3>{title}</h3>
        {actionsMenu && (
          <MdMoreVert className={`${styles.icon} ${styles.moreIcon}`} />
        )}
      </div>

      <div className={styles.cardBody}>
        {fields && (
          <dl className={styles.fieldsList}>
            {fields.map((data, index) => {
              return (
                <div className={styles.fieldsItem} key={index}>
                  <dt>{data.label}</dt>
                  <dd>{data.value}</dd>
                </div>
              );
            })}
          </dl>
        )}

        {gauges && (
          <div className={styles.gaugeList}>
            {gauges.map((data, index) => {
              return (
                <div className={styles.gaugeItem} key={index}>
                  <p>{data.label}</p>
                  <Gauge value={data.value} text={data.text} />
                </div>
              );
            })}
          </div>
        )}

        {links &&
          links.map((data, index) => {
            return (
              <div className={styles.infoItem} key={index}>
                <dt>{data.label}</dt>
              </div>
            );
          })}

        {sections && (
          <div className={styles.sectionsList}>
            {sections.map((section, index) => {
              return (
                <div className={styles.sectionsItem} key={index}>
                  <dt>{section.label}</dt>
                  <div className={styles.buttons}>
                    {section.buttons.map((button, id) => (
                      <button className={styles.actionButton} key={id}>
                        {button}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
