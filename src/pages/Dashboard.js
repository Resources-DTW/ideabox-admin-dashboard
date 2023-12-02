import React, { useEffect, useState } from "react";
import { Pie } from "@ant-design/plots";
import {
  Button,
  Image,
  Layout,
  Menu,
  Card,
  Statistic,
  Space,
  Typography,
} from "antd";
import { PiCoinsThin } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { BsBox2 } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineHomeRepairService } from "react-icons/md";

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [customerCount, setCustomerCount] = useState([]);
  const [providersCount, SetProvidersCount] = useState([]);

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
    <>
      <Space
        direction="vertical"
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Space
          direction="horizontal"
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <DashboardCard title={"Total Materials"} count={120} />
          <DashboardCard title={"Total Patients"} count={2120} />
          <DashboardCard title={"Total Clinicians"} count={1120} />
        </Space>
        <Space
          direction="horizontal"
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <DashboardCard title={"Subscribed User"} count={120} />
          <DashboardCard title={"Guest Users"} count={120} />
          <DashboardCard title={"Clinicians"} count={120} />
        </Space>
      </Space>
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
    </>
  );

  function DashboardCard({ title, count, icon }) {
    return (
      <Card>
        <Space direction="horizontal">
          {icon}
          <Statistic title={title} value={count} />
        </Space>
      </Card>
    );
  }
}
