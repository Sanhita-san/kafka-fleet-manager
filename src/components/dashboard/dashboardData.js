import { FaCloud } from "react-icons/fa";
import { MdBarChart } from "react-icons/md";
import { MdEqualizer } from "react-icons/md";
import { MdBusiness } from "react-icons/md";
import { BsGrid1X2Fill } from "react-icons/bs";

export const cards = [
  {
    title: "Cluster Info",
    icon: FaCloud,
    fields: [
      {
        label: "Cluster ID",
        value: "9a02fc10-2100-45f9-a0ff-2ff9bbbe8d61",
      },
      { label: "SKU", value: "STRIMZI/Shared" },
      { label: "Organization", value: "acme" },
      { label: "Date Created", value: "Jun 17, 2025, 11:53 AM" },
      { label: "Date Modified", value: "Jun 17, 2025, 12:05 PM" },
      { label: "Infrastructure", value: "different-aardwolf" },
      { label: "Version", value: "3.8.0" },
      { label: "Status", value: "Healthy" },
    ],
    actionsMenu: true,
  },
  {
    title: "Performance",
    icon: MdBarChart,
    gauges: [
      { label: "Production", value: 0, text: "0 B/s" },
      { label: "Consumption", value: 0, text: "0 B/s" },
      { label: "Partitions", value: 50, text: "50" },
    ],
  },
  {
    title: "Kubernetes Fleet Info",
    icon: MdBusiness,
    fields: [
      { label: "Identifier", value: "different-aardwolf" },
      { label: "Fleet provider", value: "" },
      { label: "Tenancy", value: "Shared" },
      { label: "Date Created", value: "Jun 17, 2025, 10:33 AM" },
      { label: "Status", value: "Healthy" },
    ],
    actionsMenu: true,
  },
  {
    title: "Dashboards",
    icon: MdEqualizer,
    links: [
      { label: "Cluster Health", type: "link" },
      { label: "Kraft Metrics", type: "link" },
      { label: "Strimzi Kafka Logs", type: "link" },
    ],
  },
  {
    title: "Actions",
    icon: BsGrid1X2Fill,
    sections: [
      {
        label: "",
        buttons: ["Upgrade", "Fleet Health Agent", "Benchstress"],
      },
      {
        label: "Audit Logs",
        buttons: ["Execution Logs", "Health Reports", "Benchmark Reports"],
      },
      {
        label: "Downloads",
        buttons: ["Manifest"],
      },
    ],
  },
];
