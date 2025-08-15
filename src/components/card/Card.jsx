import { useState } from "react";

import styles from "./Card.module.css";

import { MdMoreVert, MdSearch } from "react-icons/md";
import Gauge from "./Gauge";
import BarChart from "./BarChart";

const Card = ({
  title,
  icon,
  fields,
  gauges,
  links,
  sections,
  actionsMenu,
  table,
  chart,
  span,
}) => {
  const Icon = icon;

  const [searchTerm, setSearchTerm] = useState("");
  // Assuming address is at column index 2
  const ADDRESS_INDEX = 1;
  // Filtered rows based on address
  const filteredRows =
    table?.rows.filter((row) =>
      row[ADDRESS_INDEX]?.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

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
                  <dd>
                    {data.type == "text" && data.value}
                    {data.type == "link" && <a>{data.value}</a>}
                    {data.type == "img" && (
                      <img src={data.value} className={styles.fieldImg} />
                    )}
                  </dd>
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
                  {section.label && <dt>{section.label}</dt>}
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

        {/* Chart */}
        {chart && (
          <div className="chart">
            <BarChart
              current={chart.data[0]}
              expected={chart.data[0]}
              label={chart.label}
            />
          </div>
        )}

        {/* Table */}
        {table && (
          <div className={styles.tableList}>
            {/* Search bar */}
            <div className={styles.searchBar}>
              <div className={styles.searchWrapper}>
                <MdSearch className={styles.searchIcon} />
                <input
                  type="text"
                  id="endpoints-input"
                  placeholder="Search by address..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={styles.searchInput}
                />
              </div>
            </div>
            {/* Main Table */}
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
                  {filteredRows.map((row, index) => (
                    <tr key={index}>
                      {row.map((cell, cIdx) => (
                        <td key={cIdx}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Table Footer */}
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
