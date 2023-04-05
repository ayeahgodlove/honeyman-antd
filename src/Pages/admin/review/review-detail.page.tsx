import { useToken } from "hooks/token.hook";
import AppShell from "layout/app/app-shell";
import React, { useEffect } from "react";

const AdminReviewDetailPage: React.FC = () => {
  const { token } = useToken();
  useEffect(() => {}, [token]);
  return (
    <AppShell>
      <h1 style={{ padding: 30 }}> Review Page Page</h1>
    </AppShell>
  );
};

export default AdminReviewDetailPage;
