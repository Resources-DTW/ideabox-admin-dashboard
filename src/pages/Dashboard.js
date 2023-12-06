import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  Layout,
  Menu,
  Statistic,
  Space,
  Typography,
} from "antd";
import { PiCoinsThin } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { BsBox2 } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineHomeRepairService } from "react-icons/md";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";
import { Link } from "react-router-dom";
import CountryChart from "../components/CountryChart";

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [customerCount, setCustomerCount] = useState([]);
  const [providersCount, SetProvidersCount] = useState([]);

  return (
    <>
      <Space
        direction="vertical"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          margin: 20,
          gap: 20,
        }}
      >
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            flexDirection: "row",
            display: "flex",
            margniLeft: 20,
            marginRight: 20,
            gap: 220,
          }}
        >
          <DashboardCard title={"Total Materials"} count={120} />
          <DashboardCard title={"Total Patients"} count={2120} />
          <DashboardCard title={"Total Clinicians"} count={1120} />
        </div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            flexDirection: "row",
            display: "flex",
            margniLeft: 20,
            marginRight: 20,
            gap: 220,
          }}
        >
          <DashboardCard title={"Subscribed User"} count={120} />
          <DashboardCard title={"Guest Users"} count={120} />
          <DashboardCard title={"Clinicians"} count={120} />
        </div>
      </Space>
      <div
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
          display: "flex",
          marginTop: 50,
          marginBottom: 50,
        }}
      >
        <div>
          <LineChart />
        </div>
        <div>
          <PieChart />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
          paddingBottom: 50,
        }}
      >
        <div
          style={{
            height: "40%",
            width: "40%",
            backgroundColor: "#D7D7D7",
            borderRadius: 10,
            textAlign: "center",
            padding: 20,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1 style={{ fontSize: 24 }}>Most Used Disorders</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              alignItems: "center",
            }}
          >
            <Link
              to="#"
              style={{
                color: "#000",
                textDecoration: "none",
                fontSize: 24,
                fontWeight: 400,
              }}
            >
              Disorders 1
            </Link>
            <Link
              to="#"
              style={{
                color: "#000",
                textDecoration: "none",
                fontSize: 24,
                fontWeight: 400,
              }}
            >
              Disorders 2
            </Link>
            <Link
              to="#"
              style={{
                color: "#000",
                textDecoration: "none",
                fontSize: 24,
                fontWeight: 400,
              }}
            >
              Disorders 3
            </Link>
            <Link
              to="#"
              style={{
                color: "#000",
                textDecoration: "none",
                fontSize: 24,
                fontWeight: 400,
              }}
            >
              Disorders 4
            </Link>
          </div>
        </div>
        <div
          style={{
            height: "40%",
            width: "40%",
            backgroundColor: "#D7D7D7",
            borderRadius: 10,
            textAlign: "center",
            padding: 20,
          }}
        >
          <h1 style={{ fontSize: 24 }}>Most Used Materials</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              alignItems: "center",
            }}
          >
            <Link
              to="#"
              style={{
                color: "#000",
                textDecoration: "none",
                fontSize: 24,
                fontWeight: 400,
              }}
            >
              Materials 1
            </Link>
            <Link
              to="#"
              style={{
                color: "#000",
                textDecoration: "none",
                fontSize: 24,
                fontWeight: 400,
              }}
            >
              Materials 2
            </Link>
            <Link
              to="#"
              style={{
                color: "#000",
                textDecoration: "none",
                fontSize: 24,
                fontWeight: 400,
              }}
            >
              Materials 3
            </Link>
            <Link
              to="#"
              style={{
                color: "#000",
                textDecoration: "none",
                fontSize: 24,
                fontWeight: 400,
              }}
            >
              Materials 4
            </Link>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: 90, marginRight: 90, paddingBottom: 50 }}>
        <CountryChart />
      </div>
    </>
  );

  function DashboardCard({ title, count, icon }) {
    return (
      <div
        style={{
          backgroundColor: "#D7D7D7",
          width: 232,
          height: 166,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          display: "flex",
        }}
      >
        <Space direction="horizontal">
          {icon}
          <Statistic title={title} value={count} />
        </Space>
      </div>
    );
  }
}
