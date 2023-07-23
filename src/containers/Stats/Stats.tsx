import React from "react";
import { Space, Typography } from "antd";
import { StatsItem } from "src/components";
import styles from "./Stats.module.sass";

const MIND_METRICS = [
  {
    name: "Внимательность",
    percent: 80,
  },
  {
    name: "Концентрация",
    percent: 55,
  },
  {
    name: "Память",
    percent: 65,
  },
  {
    name: "Аналитические способности",
    percent: 25,
  },
];

export const StatsComponent = () => {
  return (
    <Space direction="vertical" className={styles.container}>
      <Typography.Title level={4}>Your metrics</Typography.Title>
      <div className={styles.metrics}>
        {MIND_METRICS.map((metric) => (
          <StatsItem {...metric} />
        ))}
      </div>
    </Space>
  );
};
