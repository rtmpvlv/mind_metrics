import React from "react";
import { Layout } from "antd";
import {
  SiderComponent,
  HeaderComponent,
  ContentComponent,
  StatsComponent,
} from "./containers";

const App = () => {
  return (
    <Layout>
      <SiderComponent />
      <Layout>
        <HeaderComponent />
        <ContentComponent />
        <StatsComponent />
      </Layout>
    </Layout>
  );
};

export default App;
