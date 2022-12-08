import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Header/Sidebar/Sidebar";
import { Main } from "./components/Main/Main";
import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "./styles/styles.css";
import "./styles/media.css";
import { countryPhotos } from "./store/CountryPhotos";
import { observer } from "mobx-react-lite";

const { Sider, Content } = Layout;

const App = observer(() => {
  const { open } = countryPhotos;

  return (
    <div className="app__container">
      <Header />
      <Layout>
        <Sider
          className={open ? "hidden__side" : "side"}
          trigger={null}
          collapsed={open}
          style={{
            background: "rgba(255, 255, 255, 0.3)",
          }}
        >
          <Sidebar />
        </Sider>

        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              minHeight: 280,
            }}
          >
            <Main />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
});

export default App;
