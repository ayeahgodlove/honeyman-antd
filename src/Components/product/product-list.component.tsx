import { List } from "antd";
import { ProductData } from "mock-data/product.data";
import React from "react";
import ProductCard from "./product-card.component";
import { Link } from "react-router-dom";
import slugify from "slugify";

const ProductList: React.FC = () => {
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
      dataSource={ProductData}
      renderItem={(product) => (
        <Link
          key={product.id}
          to={`/products/${(slugify(product.name))}`}
        >
          <ProductCard product={product} />
        </Link>
      )}
    />
  );
};

export default ProductList;
