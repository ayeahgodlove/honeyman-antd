import { Button, Card, Col, List } from "antd";
import { IProduct } from "models/product.model";
import React from "react";
import "./product.style.scss";
import { RiHeartFill } from "react-icons/ri";
import RaterComponent from "components/shared/rate.component";

const { Meta } = Card;
interface IProp {
  product: IProduct;
}
const ProductCard: React.FC<IProp> = ({ product }) => {
  return (
    <List.Item
      key={product.id}
      className="product-list-item"
      style={{ padding: "4px 8px" }}
    >
      <Card
        bordered={false}
        style={{ padding: 0 }}
        bodyStyle={{ paddingTop: 10, paddingBottom: 0 }}
        cover={<img alt={product.description} src={product.imagePath} />}
        className="product-card"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <Meta title={product.name} description={<RaterComponent />} />
            <p>
              <b>{"$" + product.price}</b>
            </p>
          </div>
         
        </div>
        <Button
          type="link"
          className="add-to-fav-btn"
          icon={<RiHeartFill size={30} className="add-to-fav" />}
        />
      </Card>
    </List.Item>
  );
};

export default ProductCard;
