import GaugeChart from "react-gauge-chart";

const Gauge = ({ value, text }) => {
  return (
    <div style={{ width: "250px" }}>
      <GaugeChart
        id="gauge-chart"
        nrOfLevels={30} // number of arc segments
        colors={["#4FAFE0", "#0A3F5C"]} // gradient colors
        arcWidth={0.3} // thickness of arc
        percent={value / 500} // converts value to percentage
        needleColor="#3B3B3B"
        textColor="#000"
        formatTextValue={() => text} // center label text
        hideText={false}
      />
    </div>
  );
};

export default Gauge;
