import FilterComponent from "components/product/filter.component";
import ProductList from "components/product/product-list.component";
import GeneralAppShell from "layout/app/general-app-shell";
import React, { useEffect } from "react";

const ProductPage: React.FC = () => {
  return (
    <GeneralAppShell>
      <h1 style={{ padding: 30 }}> Product Page Page</h1>
      {/* search component */}
      <FilterComponent />
      {/* product list */}
      <ProductList/>
    </GeneralAppShell>
  );
};

export default ProductPage;
