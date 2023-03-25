import { List } from "antd";
import ProductCard from "components/product/product-card.component";
import ProductList from "components/product/product-list.component";
import { useToken } from "hooks/token.hook";
import GeneralAppShell from "layout/app/general-app-shell";
import { ProductData } from "mock-data/product.data";
import React, { useEffect } from "react";

const WelcomePage: React.FC = () => {
  const { token } = useToken();
  useEffect(() => {}, [token]);
  return (
    <GeneralAppShell>
      <h1 style={{ padding: 30 }}> Welcome Page Page</h1>
      {/* product list */}
      <ProductList />
    </GeneralAppShell>
  );
};

export default WelcomePage;

// <Row gutter={{ xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}>
// {ProductData.map((product) => (
//   <ProductCard product={product} />
// ))}
// </>
// </Row>
