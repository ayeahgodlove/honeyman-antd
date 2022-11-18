import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { ItemType } from "antd/lib/menu/hooks/useItems";

const LeftMenu = () => {

  const items: ItemType[] = [
    {
      label: (
        <Link to="/" style={{ padding: 0 }}>
          Home
        </Link>
      ),
      key: "home",
    }, // remember to pass the key prop
    {
      label: (
        <Link to="/blog" style={{ padding: 0 }}>
          Blog
        </Link>
      ),
      key: "blog",
    },
    {
      label: (
        <Link to="/contact-us" style={{ padding: 0 }}>
          Contact Us
        </Link>
      ),
      key: "contact-us",
    },
  ];
  return (
    <>
      <Menu items={items} mode={"horizontal"} />
    </>
  );
};

export default LeftMenu;
