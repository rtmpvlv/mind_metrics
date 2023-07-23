import React from "react";
import { Space } from "antd";
import { Progress } from "antd";
import styles from "./StatsItem.module.sass";

type TProps = {
  name: string;
  percent: number;
};

export const StatsItem = (props: TProps) => {
  const { name, percent } = props;
  return (
    <Space direction="vertical" className={styles.stats_item}>
      <div>{name}</div>
      <Progress percent={percent} steps={20} strokeColor={"#9fd2ed"} />
    </Space>
  );
};
