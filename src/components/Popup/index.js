import React from "react";
import { Menu } from "antd";
import { openOptionsPage } from "../../lib/brower";
import Example from "@/components/Example";
import AccountList from "../AccountList";
import "./index.scss";

export default function Popup({}) {
  return (
    <div style={{ width: "500px" }}>
      <AccountList />
      {/* <Example /> */}
      <Menu>
        <Menu.Item onClick={openOptionsPage}>打开配置页面</Menu.Item>
      </Menu>
    </div>
  );
}
