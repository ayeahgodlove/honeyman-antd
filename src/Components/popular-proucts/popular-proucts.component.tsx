import { Col, Row, Typography } from "antd";
import ProductList from "components/product/product-list.component";
import React from "react";

const { Title, Paragraph } = Typography;
const PopularProducts: React.FC = () => {
  return (
    <Row justify={"center"} align={"middle"}>
      <Col xs={24} md={24} lg={24}>
        <Title style={{ textAlign: "center", lineHeight: 1.5, fontSize: 40, marginBottom: 0 }}>
          Popular Honey Products
        </Title>
        <Paragraph style={{ fontSize: 17, textAlign: "center" }}>
          <p>View a few honey products from our suppliers.</p>
        </Paragraph>
      </Col>
      <ProductList slice={true}/>
    </Row>
  );
};

export default PopularProducts;
