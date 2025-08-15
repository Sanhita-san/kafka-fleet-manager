import { BarChart } from "@mui/x-charts"; // or '@mui/x-charts/BarChart'
import "./BarChart.css";

export default function BillingBarChart({ current, expected, label }) {
  const categories = ["Current", "Expected"];
  const data = [current, expected];

  return (
    <div className="barChartContainer">
      <BarChart
        sx={{
          letterSpacing: "0",
          "& .MuiChartsLegend-label": {
            fontFamily: "var(--font-primary)",
            letterSpacing: 0,
            fontSize: "14px",
          },
          "& .MuiBarLabel-root": {
            fill: "var(--color-text)",
            fontSize: "20px",
            transform: "translateX(-20px)",
          },
          "& .MuiChartsAxis-directionY": {
            transform: "translate(65px,0)",
          },
          "& .MuiChartsAxis-directionX": {
            transform: "translate(-20px,255px)",
          },
          "& .MuiBarElement-root": {
            transform: "translateX(-20px)",
          },
          "& .MuiChartsAxis-label": {
            transform: "translateX(10px)",
          },
          "& .MuiChartsAxisHighlight-root": {
            transform: "translateX(-20px)",
          },
        }}
        xAxis={[{ data: categories }]}
        yAxis={[{ label: "Amount(undefined)" }]}
        series={[{ data, label: label, color: "#2bd7b3" }]}
        height={300}
        barLabel="value"
      />
    </div>
  );
}
