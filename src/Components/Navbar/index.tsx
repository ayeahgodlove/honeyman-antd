import { MenuOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import LeftMenu from "./left-menu";
import RightMenu from "./right-menu";


interface IProps {
  showMenuIcon?: boolean;
  handleShow?: () => void;
}
const Navbar: React.FC<IProps> = ({ showMenuIcon = false, handleShow }) => {
  // const [visible, setVisible] = useState(false);

  // const onClose = () => {
  //   setVisible(false);
  // };

  return (
    <nav className="menuBar">
      <div className="logo">
        <Link to="/" style={{ marginLeft: 1 }}>
          <img
            src="/honey-man.png"
            height={65}
            width={65}
            alt="honeyman logo"
          />
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

        {showMenuIcon && (
          <Button
            type="default"
            icon={<MenuOutlined size={25} style={{ fontSize: "18px" }} />}
            onClick={handleShow}
            className="app-shell-baricon"
          />
        )}
        {/* <Drawer
          title="Basic Drawer"
          placement="right"
          closable={true}
          onClose={onClose}
          open={visible}
        >
          <LeftMenu />
          <RightMenu />
        </Drawer> */}
      </div>
    </nav>
  );
};

export default Navbar;
