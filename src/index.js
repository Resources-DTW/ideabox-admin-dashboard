import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import Login from "./pages/Login";
import Protected from "./components/Protected";
import Materials from "./pages/Materials";
import Subscriptions from "./pages/Subscriptions";
import Users from "./pages/Users";
import ActivityTaskManage from "./pages/ActivityTaskManage";
import Reports from "./pages/Reports";
import KpiConfig from "./pages/KpiConfig";
import ProfileSettings from "./pages/ProfileSettings";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#35A8DF",
          },
        }}
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Protected Component={App} />} />
          <Route
            path="/materials"
            element={<Protected Component={Materials} />}
          />
          <Route
            path="/subscriptions"
            element={<Protected Component={Subscriptions} />}
          />
          <Route path="/users" element={<Protected Component={Users} />} />
          <Route
            path="/activity"
            element={<Protected Component={ActivityTaskManage} />}
          />
          <Route path="/reports" element={<Protected Component={Reports} />} />
          <Route
            path="/kpiconfig"
            element={<Protected Component={KpiConfig} />}
          />
          <Route
            path="/settings"
            element={<Protected Component={ProfileSettings} />}
          />
        </Routes>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);
