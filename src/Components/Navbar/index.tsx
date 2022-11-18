import {
  MenuOutlined,
} from "@ant-design/icons";
import { Button, Drawer } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";

interface IProps {
  showMenuIcon?: boolean;
  handleShow?: () => void;
}
const Navbar: React.FC<IProps> = ({ showMenuIcon = false, handleShow }) => {
  const [visible, setVisible] = useState(false);

  const onClose = () => {
    setVisible(false);
  };

  return (
    <nav className="menuBar">
      <div className="logo">
        {showMenuIcon && (
          <Button
            type="default"
            icon={<MenuOutlined size={25} style={{ fontSize: "18px" }} />}
            onClick={handleShow}
            className="app-shell-baricon"
          />
        )}
        <Link to="" style={{ marginLeft: 1 }}>
          logo
        </Link>
      </div>
      <div className="menuCon">
        {/* other things */}
        <div className="leftMenu">
          <LeftMenu />
        </div>
        <div className="rightMenu">
          <RightMenu />
        </div>

        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={true}
          onClose={onClose}
          open={visible}
        >
          <LeftMenu />
          <RightMenu />
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
