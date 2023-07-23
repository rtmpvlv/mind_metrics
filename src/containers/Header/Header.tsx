import React from "react";
import { Header } from "antd/es/layout/layout";
import { Button, Space } from "antd";
import styles from "./Header.module.sass";

export const HeaderComponent = () => {
  return (
    <Header className={styles.header}>
      <Space size="large">
        <Button type="primary">Login</Button>
        <Button>Sign Up</Button>
      </Space>
    </Header>
  );
};
