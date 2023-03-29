import FilterComponent from "components/product/filter.component";
import ProductList from "components/product/product-list.component";
import { useToken } from "hooks/token.hook";
import GeneralAppShell from "layout/app/general-app-shell";
import React, { useEffect } from "react";

const WelcomePage: React.FC = () => {
  const { token } = useToken();
  useEffect(() => {}, [token]);
  return (
    <GeneralAppShell>
      {/* search component */}
      <FilterComponent />
      {/* product list */}
      <ProductList />
    </GeneralAppShell>
  );
};

export default WelcomePage;
