import React from "react";
import { Pie } from "@ant-design/plots";
import {
  Button,
  Image,
  Layout,
  Menu,
  Card,
  Statistic,
  Divider,
  Space,
} from "antd";

export default function Dashboard() {
  const data = [
    {
      type: "Active",
      value: 30,
    },
    {
      type: "Online",
      value: 30,
    },
    {
      type: "None",
      value: 40,
    },
  ];

  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        content: "Donut Chart",
      },
    },
  };

  return (
    <div
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Pie {...config} />
      </div>
      <div>{/* <Line {...lineConfig} /> */}</div>
    </div>
  );
}
