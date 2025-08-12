import GaugeComponent from "react-gauge-component";

const Gauge = ({ value, text }) => {
  return (
    <div style={{ width: "250px", display: "flex", justifyContent: "center" }}>
      <div>
        <GaugeComponent
          value={value / 5} // since original was value/500 → percentage, we multiply by 100 internally
          type="semicircle"
          style={{ width: "330px" }}
          arc={{
            width: 0.3, // arc thickness
            cornerRadius: 12,
            nbSubArcs: 30,
            colorArray: ["#4FAFE0", "#0A3F5C"],
          }}
          pointer={{
            color: "#3B3B3B",
            length: 0.5,
            width: 15,
            elastic: true,
          }}
          labels={{
            valueLabel: {
              formatTextValue: () => text, // center label
              style: {
                fill: "var(--color-text)",
                fontSize: "20px",
                textShadow: 0,
                transform: "translateY(-15px)",
              },
            },
            tickLabels: {
              type: "outer",
              hideMinMax: true,
              ticks: [], // hides tick marks
            },
          }}
        />
      </div>
    </div>
  );
};

export default Gauge;
