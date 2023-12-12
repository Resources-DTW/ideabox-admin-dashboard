import { Link, useNavigate } from "react-router-dom";
import { Content, Header } from "antd/es/layout/layout";
import { Button, Image, Layout, Menu } from "antd";
import Logo from "../assets/logo.png";
import Sider from "antd/es/layout/Sider";
import { BiHomeAlt2 } from "react-icons/bi";
import { FaUsers, FaUserSecret } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { BsCarFront, BsFillBuildingFill } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaTruckFast } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { LeftOutlined } from "@ant-design/icons";
import Search from "antd/es/input/Search";
import React, { useState } from "react";

export default function Subscriptions() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  const handleEditClick = (item) => {
    navigate("/editSubscription", item);
  };

  const data = [
    {
      title: "Guest User",
      duration: "10 days",
      disorder_count: "1 Disorder",
      material_count: "1 Material",
      payment: "Free",
      special_discount: "1 Disorder",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an",
    },
    {
      title: "Free Trail",
      duration: "10 days",
      disorder_count: "1 Disorder",
      material_count: "1 Material",
      payment: "Free",
      special_discount: "1 Disorder",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an",
    },
    {
      title: "Monthly",
      duration: "$30/per month",
      disorder_count: "1 Disorder",
      material_count: "1 Material",
      payment: "Free",
      special_discount: "1 Disorder",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an",
    },
    {
      title: "Yearly",
      duration: "$220/per month",
      disorder_count: "1 Disorder",
      material_count: "1 Material",
      payment: "Free",
      special_discount: "1 Disorder",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an",
    },
  ];

  return (
    <Layout style={{ height: "100%", width: "100%" }}>
      <Sider
        style={{
          backgroundColor: "#35A8DF",
          height: "auto",
          // borderRadius: 16,
          marginTop: -10,
          marginLeft: -10,
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        {!collapsed ? (
          <Image
            width={180}
            src={Logo}
            alt="Logo"
            preview={false}
            style={{
              margin: 10,
              padding: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        ) : (
          <Image
            width={70}
            src={Logo}
            alt="Logo"
            preview={false}
            style={{
              margin: 10,
              padding: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        )}
        <Menu
          style={{ backgroundColor: "#35A8DF", color: "white" }}
          mode="inline"
          defaultSelectedKeys={["/subscriptions"]}
          onClick={(item) => {
            navigate(item.key);
          }}
          items={[
            {
              key: "/dashboard",
              icon: <BiHomeAlt2 />,
              label: "Dashboard",
            },
            {
              key: "/materials",
              icon: <FaUserSecret />,
              label: "Materials / Clinical resources management",
            },
            {
              key: "/subscriptions",
              icon: <MdOutlineAdminPanelSettings />,
              label: "Subscription",
            },
            {
              key: "/users",
              icon: <BsFillBuildingFill />,
              label: "App user management",
            },
            {
              key: "/activity",
              icon: <BsCarFront />,
              label: "Activity / Tasks manager",
            },
            {
              key: "/reports",
              icon: <FaUsers />,
              label: "Reports",
            },
            {
              key: "/kpiconfig",
              icon: <RiCustomerService2Line />,
              label: "KPI configuration",
            },
            {
              key: "/settings",
              icon: <FaTruckFast />,
              label: "Profile Settings",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            backgroundColor: "#fff",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <GiHamburgerMenu /> : <LeftOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Search
            placeholder="Search courses"
            onSearch={onSearch}
            style={{
              width: 300,
            }}
          />
        </Header>
        <Content style={{ backgroundColor: "#F8F9FC" }}>
          <div style={{ padding: 20 }}>
            <h1>Patient</h1>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                paddingTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
                gap: 20,
              }}
            >
              {data.map((item, i) => (
                <div
                  onClick={() =>
                    navigate(`/editSubscription`, { state: { item } })
                  }
                  key={i}
                  style={{
                    textAlign: "center",
                    backgroundColor: "#fff",
                    borderRadius: 10,
                    padding: 40,
                    cursor: "pointer",
                  }}
                >
                  <p
                    style={{
                      fontSize: 19,
                      fontWeight: 500,
                      textAlign: "center",
                      color: "#000",
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      color: "white",
                      backgroundColor: "#35A8DF",
                      borderRadius: 20,
                      padding: 8,
                    }}
                  >
                    {item.duration}
                  </p>
                  <p style={{ color: "#000" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 20,
              paddingBottom: 60,
            }}
          >
            <h1>Clinician</h1>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                paddingTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
                gap: 20,
              }}
            >
              {data.map((item, i) => (
                <div
                  onClick={() =>
                    navigate(`/editSubscription`, { state: { item } })
                  }
                  style={{
                    textAlign: "center",
                    borderRadius: 10,
                    padding: 40,
                    backgroundColor: "#fff",
                    cursor: "pointer",
                  }}
                  key={i}
                >
                  <p
                    style={{
                      fontSize: 19,
                      fontWeight: 500,
                      textAlign: "center",
                      color: "#000",
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      color: "white",
                      backgroundColor: "#35A8DF",
                      borderRadius: 20,
                      padding: 8,
                    }}
                  >
                    {item.duration}
                  </p>
                  <p style={{ color: "#000" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
