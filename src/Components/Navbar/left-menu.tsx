import React from "react";
import { Menu } from "antd";
import { GeneralMenuItemsWithoutIcons } from "./menu";
import { useTheme } from "hooks/shared/theme.hook";

const LeftMenu = () => {
  const { isDarkMode } = useTheme();
  return (
    <>
      <Menu
        theme={isDarkMode ? "dark" : "light"}
        className="left_navigation"
        items={GeneralMenuItemsWithoutIcons}
        mode={"horizontal"}
        style={{ background: "inherit"}}
      />
    </>
  );
};

export default LeftMenu;
