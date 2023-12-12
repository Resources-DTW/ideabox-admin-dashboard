import React, { useState } from "react";
import { Statistic, Col, Card, Row, Avatar, List } from "antd";
import { UserSwitchOutlined } from "@ant-design/icons";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";
import CountryChart from "../components/CountryChart";

const disorderData = [
  {
    title: "Disorder 1",
  },
  {
    title: "Disorder 2",
  },
  {
    title: "Disorder 3",
  },
  {
    title: "Disorder 4",
  },
];

const materialData = [
  {
    title: "Material 1",
  },
  {
    title: "Material 2",
  },
  {
    title: "Material 3",
  },
  {
    title: "Material 4",
  },
];

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
        <Row gutter={8}>
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
                      backgroundColor: "#35A8DF",
                      borderRadius: 4,
                    }}
                  >
                    <UserSwitchOutlined style={{ color: "white", width: 14 }} />
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
                      backgroundColor: "#35A8DF",
                      borderRadius: 4,
                    }}
                  >
                    <UserSwitchOutlined style={{ color: "white", width: 14 }} />
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
                      backgroundColor: "#35A8DF",
                      borderRadius: 4,
                    }}
                  >
                    <UserSwitchOutlined style={{ color: "white", width: 14 }} />
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
                      backgroundColor: "#35A8DF",
                      borderRadius: 4,
                    }}
                  >
                    <UserSwitchOutlined style={{ color: "white", width: 14 }} />
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
                      backgroundColor: "#35A8DF",
                      borderRadius: 4,
                    }}
                  >
                    <UserSwitchOutlined style={{ color: "white", width: 14 }} />
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
                      backgroundColor: "#35A8DF",
                      borderRadius: 4,
                    }}
                  >
                    <UserSwitchOutlined style={{ color: "white", width: 14 }} />
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
        <div
          style={{
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "left",
            padding: 20,
            borderRadius: 10,
          }}
        >
          <h1 style={{ fontSize: 24, fontWeight: 400 }}>Daily Users</h1>
          <LineChart />
        </div>
        <div style={{ backgroundColor: "#FFF", borderRadius: 20 }}>
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
            width: "45%",
            backgroundColor: "#fff",
            borderRadius: 10,
            textAlign: "left",
            padding: 20,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1 style={{ fontSize: 24, fontWeight: 400 }}>Most Used Disorders</h1>
          <List
            itemLayout="horizontal"
            dataSource={disorderData}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                    />
                  }
                  title={<a href="/materials">{item.title}</a>}
                />
              </List.Item>
            )}
          />
        </div>
        <div
          style={{
            height: "40%",
            width: "45%",
            backgroundColor: "#fff",
            borderRadius: 10,
            textAlign: "left",
            padding: 20,
          }}
        >
          <h1 style={{ fontSize: 24, fontWeight: 400 }}>Most Used Materials</h1>
          <List
            itemLayout="horizontal"
            dataSource={materialData}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                    />
                  }
                  title={<a href="/materials">{item.title}</a>}
                />
              </List.Item>
            )}
          />
        </div>
      </div>
      <div style={{ marginLeft: 30, marginRight: 30, paddingBottom: 50 }}>
        <CountryChart />
      </div>
    </>
  );
}
