import { Breadcrumb, Drawer, Layout, Menu, MenuProps } from "antd";
import React, { useState } from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Navbar from "Components/Navbar";
import "./AppShell.scss";

const { Sider, Content } = Layout;

const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

interface IProps {
  children: any;
}
const AppShell: React.FC<IProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
    console.log("Hello...", show);
  };

  const handleCollapse = () => {
    setCollapsed(!collapsed)
  }
  const onClose = () => {
    setShow(false);
  };

  return (
    <Layout className="app-shell-layout">
      <Navbar showMenuIcon handleShow={handleShow} />
      <Layout>
        <Sider
          width={200}
          className={`site-layout-background ${
            show ? "app-shell-sidebar_show" : "app-shell-sidebar_hide"
          }`}
          collapsible
          collapsed={collapsed}
          onCollapse={handleCollapse}
        >
          <Menu
            mode="inline"
            style={{ height: "100%", borderRight: 0 }}
            items={items2}
          />
        </Sider>
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
              items={items2}
            />
          </Sider>
        </Drawer>

        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
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

export default AppShell;
