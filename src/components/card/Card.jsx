import styles from "./Card.module.css";

import { MdMoreVert } from "react-icons/md";
import Gauge from "./Gauge";

const Card = ({
  title,
  icon,
  fields,
  gauges,
  links,
  sections,
  actionsMenu,
}) => {
  const Icon = icon;
  return (
    <div
      className={`${styles.card} ${gauges ? styles.spanTwo : styles.spanOne}`}
    >
      <div className={styles.cardHeader}>
        <Icon className={styles.icon} />
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

        {links && (
          <div className={styles.linksList}>
            {links.map((link, index) => {
              return (
                <div className={styles.linksItem} key={index}>
                  <a>{link.label}</a>
                </div>
              );
            })}
          </div>
        )}

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
