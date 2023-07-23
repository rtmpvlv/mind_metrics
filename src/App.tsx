import React from "react";
import { Layout } from "antd";
import { HeaderComponent, ContentComponent } from "./containers";
import styles from "./App.module.sass";

const App = () => {
  return (
    <Layout>
      <HeaderComponent />
      <ContentComponent />
    </Layout>
  );
};

export default App;
