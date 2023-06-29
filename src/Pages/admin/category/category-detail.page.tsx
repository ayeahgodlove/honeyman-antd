import { useAuth } from "hooks/auth/auth.hook";
import AppShell from "layout/app/app-shell";
import React, { useEffect } from "react";

const AdminCategoryDetailPage: React.FC = () => {
  const { isLoading } = useAuth();
  useEffect(() => {}, [isLoading]);
  return (
    <AppShell>
      <h1 style={{ padding: 30 }}> Category Page Page</h1>
    </AppShell>
  );
};

export default AdminCategoryDetailPage;
