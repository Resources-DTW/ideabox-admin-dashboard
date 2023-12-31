import { useNavigate } from "react-router-dom";
import { Content, Header } from "antd/es/layout/layout";
import {
  Button,
  Image,
  Layout,
  Menu,
  Collapse,
  theme,
  Row,
  Col,
  Card,
  Statistic,
} from "antd";
import Logo from "../assets/logo.png";
import Sider from "antd/es/layout/Sider";
import { BiHomeAlt2 } from "react-icons/bi";
import { FaUsers, FaUserSecret } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { BsCarFront, BsFillBuildingFill } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaTruckFast } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  LeftOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import Search from "antd/es/input/Search";
import React, { useState } from "react";

export default function Materials() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  const items = (panelStyle) => [
    {
      key: "1",
      label: (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: 32,
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <h1 style={{ fontSize: 18, fontWeight: 400 }}>Disorder 1</h1>
          <p style={{ fontSize: 18 }}>Patient/ Clinical</p>
          <p style={{ fontSize: 18, fontWeight: 600 }}>Total Materials 10</p>
        </div>
      ),
      children: (
        <div style={{ paddingLeft: 20, paddingRight: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <h2 style={{ fontWeight: 400 }}>Material 1</h2>
            <Button type="primary">Edit</Button>
          </div>
          <p>Patient/ Clinical</p>
          <p style={{ fontSize: 14, fontWeight: 700 }}>About The Cource</p>
          <p>6 Days Training Program.</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      ),
      showArrow: false,
      style: panelStyle,
    },
    {
      key: "2",
      label: (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: 32,
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <h1 style={{ fontSize: 18, fontWeight: 400 }}>Disorder 2</h1>
          <p style={{ fontSize: 18 }}>Patient/ Clinical</p>
          <p style={{ fontSize: 18, fontWeight: 600 }}>Total Materials 10</p>
        </div>
      ),
      children: (
        <div style={{ paddingLeft: 20, paddingRight: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <h2 style={{ fontWeight: 400 }}>Material 2</h2>
            <Button type="primary">Edit</Button>
          </div>
          <p>Patient/ Clinical</p>
          <p style={{ fontSize: 14, fontWeight: 700 }}>About The Cource</p>
          <p>6 Days Training Program.</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      ),
      showArrow: false,
      style: panelStyle,
    },
    {
      key: "3",
      label: (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: 32,
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <h1 style={{ fontSize: 18, fontWeight: 400 }}>Disorder 3</h1>
          <p style={{ fontSize: 18 }}>Patient/ Clinical</p>
          <p style={{ fontSize: 18, fontWeight: 600 }}>Total Materials 10</p>
        </div>
      ),
      children: (
        <div style={{ paddingLeft: 20, paddingRight: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <h2 style={{ fontWeight: 400 }}>Material 3</h2>
            <Button type="primary">Edit</Button>
          </div>
          <p>Patient/ Clinical</p>
          <p style={{ fontSize: 14, fontWeight: 700 }}>About The Cource</p>
          <p>6 Days Training Program.</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      ),
      showArrow: false,
      style: panelStyle,
    },
  ];

  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: "#D7D7D7",
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

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
          defaultSelectedKeys={["/materials"]}
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
        <Content
          style={{ backgroundColor: "#fff", paddingLeft: 30, paddingRight: 30 }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: 20,
            }}
          >
            <h1 style={{ fontSize: 18, fontWeight: 600, color: "#15192c" }}>
              Materials / Clinical resources management
            </h1>
            <Button
              type="primary"
              style={{
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Add Disorder
            </Button>
          </div>
          <div style={{ padding: 20 }}>
            <Row gutter={24}>
              <Col span={12}>
                <Card bordered={true}>
                  <Statistic
                    title="Total Disorders"
                    value={2120}
                    precision={2}
                    style={{ fontWeight: 600 }}
                    valueStyle={{
                      color: "#3f8600",
                      fontSize: 16,
                    }}
                    prefix={<ArrowUpOutlined />}
                    suffix="+"
                  />
                </Card>
              </Col>
              <Col span={12}>
                <Card bordered={true}>
                  <Statistic
                    title="Total Materials"
                    value={120}
                    precision={2}
                    style={{ fontWeight: 600 }}
                    valueStyle={{
                      color: "#cf1322",
                      fontSize: 16,
                    }}
                    prefix={<ArrowDownOutlined />}
                    suffix="-"
                  />
                </Card>
              </Col>
            </Row>
          </div>
          <Collapse
            style={{
              background: token.colorBgContainer,
              border: "none",
              paddingBottom: 50,
            }}
            items={items(panelStyle)}
            defaultActiveKey={["1"]}
          />
        </Content>
      </Layout>
    </Layout>
  );
}
