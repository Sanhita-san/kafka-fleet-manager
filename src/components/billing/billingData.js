// src/billingData.js
export const billingData = [
  {
    id: 1,
    service: "cfk: alive-unicorn",
    totalAmount: 1.38,
    children: [
      {
        id: "1-1",
        name: "Partition (0.005 USD per partition)",
        unitCharge: 0.005,
        usage: 0,
        amount: 0,
      },
      {
        id: "1-2",
        name: "Storage (0.05 USD per GB)",
        unitCharge: 0.05,
        usage: 0,
        amount: 0,
      },
      {
        id: "1-3",
        name: "Ingress (0.015 USD per GB)",
        unitCharge: 0.015,
        usage: 0,
        amount: 0,
      },
      {
        id: "1-4",
        name: "Egress (0.035 USD per GB)",
        unitCharge: 0.035,
        usage: 0,
        amount: 0,
      },
      {
        id: "1-5",
        name: "ClusterHours (0.015 USD per hour)",
        unitCharge: 0.015,
        usage: 92,
        amount: 1.38,
      },
    ],
  },
  {
    id: 2,
    service: "cfk: foolish-tapir",
    totalAmount: 5.02,
    children: [
      {
        id: "2-1",
        name: "ClusterHours (0.015 USD per hour)",
        unitCharge: 0.015,
        usage: 335,
        amount: 5.02,
      },
    ],
  },
  {
    id: 3,
    service: "strimzi: delighted-jellyfish",
    totalAmount: 3.66,
    children: [
      {
        id: "3-1",
        name: "ClusterHours (0.015 USD per hour)",
        unitCharge: 0.015,
        usage: 244,
        amount: 3.66,
      },
    ],
  },
];
