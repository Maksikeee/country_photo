import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Header/Sidebar/Sidebar";
import { Main } from "./components/Main/Main";
import React, { useState } from "react";
import { Context } from "./store/Context";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "./styles/styles.css";

const { Sider, Content } = Layout;

function App() {
  const [current, setCurrent] = useState("1");
  const [mainTitle, setMainTitle] = useState("Angola");
  const [breadCrumb, setBreadCrumb] = useState([mainTitle]);
  const handleBreadCrumb = (historyValue) => {
    if (breadCrumb.length >= 5) {
      breadCrumb.pop();
      setBreadCrumb([historyValue, ...breadCrumb]);
    } else {
      setBreadCrumb([historyValue, ...breadCrumb]);
    }
  };
  const [open, setOpen] = useState(true);

  const showDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className="app__container">
      <Context.Provider
        value={{
          current,
          setCurrent,
          mainTitle,
          setMainTitle,
          breadCrumb,
          handleBreadCrumb,
          open,
          setOpen,
          showDrawer,
        }}
      >
        <Header />
        <Layout>
          <Sider
            className={open ? "hidden__side" : "side"}
            trigger={null}
            // collapsible
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
      </Context.Provider>
    </div>
  );
}

export default App;
