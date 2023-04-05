import { List } from "antd";
import React from "react";
import ProductCard from "./product-card.component";
import { Link } from "react-router-dom";
import slugify from "slugify";
import { useProduct } from "hooks/product.hook";

interface Props {
  slice?: boolean;
}
const ProductList: React.FC<Props> = ({ slice = false }) => {
  const { products } = useProduct();
  return (
    <List
      className="product-list"
      grid={{
        gutter: 0,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 4,
        xxl: 5,
      }}
      dataSource={slice ? products.slice(0, 4) : products}
      renderItem={(product) => (
        <Link
          key={product.id}
          to={`/products/${slugify(product.name, { lower: true })}`}
        >
          <ProductCard product={product} />
        </Link>
      )}
    />
  );
};

export default ProductList;
