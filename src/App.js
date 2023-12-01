import { useNavigate } from "react-router-dom";
import { Content, Header } from "antd/es/layout/layout";
import { Button, Image, Layout, Menu } from "antd";
import Logo from "./assets/logo.png";
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
import { Pie } from "@ant-design/plots";
// import { Line } from "@ant-design/charts";
import React, { useState } from "react";

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  // const lineData = [
  //   { year: "1991", value: 3 },
  //   { year: "1992", value: 4 },
  //   { year: "1993", value: 3.5 },
  //   { year: "1994", value: 5 },
  //   { year: "1995", value: 4.9 },
  //   { year: "1996", value: 6 },
  //   { year: "1997", value: 7 },
  //   { year: "1998", value: 9 },
  //   { year: "1999", value: 13 },
  // ];
  // const lineConfig = {
  //   lineData,
  //   height: 400,
  //   xField: "year",
  //   yField: "value",
  //   point: {
  //     size: 5,
  //     shape: "diamond | circule",
  //   },
  // };

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

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <Layout style={{ height: "100vh", width: "100%" }}>
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
          defaultSelectedKeys={["/dashboard"]}
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
              key: "/materials_clinical",
              icon: <FaUserSecret />,
              label: "Materials / Clinical resources management",
            },
            {
              key: "/subscription",
              icon: <MdOutlineAdminPanelSettings />,
              label: "Subscription",
            },
            {
              key: "/users",
              icon: <BsFillBuildingFill />,
              label: "App user management",
            },
            {
              key: "/activity_task_manager",
              icon: <BsCarFront />,
              label: "Activity / Tasks manager",
            },
            {
              key: "/reports",
              icon: <FaUsers />,
              label: "Reports",
            },
            {
              key: "/kpi_config",
              icon: <RiCustomerService2Line />,
              label: "KPI configuration",
            },
            {
              key: "/profile_settings",
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
        <Content>
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
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
