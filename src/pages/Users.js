import { useNavigate } from "react-router-dom";
import { Content, Header } from "antd/es/layout/layout";
import {
  Button,
  Image,
  Layout,
  Menu,
  Popconfirm,
  Table,
  Card,
  Col,
  Row,
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
import { LeftOutlined } from "@ant-design/icons";
import Search from "antd/es/input/Search";
import React, { useState } from "react";
import ButtonGroup from "antd/es/button/button-group";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import UserAlt from "../assets/user_alt.png";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";

export default function Users() {
  const [collapsed, setCollapsed] = useState(false);
  const [selectionType, setSelectionType] = useState("checkbox");

  const navigate = useNavigate();

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  const columns = [
    {
      title: "Profile Picture",
      dataIndex: "image",
      render: (image) => <img alt={image} src={image} width={42} />,
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Actions",
      render: (_, record) => (
        <ButtonGroup>
          <Button
            onClick={() => {}}
            size="small"
            style={{
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
            }}
          >
            <FaRegEdit size={12} />
          </Button>
          <Popconfirm
            title="Are you sure want to delete?"
            onConfirm={() => {}}
            okText="Yes"
            cancelText="No"
          >
            <Button
              size="small"
              type="primary"
              danger
              style={{
                alignItems: "center",
                justifyContent: "center",
                gap: 5,
              }}
            >
              <MdOutlineDeleteOutline size={12} />
            </Button>
          </Popconfirm>
        </ButtonGroup>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      image: UserAlt,
      name: "Karthik",
      email: "karthik@gmail.com",
      date: "8/12/23",
    },
    {
      key: "2",
      image: UserAlt,
      name: "Thamizh",
      email: "thamizh@gmail.com",
      date: "7/12/23",
    },
    {
      key: "3",
      image: UserAlt,
      name: "Ashraf",
      email: "ashraf@gmail.com",
      date: "6/12/23",
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      // Column configuration not to be checked
      name: record.name,
    }),
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
          defaultSelectedKeys={["/users"]}
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
          {/* <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              flexDirection: "row",
              gap: 20,
              padding: 20,
            }}
          >
            <div
              style={{
                textAlign: "center",
                backgroundColor: "#35A8DF",
                borderRadius: 10,
                padding: 20,
              }}
            >
              <h1 style={{ fontWeight: 400, color: "#FFF" }}>Total Patients</h1>
              <h1 style={{ color: "#FFF" }}>2,120</h1>
            </div>
            <div
              style={{
                textAlign: "center",
                backgroundColor: "#35A8DF",
                borderRadius: 10,
                padding: 20,
              }}
            >
              <h1 style={{ fontWeight: 400, color: "#FFF" }}>
                Total Clinicians
              </h1>
              <h1 style={{ color: "#FFF" }}>1,120</h1>
            </div>
          </div> */}
          <div style={{ padding: 20 }}>
            <Row gutter={24}>
              <Col span={12}>
                <Card bordered={true}>
                  <Statistic
                    title="Total Active Users"
                    value={2120}
                    precision={2}
                    valueStyle={{
                      color: "#3f8600",
                    }}
                    prefix={<ArrowUpOutlined />}
                    suffix="+"
                  />
                </Card>
              </Col>
              <Col span={12}>
                <Card bordered={true}>
                  <Statistic
                    title="Total Deactive Users"
                    value={120}
                    precision={2}
                    valueStyle={{
                      color: "#cf1322",
                    }}
                    prefix={<ArrowDownOutlined />}
                    suffix="-"
                  />
                </Card>
              </Col>
            </Row>
          </div>
          <div style={{ padding: 20 }}>
            <Row gutter={24}>
              <Col span={6}>
                <Card bordered={true}>
                  <Statistic
                    title="Guest"
                    value={120}
                    prefix={<UserSwitchOutlined />}
                  />
                </Card>
              </Col>
              <Col span={6}>
                <Card bordered={true}>
                  <Statistic
                    title="Free"
                    value={500}
                    prefix={<UserSwitchOutlined />}
                  />
                </Card>
              </Col>
              <Col span={6}>
                <Card bordered={true}>
                  <Statistic
                    title="Monthly"
                    value={1000}
                    prefix={<UserSwitchOutlined />}
                  />
                </Card>
              </Col>
              <Col span={6}>
                <Card bordered={true}>
                  <Statistic
                    title="Yearly"
                    value={500}
                    prefix={<UserSwitchOutlined />}
                  />
                </Card>
              </Col>
            </Row>
          </div>
          <Table
            rowSelection={{
              type: selectionType,
              ...rowSelection,
            }}
            columns={columns}
            dataSource={data}
          />
        </Content>
      </Layout>
    </Layout>
  );
}
