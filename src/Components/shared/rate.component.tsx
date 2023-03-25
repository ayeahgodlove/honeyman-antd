import { Rate } from "antd";
import React, { useState } from "react";

const desc = ["terrible 😱", "bad 👎", "normal 👌", "good 👍", "wonderful 👌"];
const RaterComponent: React.FC = () => {
  const [value, setValue] = useState(3);
  console.log("value: ", value);
  return (
    <>
      <span>
        <Rate tooltips={desc} style={{ color: "#f77908"}} onChange={setValue} value={value} />
        {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""}
      </span>
    </>
  );
};

export default RaterComponent;
