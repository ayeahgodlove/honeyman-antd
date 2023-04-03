import { Drawer, Layout, Menu } from "antd";
import React, { useState } from "react";
import { ConfigProvider, theme, FloatButton } from "antd";

import Navbar from "components/navbar";
import "./AppShell.scss";
import { GeneralMenuItemsWithIcons } from "components/navbar/menu";
import { useTheme } from "hooks/shared/theme.hook";
import { FiArrowUp } from "react-icons/fi";
import useWindowSize from "hooks/shared/window-resize.hook";
import TweenOne from "rc-tween-one";

const { Sider, Content } = Layout;
const { defaultAlgorithm, darkAlgorithm } = theme;

interface IProps {
  children: any;
}
const GeneralAppShell: React.FC<IProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [show, setShow] = useState(false);
  const { isDarkMode } = useTheme();
  const { height } = useWindowSize();
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
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <Layout className="app-shell-layout">
        <TweenOne
          animation={{
            x: 280,
            y: 300,
            scale: 0.7,
            duration: 7000,
            repeat: 0,
            opacity: 0.6,
          }}
          style={{
            transform: "translateX(-80px)",
            overflowX: "hidden",
            position: "absolute",
            zIndex: 10,
          }}
          // className="code-box-shape"
        >
          <img src="/honeybee.png" height={50} width={50} />
        </TweenOne>

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

          <Layout style={{ padding: 0 }}>
            <TweenOne
              animation={{
                x: 280,
                y: 250,
                repeat: 0, // demo 演示需要
                duration: 5000,
                opacity: 0.6,
              }}
              style={{
                transform: "translateX(-80px)",
                overflowX: "hidden",
                position: "absolute",
                zIndex: 10,
              }}
            >
              <img src="/honeybee.png" height={50} width={50} />
            </TweenOne>
            <Content
              className="site-layout-background"
              style={{
                padding: 0,
                margin: 0,
                minHeight: 280,
                background: "transparent",
              }}
            >
              {children}
            </Content>
            <FloatButton.BackTop icon={<FiArrowUp />} visibilityHeight={400} />
          </Layout>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default GeneralAppShell;
