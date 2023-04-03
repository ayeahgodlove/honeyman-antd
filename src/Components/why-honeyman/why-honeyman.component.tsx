import { Col, Row, Typography } from "antd";
import React from "react";
import "./why-honeyman.style.scss";

const { Title, Paragraph } = Typography;
export const WhyHoneyMan = () => {
  return (
    <Row align={"middle"} justify={"center"} style={{ padding: 40 }}>
      <Col xs={24} md={24} lg={24}>
        <Title style={{ textAlign: "center", lineHeight: 1.5, fontSize: 40 }}>
          Why Honeyman?
        </Title>
        <Paragraph style={{ fontSize: 17, textAlign: "center" }}>
          <p>
            Getting access to different varieties of natural honey has never
            been easier in the entire history of mankind
          </p>
        </Paragraph>
      </Col>
      <Col span={24}>
        <div className="hexagon-container">
          <div className="hex"></div>
          <div className="hex"></div>
          <div className="hex"></div>
          <div className="hex"></div>
        </div>
      </Col>
    </Row>
  );
};
