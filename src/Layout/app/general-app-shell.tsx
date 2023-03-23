import { Drawer, Layout, Menu } from "antd";
import React, { useState } from "react";

import Navbar from "components/navbar";
import "./AppShell.scss";
import { GeneralMenuItemsWithIcons } from "components/navbar/menu";

const { Sider, Content } = Layout;


interface IProps {
  children: any;
}
const GeneralAppShell: React.FC<IProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };
  const onClose = () => {
    setShow(false);
  };

  return (
    <Layout className="app-shell-layout">
      <Navbar showMenuIcon handleShow={handleShow} />
      <Layout>
        <Drawer
          title="HoneyMan"
          placement="left"
          closable={true}
          onClose={onClose}
          open={show}
          width={200}
        >
          <Sider
            width={200}
            className={`site-layout-background ${
              show ? "app-shell-sidebar_show" : "app-shell-sidebar_hide"
            }`}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
              items={GeneralMenuItemsWithIcons}
            />
          </Sider>
        </Drawer>

        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default GeneralAppShell;
