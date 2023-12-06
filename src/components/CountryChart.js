import React from "react";
import { Line } from "@ant-design/charts";

export default function CountryChart() {
  const data = [
    { country: "India", users: 3 },
    { country: "Saudi Arabia", users: 4 },
    { country: "Dubai", users: 10 },
    { country: "Qatar", users: 5 },
    { country: "Oman", users: 2 },
    { country: "Yeman", users: 6 },
    { country: "Bahrain", users: 7 },
  ];

  const config = {
    data,
    width: 800,
    height: 300,
    autoFit: false,
    xField: "country",
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
        backgroundColor: "#D7D7D7",
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
