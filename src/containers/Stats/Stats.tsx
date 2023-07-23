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
    percent: 95,
  },
  {
    name: "Вербальные способности",
    percent: 0,
  },
  {
    name: "Решение пространственных задач",
    percent: 50,
  },
  {
    name: "Скорость обработки информации",
    percent: 0,
  },
  {
    name: "Реакция на изменения",
    percent: 0,
  },
];

export const StatsComponent = () => {
  return (
    <Space direction="vertical" size="large" className={styles.container}>
      <Typography.Title level={3}>Ваши метрики</Typography.Title>
      <div className={styles.metrics}>
        {MIND_METRICS.map((metric) => (
          <StatsItem {...metric} />
        ))}
      </div>
    </Space>
  );
};
