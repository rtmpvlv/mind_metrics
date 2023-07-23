import React from "react";
import { Space, Image, Typography } from "antd";
import styles from "./Content.module.sass";

export const ContentComponent = () => {
  return (
    <Space className={styles.container} direction="vertical">
      <Space className={styles.info_section}>
        <Image width={200} height={200} placeholder />
        <Space direction="vertical" className={styles.user_data_section}>
          <Space>
            <Typography.Title level={4}>Артем Павлов</Typography.Title>
          </Space>
          <Space>
            <Typography.Text>Дата рождения: 29.04.1989</Typography.Text>
          </Space>
          <Space>
            <Typography.Text>Ваша ссылка: 21314343141341</Typography.Text>
          </Space>
        </Space>
      </Space>
    </Space>
  );
};
