import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { useState } from "react";
import { Context } from "./store/Context";
import "antd/dist/antd.css";

import "./styles/styles.css";

function App() {
  const [current, setCurrent] = useState("1");
  const [mainTitle, setMainTitle] = useState("Angola");
  return (
    <>
      <Context.Provider
        value={{ current, setCurrent, mainTitle, setMainTitle }}
      >
        <Header />
        <Main />
      </Context.Provider>
    </>
  );
}

export default App;
