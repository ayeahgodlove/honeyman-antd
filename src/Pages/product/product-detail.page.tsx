import { Col, Row } from "antd";
import { useToken } from "hooks/token.hook";
import GeneralAppShell from "layout/app/general-app-shell";
import React, { useEffect } from "react";

const ProductDetailPage: React.FC = () => {
  const { token } = useToken();
  useEffect(() => {}, [token]);
  return (
    <GeneralAppShell>
      <h1 style={{ padding: 30 }}> Product Detail Page Page</h1>
   
    </GeneralAppShell>
  );
};

export default ProductDetailPage;
