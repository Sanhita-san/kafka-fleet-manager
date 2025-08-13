import { useState } from "react";

import styles from "./BillingTable.module.css";
import { billingData } from "./billingData";

// Date Pick and Filter
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { MdKeyboardArrowDown } from "react-icons/md";

// Color code
const getUsageLevel = (value) =>
  value === 0 ? styles.green : value < 100 ? styles.orange : styles.red;

const getAmountLevel = (value) =>
  value === 0 ? styles.green : value < 3 ? styles.orange : styles.red;

export default function BillingTable() {
  const [startDate, setStartDate] = useState(dayjs("2022-04-17"));
  const [endDate, setEndDate] = useState(dayjs("2022-04-17"));

  return (
    <div className={styles.billingData}>
      <h2>Analysis</h2>

      {/* Date Picker */}
      <div className={styles.headerInfo}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <p>Filter by Date</p>
          <div className={styles.dateContainer}>
            <DatePicker
              label="Start"
              slotProps={{
                textField: { size: "small" },
                actionBar: { actions: ["today"] },
              }}
              value={startDate}
              onChange={(newStartDate) => setStartDate(newStartDate)}
            />
            <DatePicker
              label="End"
              slotProps={{
                textField: { size: "small" },
                actionBar: { actions: ["today"] },
              }}
              value={endDate}
              onChange={(newEndDate) => setEndDate(newEndDate)}
            />
          </div>
        </LocalizationProvider>
      </div>

      {/* Billing Table */}
      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr>
            <th>Services</th>
            <th>Unit Charges in $</th>
            <th>Usage</th>
            <th>Amount</th>
          </tr>
        </thead>
        {billingData.map((bill) => (
          <tbody key={bill.id}>
            <MdKeyboardArrowDown className={styles.icon} />
            <tr className={styles.toggleRow}>
              <td>{bill.service}</td>
              <td></td>
              <td></td>
              <td
                className={`${styles.amtCol} ${getAmountLevel(bill.totalAmount)}`}
              >
                {bill.totalAmount}
              </td>
            </tr>

            {bill.children.map((child) => (
              <tr key={child.id}>
                <td>{child.name}</td>
                <td>{child.unitCharge}</td>
                <td className={getUsageLevel(child.usage)}>{child.usage}</td>
                <td
                  className={`${styles.amtCol} ${getAmountLevel(child.amount)}`}
                >
                  {child.amount}
                </td>
              </tr>
            ))}
          </tbody>
        ))}
      </table>
    </div>
  );
}
