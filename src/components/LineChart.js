import React from "react";
import { Line } from "@ant-design/charts";

export default function LineChart() {
  const data = [
    { day: "Mon", users: 3 },
    { day: "Tue", users: 4 },
    { day: "Wed", users: 10 },
    { day: "Thur", users: 5 },
    { day: "Fri", users: 2 },
    { day: "Sat", users: 6 },
    { day: "Sun", users: 7 },
  ];

  const config = {
    data,
    width: 500,
    height: 300,
    autoFit: false,
    xField: "day",
    yField: "users",
    point: {
      size: 5,
      shape: "circle",
    },
    label: {
      style: {
        fill: "#aaa",
      },
    },
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        borderRadius: 10,
      }}
    >
      <Line {...config} />
    </div>
  );
}
