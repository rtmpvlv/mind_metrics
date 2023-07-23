import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import App from "./App";
import { THEME_CONFIG } from "./theme_config";
import "./index.css";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container as HTMLElement);

root.render(
  <React.StrictMode>
    <ConfigProvider theme={THEME_CONFIG}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
