import { useState, useMemo } from "react";

import styles from "./BillingTable.module.css";
import { billingData } from "./billingData";

// Date Pick and Filter
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Chip, Stack } from "@mui/material";

// Icon
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsSortAlphaDown, BsSortAlphaUp } from "react-icons/bs";
import { IoEye } from "react-icons/io5";

// Color code
const getUsageLevel = (value) =>
  value === 0 ? styles.green : value < 100 ? styles.orange : styles.red;

const getAmountLevel = (value) =>
  value === 0 ? styles.green : value < 3 ? styles.orange : styles.red;

// Main Component
export default function BillingTable() {
  // Date pick logic
  const today = dayjs();
  const firstDayOfYear = dayjs(new Date(today.year(), 0, 1));

  const [startDate, setStartDate] = useState(firstDayOfYear);
  const [endDate, setEndDate] = useState(today);

  const handlePreset = (preset) => {
    let start = today;
    let end = today;

    if (preset === "lastWeek") {
      start = today.subtract(7, "day");
    } else if (preset === "lastMonth") {
      start = today.subtract(1, "month");
    } else if (preset === "lastQuarter") {
      start = today.subtract(3, "month");
    }

    setStartDate(start);
    setEndDate(end);
  };

  // Accordion logic
  const [open, setOpen] = useState(() => {
    const initialState = {};
    billingData.forEach((group) => {
      initialState[group.id] = true; // open every group initially
    });
    return initialState;
  });
  const toggle = (id) => setOpen((prev) => ({ ...prev, [id]: !prev[id] }));

  // Sorting Data logic
  const [sortDir, setSortDir] = useState("asc"); // "asc", "desc"
  const toggleSort = () => {
    setSortDir((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  // Sort logic
  const sortedData = useMemo(() => {
    if (!sortDir) return billingData;
    return [...billingData].sort((a, b) =>
      sortDir === "asc"
        ? a.totalAmount - b.totalAmount
        : b.totalAmount - a.totalAmount
    );
  }, [sortDir]);

  return (
    <div className={styles.billingData}>
      <h2>Analysis</h2>

      <div className={styles.tabsInfo}>
        {/* Tabs */}
        <div className={styles.tabs}>
          <span className={`${styles.tab} ${styles.active}`}>Analysis</span>
          <span className={styles.tab}>Invoices</span>
        </div>

        {/* Tabs Data */}
        <div className={styles.tabsData}>
          <h2 className={styles.fleetName}>Acme Fleet</h2>
          {/* Date Picker */}
          <div className={styles.headerInfo}>
            <div className={styles.datePicker}>
              {/* Date Pick Field */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <p>Filter by Date</p>
                <div className={styles.dateContainer}>
                  <DatePicker
                    label="Start"
                    format="MMM D, YYYY" // <-- ensures display format
                    slotProps={{
                      textField: { size: "small" },
                      actionBar: { actions: ["today"] },
                    }}
                    value={startDate}
                    onChange={(newStartDate) => setStartDate(newStartDate)}
                  />
                  <DatePicker
                    label="End"
                    format="MMM D, YYYY" // <-- ensures display format
                    slotProps={{
                      textField: { size: "small" },
                      actionBar: { actions: ["today"] },
                    }}
                    value={endDate}
                    onChange={(newEndDate) => setEndDate(newEndDate)}
                  />
                </div>
              </LocalizationProvider>

              {/* Date Pick Presets */}
              <Stack direction="row" spacing={1}>
                <Chip
                  label="Last Week"
                  onClick={() => handlePreset("lastWeek")}
                />
                <Chip
                  label="Last Month"
                  onClick={() => handlePreset("lastMonth")}
                />
                <Chip
                  label="Last Quarter"
                  onClick={() => handlePreset("lastQuarter")}
                />
              </Stack>
            </div>

            {/* Total Amt Synopsis */}
            <div className={styles.totalAmount}>
              <p>Estimated Charges (USD) excluding taxes</p>
              <h2 style={{ fontSize: "28px", fontWeight: "500" }}>$ 11.37</h2>
            </div>
          </div>

          {/* Billing Table */}
          <div className={styles.tableData}>
            <table className={styles.table}>
              {/* Table Header */}
              <thead className={styles.tableHeader}>
                <tr>
                  <th>Services</th>
                  <th>Unit Charges in $</th>
                  <th>Usage</th>
                  <th className={styles.filterCol} onClick={toggleSort}>
                    Amount ($)
                    {sortDir === "asc" && (
                      <BsSortAlphaDown className={styles.filterIcon} />
                    )}
                    {sortDir === "desc" && (
                      <BsSortAlphaUp className={styles.filterIcon} />
                    )}
                  </th>
                </tr>
              </thead>

              {/* Table Data */}
              {sortedData.map((group) => (
                <tbody key={group.id}>
                  <tr
                    className={styles.toggleRow}
                    onClick={() => toggle(group.id)}
                    aria-expanded={!!open[group.id]}
                  >
                    <td className={styles.serviceGroup}>
                      <MdKeyboardArrowDown
                        className={`${styles.icon} ${open[group.id] ? styles.open : styles.closed}`}
                      />
                      {group.service} <IoEye className={styles.eyeIcon} />
                    </td>
                    <td></td>
                    <td></td>
                    <td
                      className={`${styles.amountCol} ${getAmountLevel(group.totalAmount)}`}
                    >
                      {group.totalAmount}
                    </td>
                  </tr>

                  {group.children.map((child) => (
                    <tr
                      key={child.id}
                      className={
                        open[group.id] ? styles.openGroup : styles.closedGroup
                      }
                    >
                      <td>{child.name}</td>
                      <td>{child.unitCharge}</td>
                      <td className={getUsageLevel(child.usage)}>
                        {child.usage}
                      </td>
                      <td
                        className={`${styles.amountCol} ${getAmountLevel(child.amount)}`}
                      >
                        {child.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
