import { Breadcrumb, Drawer, Layout, Menu, MenuProps } from "antd";
import React, { useEffect, useState } from "react";
import { FaUsersCog } from "react-icons/fa";
import {
  MdOutlinePointOfSale,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import Navbar from "components/navbar";
import "./AppShell.scss";
import { Link } from "react-router-dom";

import { ConfigProvider, theme } from "antd";
import { useTheme } from "hooks/shared/theme.hook";
const { defaultAlgorithm, darkAlgorithm } = theme;

const { Sider, Content } = Layout;

const items2: MenuProps["items"] = [
  {
    label: (
      <Link to="/categories" style={{ padding: 0 }}>
        Categories
      </Link>
    ),
    key: "categories",
    icon: <BiCategoryAlt size={21} color="#f77908" />,
  },
  {
    label: (
      <Link to="/products" style={{ padding: 0 }}>
        Products
      </Link>
    ),
    key: "products",
    icon: <MdOutlineProductionQuantityLimits size={21} color="#f77908" />,
  },
  {
    label: (
      <Link to="/orders" style={{ padding: 0 }}>
        Orders
      </Link>
    ),
    key: "orders",
    icon: <MdOutlinePointOfSale size={21} color="#f77908" />,
  },
  {
    label: (
      <Link to="/users" style={{ padding: 0 }}>
        Users
      </Link>
    ),
    key: "users",
    icon: <FaUsersCog size={21} color="#f77908" />,
  }, // remember to pass the key prop
];
interface IProps {
  children: any;
}
const AppShell: React.FC<IProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [show, setShow] = useState(false);
  const { isDarkMode } = useTheme()

  const handleShow = () => {
    setShow(true);
  };

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };
  const onClose = () => {
    setShow(false);
  };

  useEffect(() => {}, [])
  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
      }}
    >
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
    </ConfigProvider>
  );
};

export default AppShell;
