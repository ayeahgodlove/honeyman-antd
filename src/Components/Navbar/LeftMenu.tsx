import React from "react";
import { Menu } from "antd";
import { GeneralMenuItemsWithoutIcons } from "./menu";

const LeftMenu = () => {
  return (
    <>
      <Menu className="left_navigation" items={GeneralMenuItemsWithoutIcons} mode={"horizontal"} />
    </>
  );
};

export default LeftMenu;
