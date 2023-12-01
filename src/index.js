import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";

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
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<App />} />
        </Routes>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);
