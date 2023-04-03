import { Col, Row, Typography } from "antd";
import React from "react";

const { Title, Paragraph } = Typography;
export const WhyHoneyMan = () => {
  return (
    <Row align={"middle"} justify={"center"}>
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
    </Row>
  );
};
