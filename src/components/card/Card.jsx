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
  table,
  span,
}) => {
  const Icon = icon;
  return (
    <div className={`${styles.card} ${span ? styles.spanTwo : styles.spanOne}`}>
      <div className={styles.cardHeader}>
        <Icon className={styles.icon} />
        <h3>{title}</h3>
        {actionsMenu && (
          <MdMoreVert className={`${styles.icon} ${styles.moreIcon}`} />
        )}
      </div>

      <div className={styles.cardBody}>
        {/* Fields */}
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

        {/* Gauges */}
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

        {/* Links */}
        {links && (
          <div className={styles.linksList}>
            {links.map((Link, index) => {
              return (
                <div className={styles.linksItem} key={index}>
                  <Link.icon className={styles.icon} />
                  <a>{Link.label}</a>
                </div>
              );
            })}
          </div>
        )}

        {/* Sections */}
        {sections && (
          <div className={styles.sectionsList}>
            {sections.map((section, index) => {
              return (
                <div className={styles.sectionsItem} key={index}>
                  <dt>{section.label}</dt>
                  <div className={styles.buttons}>
                    {section.buttons.map((Button, id) => (
                      <button className={styles.actionButton} key={id}>
                        <Button.icon className={styles.icon} />
                        {Button.label}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Table */}
        {table && (
          <div className={styles.tableList}>
            <div className={styles.tableInfo}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    {table.columns.map((col, index) => (
                      <th key={index}>{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map((row, index) => (
                    <tr key={index}>
                      {row.map((cell, cIdx) => (
                        <td key={cIdx}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={styles.tableFooter}>
              <button className={styles.endpointButton}>Test</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
