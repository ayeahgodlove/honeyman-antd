import React, { useState } from "react";
import { Menu, Divider } from "antd";
import { Link } from "react-router-dom";
import {
  BellOutlined,
  InfoCircleTwoTone,
  LogoutOutlined,
  TranslationOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Space } from "antd";

import { ItemType } from "antd/lib/menu/hooks/useItems";

const RightMenu = () => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = (key: string) => {
    setLanguage(key);
    console.log(language)
  };

  const items: ItemType[] = [
    { label: "Signin", key: "signin" }, // remember to pass the key prop
    {
      label: "",
      key: "notification",
      icon: (
        <Badge dot count={1} className="app-header__link">
          <BellOutlined className="app-header__icon" style={{ fontSize: 23 }} />
        </Badge>
      ),
      children: [
        {
          label: (
            <>
              <Link to="/">
                <Space size="middle" align="start">
                  <InfoCircleTwoTone
                    twoToneColor="#52c41a"
                    style={{ fontSize: 23 }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      flexWrap: "wrap",
                    }}
                  >
                    <h3>Notification title</h3>
                    <p style={{ flex: 1 }}>
                      Lorem ipsum dolor sit, amet consectetur
                    </p>
                  </div>
                </Space>
              </Link>
            </>
          ),
          key: "notification-key",
        },
        {
          label: <Link to="/">mark all as read</Link>,
          key: "mark-as-read",
        },
      ],
    }, // which is required
    {
      label: "",
      key: "language",
      icon: (
        <TranslationOutlined
          className="app-header__icon"
          style={{ fontSize: 23 }}
        />
      ),
      children: [
        {
          label: `English`,
          key: "en",
          icon: (
            <>
              <img
                src="/en.png"
                alt="English"
                style={{
                  maxWidth: "100%",
                  height: "18px",
                  marginRight: "8px",
                }}
              />
            </>
          ),
          onClick: () => toggleLanguage("en"),
        },
        {
          label: `French`,
          key: "fr",
          icon: (
            <>
              <img
                src="/fr.png"
                alt="English"
                style={{
                  maxWidth: "100%",
                  height: "18px",
                  marginRight: "8px",
                }}
              />
            </>
          ),
          onClick: () => toggleLanguage("fr"),
        },
      ],
    }, // which is required
    {
      label: "",
      key: "avatar",
      icon: (
        <Avatar
          style={{
            color: "#fff",
            backgroundColor: "#e84749",
            fontWeight: "bold",
            fontSize: 14
          }}
        >
          A.G
        </Avatar>
      ),
      children: [
        {
          label: <strong>Ayeah Godlove</strong>,
          key: "profile_name",
        },
        {
          label: (
            <>
              <p
                style={{
                  letterSpacing: 1.875,
                  marginBottom: 0,
                  color: "#2D3239",
                  fontSize: ".75rem",
                }}
              >
                {"My Profile".toUpperCase()}
              </p>
              <Divider style={{ margin: 2 }} />
            </>
          ),
          key: "profile_path",
          type: "group",
          children: [
            {
              label: (
                <Link
                  to="/profile/tab?=display"
                  // onClick={() => handleRoute('display')}
                >
                  Display
                </Link>
              ),
              key: "display",
            },
            {
              label: (
                <Link
                  to="/profile/tab?=auth"
                  // onClick={() => handleRoute('auth')}
                >
                  Login & Authentication
                </Link>
              ),
              key: "login-and-authentication",
            },
            {
              label: (
                <Link
                  to="/profile/tab?=settings"
                  // onClick={() => handleRoute('settings')}
                >
                  My Settings
                </Link>
              ),
              key: "my-settings",
            },
            {
              label: (
                <>
                  <Link
                    to="/welcome"
                    // onClick={() => signOut()}
                  >
                    Logout
                  </Link>
                </>
              ),
              key: "logout",
              icon: <LogoutOutlined />,
            },
          ],
        },
        {
          label: (
            <>
              <p
                style={{
                  letterSpacing: 1.875,
                  marginBottom: 0,
                  marginTop: 10,
                  color: "#2D3239",
                  fontSize: ".75rem",
                }}
              >
                {"Account".toUpperCase()}
              </p>
              <Divider style={{ margin: 2 }} />
            </>
          ),
          key: "account",
          type: "group",
        },
      ],
    }, // which is required
  ];

  return <Menu mode={"horizontal"} items={items} style={{ width: "100%" }} />;
};

export default RightMenu;
