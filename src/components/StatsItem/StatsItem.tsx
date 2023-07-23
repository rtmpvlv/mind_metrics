import React from "react";
import { Button, Space } from "antd";
import { Progress } from "antd";
import styles from "./StatsItem.module.sass";

type TProps = {
  name: string;
  percent: number;
};

export const StatsItem = (props: TProps) => {
  const { name, percent } = props;

  const strokeColor = percent > 90 ? "#87d068" : "#9fe7ed";

  return (
    <Space direction="vertical" className={styles.container}>
      <div>{name}</div>
      <Space size="middle">
        <Progress percent={percent} steps={20} strokeColor={strokeColor} />
        <Button block>Пройти испытание</Button>
      </Space>
    </Space>
  );
};
