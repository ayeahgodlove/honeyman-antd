import ProductList from "components/product/product-list.component";
import { useToken } from "hooks/token.hook";
import GeneralAppShell from "layout/app/general-app-shell";
import React, { useEffect } from "react";

const ProductPage: React.FC = () => {
  const { token } = useToken();
  useEffect(() => {}, [token]);
  return (
    <GeneralAppShell>
      <h1 style={{ padding: 30 }}> Product Page Page</h1>
      {/* product list */}
      <ProductList />
    </GeneralAppShell>
  );
};

export default ProductPage;
