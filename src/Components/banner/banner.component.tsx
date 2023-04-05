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
import "./banner.style.scss";

export const Banner: React.FC = () => {
  const { Title, Paragraph } = Typography;
  return (
    <Card
      bordered={false}
      style={{ borderRadius: 0, paddingTop: 30, paddingBottom: 40 }}
    >
     
      <Row justify={"center"} align={"middle"} gutter={[8, 8]}>
        <Col
          xs={12}
          sm={12}
          md={8}
          lg={8}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className=""
        >
          <div className="gallery">
            <img src="./images/image-9.jpg" alt="image 1" />

            <img src="./images/image-2.jpg" alt="image 2" />

            <img src="./images/image-8.jpg" alt="image 3" />

            <img src="./images/image-10.jpg" alt="image 4" />

            <img src="./images/image-5.jpg" alt="image 5" />

            <img src="./images/image-6.jpg" alt="image 6" />

            <img src="./images/image-7.jpg" alt="image 7" />
          </div>
        </Col>
        <Col xs={20} md={13} lg={13} className="banner__text">
          <Title>
            <span style={{ color: "#f77908" }}>
              One-stop natural honey market
            </span>{" "}
            for all your honey and honey products, buy, and sell quality honey
            and honey products
          </Title>
          <Paragraph style={{ fontSize: 17, textAlign: "center" }}>
            <p>
              An online one-stop store for honey lovers and honey vendors to buy
              and sell various honey varieties and products made from honey
            </p>
          </Paragraph>
          <Space
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
                style={{ paddingLeft: 25, paddingRight: 25, fontSize: 18 }}
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
