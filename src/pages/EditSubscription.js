import { useNavigate, useLocation } from "react-router-dom";
import { Content, Header } from "antd/es/layout/layout";
import { Button, Image, Layout, Menu, Form, Input } from "antd";
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

export default function EditSubscription() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const item = location.state ? location.state.item : null;

  //   console.log(item);

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  const [formData, setFormData] = useState({
    title: item.title,
    disorder_count: item.disorder_count,
    material_count: item.material_count,
    payment: item.payment,
    desc: item.desc,
    special_discount: item.special_discount,
    duration: item.duration,
  });

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSave = () => {
    // Handle the save logic with the updated formData
    console.log("Saved Data:", formData);
    navigate("/subscriptions");
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
        <Content style={{ backgroundColor: "#F8F9FC", padding: 20 }}>
          <h1>Edit {item.title}</h1>
          <Form
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
            style={{
              padding: 20,
              maxWidth: 900,
            }}
          >
            <Form.Item label="Title">
              <Input
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Disorder count">
              <Input
                value={formData.disorder_count}
                onChange={(e) =>
                  handleInputChange("disorder_count", e.target.value)
                }
              />
            </Form.Item>
            <Form.Item label="Material Count">
              <Input
                value={formData.material_count}
                onChange={(e) =>
                  handleInputChange("material_count", e.target.value)
                }
              />
            </Form.Item>
            <Form.Item label="Payment">
              <Input
                value={formData.payment}
                onChange={(e) => handleInputChange("payment", e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Description">
              <Input
                value={formData.desc}
                onChange={(e) => handleInputChange("desc", e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Special Discount">
              <Input
                value={formData.special_discount}
                onChange={(e) =>
                  handleInputChange("special_discount", e.target.value)
                }
              />
            </Form.Item>
            <Form.Item label="Amount of time">
              <Input
                value={formData.duration}
                onChange={(e) => handleInputChange("duration", e.target.value)}
              />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 4,
              }}
            >
              <Button type="primary" onClick={handleSave}>
                Save
              </Button>
            </Form.Item>
          </Form>
        </Content>
      </Layout>
    </Layout>
  );
}
