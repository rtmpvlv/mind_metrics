import React from "react";
import { Space, Image, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import styles from "./Content.module.sass";

export const ContentComponent = () => {  
  return (
    <Content className={styles.content}>
      <Space className={styles.container} direction="vertical">
        <Space className={styles.info_section}>
          <Image width={300} height={300} placeholder />
          <Space direction="vertical" className={styles.user_data_section}>
            <Space>
              <Typography.Title level={4} >
                Artem Pavlov
              </Typography.Title>
            </Space>
            <Space>
              <Typography.Text>Date of birth: 29.04.1989</Typography.Text>
            </Space>
            <Space>
              <Typography.Text>Your uid: 21314343141341</Typography.Text>
            </Space>
          </Space>
        </Space>
      </Space>
    </Content>
  );
};
