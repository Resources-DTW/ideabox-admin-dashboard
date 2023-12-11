import React, { useState } from "react";
import { Statistic, Space, Col, Card, Row } from "antd";
import { UserSwitchOutlined } from "@ant-design/icons";
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
      {/* <div
        style={{
          padding: 20,
        }}
      >
        <Row gutter={18}>
          
        </Row>
      </div> */}
      <div style={{ padding: 20 }}>
        <Row gutter={18}>
          <Col span={4}>
            <Card bordered={true}>
              <Statistic
                title="Subscribed User"
                value={120}
                prefix={
                  <div
                    style={{
                      paddingLeft: 10,
                      paddingRight: 10,
                      paddingTop: 5,
                      paddingBottom: 5,
                      backgroundColor: "#35A8DF",
                      borderRadius: 4,
                    }}
                  >
                    <UserSwitchOutlined style={{ color: "white" }} />
                  </div>
                }
              />
            </Card>
          </Col>
          <Col span={4}>
            <Card bordered={true}>
              <Statistic
                title="Guest Users"
                value={120}
                prefix={
                  <div
                    style={{
                      paddingLeft: 10,
                      paddingRight: 10,
                      paddingTop: 5,
                      paddingBottom: 5,
                      backgroundColor: "#35A8DF",
                      borderRadius: 4,
                    }}
                  >
                    <UserSwitchOutlined style={{ color: "white" }} />
                  </div>
                }
              />
            </Card>
          </Col>
          <Col span={4}>
            <Card bordered={true}>
              <Statistic
                title="Clinicians"
                value={120}
                prefix={
                  <div
                    style={{
                      paddingLeft: 10,
                      paddingRight: 10,
                      paddingTop: 5,
                      paddingBottom: 5,
                      backgroundColor: "#35A8DF",
                      borderRadius: 4,
                    }}
                  >
                    <UserSwitchOutlined style={{ color: "white" }} />
                  </div>
                }
              />
            </Card>
          </Col>
          <Col span={4}>
            <Card bordered={true}>
              <Statistic
                title="Total Materials"
                value={120}
                prefix={
                  <div
                    style={{
                      paddingLeft: 10,
                      paddingRight: 10,
                      paddingTop: 5,
                      paddingBottom: 5,
                      backgroundColor: "#35A8DF",
                      borderRadius: 4,
                    }}
                  >
                    <UserSwitchOutlined style={{ color: "white" }} />
                  </div>
                }
              />
            </Card>
          </Col>
          <Col span={4}>
            <Card bordered={true}>
              <Statistic
                title="Total Patients"
                value={2120}
                prefix={
                  <div
                    style={{
                      paddingLeft: 10,
                      paddingRight: 10,
                      paddingTop: 5,
                      paddingBottom: 5,
                      backgroundColor: "#35A8DF",
                      borderRadius: 4,
                    }}
                  >
                    <UserSwitchOutlined style={{ color: "white" }} />
                  </div>
                }
              />
            </Card>
          </Col>
          <Col span={4}>
            <Card bordered={true}>
              <Statistic
                title="Total Clinicians"
                value={1120}
                prefix={
                  <div
                    style={{
                      paddingLeft: 10,
                      paddingRight: 10,
                      paddingTop: 5,
                      paddingBottom: 5,
                      backgroundColor: "#35A8DF",
                      borderRadius: 4,
                    }}
                  >
                    <UserSwitchOutlined style={{ color: "white" }} />
                  </div>
                }
              />
            </Card>
          </Col>
        </Row>
      </div>
      <div
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
          display: "flex",
          marginBottom: 20,
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
