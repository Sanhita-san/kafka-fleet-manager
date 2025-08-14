import { FaCloud } from "react-icons/fa";
import {
  MdBarChart,
  MdHealthAndSafety,
  MdTerminal,
  MdVerticalAlignBottom,
  MdLegendToggle,
  MdOutlineUpgrade,
} from "react-icons/md";

import { MdEqualizer } from "react-icons/md";
import { MdBusiness } from "react-icons/md";
import { BsGrid1X2Fill } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import { MdLink } from "react-icons/md";

import { MdTimeline } from "react-icons/md";

import imgUrl from "../../assets/images/Oracle-Cloud.webp";

export const cards = [
  {
    title: "Cluster Info",
    icon: FaCloud,
    actionsMenu: true,
    fields: [
      {
        label: "Cluster ID",
        value: "9a02fc10-2100-45f9-a0ff-2ff9bbbe8d61",
      },
      { label: "SKU", value: "STRIMZI/Shared", type: "text" },
      { label: "Organization", value: "acme", type: "text" },
      { label: "Date Created", value: "Jun 17, 2025, 11:53 AM", type: "text" },
      { label: "Date Modified", value: "Jun 17, 2025, 12:05 PM", type: "text" },
      { label: "Infrastructure", value: "different-aardwolf", type: "text" },
      { label: "Version", value: "3.8.0", type: "text" },
      { label: "Status", value: "Healthy", type: "text" },
    ],
  },
  {
    title: "Performance",
    icon: MdBarChart,
    span: true,
    gauges: [
      { label: "Production", value: 0, text: "0 B/s" },
      { label: "Consumption", value: 0, text: "0 B/s" },
      { label: "Partitions", value: 50, text: "50" },
    ],
  },
  {
    title: "Kubernetes Fleet Info",
    icon: MdBusiness,
    actionsMenu: true,
    fields: [
      { label: "Identifier", value: "different-aardwolf", type: "link" },
      {
        label: "Fleet provider",
        value: imgUrl,
        type: "img",
      },
      { label: "Tenancy", value: "Shared", type: "text" },
      { label: "Date Created", value: "Jun 17, 2025, 10:33 AM", type: "text" },
      { label: "Status", value: "Healthy", type: "text" },
    ],
  },
  {
    title: "Dashboards",
    icon: MdEqualizer,
    links: [
      { label: "Cluster Health", icon: MdTimeline },
      { label: "Kraft Metrics", icon: MdTimeline },
      { label: "Strimzi Kafka Logs", icon: MdTimeline },
    ],
  },
  {
    title: "Actions",
    icon: BsGrid1X2Fill,
    sections: [
      {
        label: "",
        buttons: [
          { label: "Upgrade", icon: MdOutlineUpgrade },
          { label: "Fleet Health Agent", icon: MdHealthAndSafety },
          { label: "Benchstress", icon: MdLegendToggle },
        ],
      },
      {
        label: "Audit Logs",
        buttons: [
          { label: "Execution Logs", icon: MdTerminal },
          { label: "Health Reports", icon: MdHealthAndSafety },
          { label: "Benchmark Reports", icon: MdLegendToggle },
        ],
      },
      {
        label: "Downloads",
        buttons: [{ label: "Manifest", icon: MdVerticalAlignBottom }],
      },
    ],
  },
  {
    title: "Billing",
    icon: MdAttachMoney,
    chart: {
      label: "June 2025 Billing (undefined)",
      data: [0, 0],
    },
  },
  {
    title: "Endpoints",
    icon: MdLink,
    span: true,
    table: {
      columns: ["Type", "Address", "DNS Record"],
      rows: [
        [
          "prometheus",
          "prometheus-competitive-opossum.sathish.fleet-manager.platformotry.io",
          "a44a4668a8f94b61935486fc8b05d7-1888045592.us-east-1.elb.amazonaws.com",
        ],
        [
          "loki",
          "loki-competitive-opossum.sathish.fleet-manager.platformotry.io",
          "a44a4668a8f94b61935486fc8b05d7-1888045592.us-east-1.elb.amazonaws.com",
        ],
        [
          "bootstrap_server",
          "brief-galliform-bootstrap.sathish.fleet-manager.platformotry.io:443",
          "a8fd66da6c6c945e4beec0c9fd1eff14f7-1147938221.us-east-1.elb.amazonaws.com",
        ],
        [
          "bootstrap_server_0",
          "brief-galliform-b0.sathish.fleet-manager.platformotry.io:443",
          "a8fd66da6c6c945e4beec0c9fd1eff14f7-1147938221.us-east-1.elb.amazonaws.com",
        ],
        [
          "bootstrap_server_1",
          "brief-galliform-b1.sathish.fleet-manager.platformotry.io:443",
          "a8fd66da6c6c945e4beec0c9fd1eff14f7-1147938221.us-east-1.elb.amazonaws.com",
        ],
        [
          "bootstrap_server_2",
          "brief-galliform-b2.sathish.fleet-manager.platformotry.io:443",
          "a8fd66da6c6c945e4beec0c9fd1eff14f7-1147938221.us-east-1.elb.amazonaws.com",
        ],
        [
          "internal_bootstrap_server",
          "kafka-fm-kafka-bootstrap.brief-galliform.svc.cluster.local:9092",
          "-",
        ],
      ],
    },
  },
];
