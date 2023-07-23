import React from "react";
import { SwapOutlined } from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";
import styles from "./Sider.module.sass";

export const SiderComponent = () => {
  return (
    <Sider
      collapsedWidth={0}
      collapsible
      defaultCollapsed
      width={200}
      theme="dark"
      trigger={<SwapOutlined />}
      className={styles.sider}
    >
      Sider
    </Sider>
  );
};
