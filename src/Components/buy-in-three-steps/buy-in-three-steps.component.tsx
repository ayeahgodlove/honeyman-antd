import {
  LoadingOutlined,
  ShoppingCartOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Col, Row, Steps, Typography } from "antd";
import useWindowSize from "hooks/shared/window-resize.hook";
import React from "react";
import { MdOutlinePayments } from "react-icons/md";

const { Title, Paragraph } = Typography;
const BuyInThreeSteps: React.FC = () => {
    const {width} = useWindowSize();
  return (
    <>
      <Row align={"middle"} justify={"center"} style={{ padding: 40 }}>
        <Col xs={24} md={24} lg={24}>
          <Title style={{ textAlign: "center", lineHeight: 1.5, fontSize: 40, marginBottom: 0 }}>
            <span style={{ color: "#f77908" }}>Buy Items</span> in 3 Easy Steps
          </Title>
          <Paragraph style={{ fontSize: 17, textAlign: "center" }}>
            <p>Our platform makes buying easy with these simple steps.</p>
          </Paragraph>
        </Col>
        <Col xs={24} md={24} lg={20}>
          <Steps
          direction={width < 768 ? "vertical" : "horizontal"}
            items={[
              {
                title: (
                  <>
                    <Title level={5} color="#261f13">
                      Login
                    </Title>
                  </>
                ),
                status: "finish",
                icon: <UserOutlined style={{ color: "#f77908"}} />,
                description: (
                  <>
                    <Paragraph>
                      <p>
                        Simply sigin using either Gmail, Facebook, Apple, and
                        Twitter.
                      </p>
                    </Paragraph>
                  </>
                ),
              },
              {
                title: (
                  <>
                    <Title level={5} color="#261f13">
                      View Honey Products
                    </Title>
                  </>
                ),
                status: "finish",
                icon: <SolutionOutlined  style={{ color: "#f77908"}}  />,
                description: (
                  <>
                    <Paragraph>
                      <p>
                        View correct details of the products you want to buy.
                      </p>
                    </Paragraph>
                  </>
                ),
              },
              {
                title: (
                  <>
                    <Title level={5} color="#261f13">
                      Place Order
                    </Title>
                  </>
                ),
                status: "finish",
                icon: <ShoppingCartOutlined style={{ color: "#f77908"}}  />,
                description: (
                  <>
                    <Paragraph>
                      <p>
                        Add product or many product items to your cart, and
                        place your order
                      </p>
                    </Paragraph>
                  </>
                ),
              },
              {
                title: (
                  <>
                    <Title level={5} color="#261f13">
                      Pay
                    </Title>
                  </>
                ),
                status: "finish",
                icon: <MdOutlinePayments style={{ color: "#f77908"}}  />,
                description: (
                  <>
                    <Paragraph>
                      <p>Pay using MTN, Orange Money or Online Card payments</p>
                    </Paragraph>
                  </>
                ),
              },
              {
                title: (
                  <>
                    <Title level={5} color="#261f13">
                      Done
                    </Title>
                  </>
                ),
                status: "finish",
                icon: <SmileOutlined style={{ color: "#f77908"}}  />,
                description: (
                  <>
                    <Paragraph>
                      <p>Receive your product in time, and remain happy</p>
                    </Paragraph>
                  </>
                ),
              },
            ]}
          />
        </Col>
      </Row>
    </>
  );
};

export default BuyInThreeSteps;
