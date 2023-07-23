import React from "react";
import { Layout } from "antd";
import {
  HeaderComponent,
  ContentComponent,
  StatsComponent,
} from "./containers";

const App = () => {
  return (
    <Layout>
      <HeaderComponent />
      <ContentComponent />
      <StatsComponent />
    </Layout>
  );
};

export default App;
