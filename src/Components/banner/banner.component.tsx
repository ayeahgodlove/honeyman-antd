import React from "react";
import {
  Button,
  Card,
  Col,
  ConfigProvider,
  Row,
  Space,
  Typography,
} from "antd";

export const Banner: React.FC = () => {
  const { Title, Paragraph, } = Typography;
  return (
    <Card bordered={false} style={{ borderRadius: 0, padding: 70}}>
      <Row justify={"center"} align={"middle"}>
        <Col xs={20} md={12} lg={15}>
          <Title style={{ textAlign: "center", lineHeight: 1.5, fontSize: 40 }}>
            <span style={{ color: "#f77908" }}>
              One-stop natural honey market
            </span>{" "}
            for all your honey and honey products, buy, and sell quality honey
            and honey products
          </Title>
          <Paragraph style={{ fontSize: 17, textAlign: "center" }}>
            An online one-stop store for honey lovers and honey vendors to buy
            and sell various honey varieties and products made from honey
          </Paragraph>
        </Col>
        <Col
          span={24}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Space>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#f77908",
                },
              }}
            >
              <Button
                type="primary"
                size="large"
                style={{ paddingLeft: 25, paddingRight: 25, fontSize: 18}}
              >
                Get Started
              </Button>
            </ConfigProvider>
            <Button type="link" size="large">
              Learn more
            </Button>
          </Space>
        </Col>
      </Row>
    </Card>
  );
};
