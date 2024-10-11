import React, { lazy, Suspense } from "react";
import WebPro from "./WebPro";
import { useLocation } from "react-router-dom";
import Loader from "./pages/adminPanel/admin-panel src/common/Loader";

const AdminPanel = lazy(() => import("./pages/adminPanel/AdminPanel"));

export default function MainLayout() {
  const location = useLocation();

  // Check if the current path starts with "/admin"
  const isAdminPath = location.pathname.startsWith("/admin");



  return (
    <div>
      {/* <BrowserRouter></BrowserRouter> */}
      {isAdminPath ? (
        <Suspense fallback={<Loader />}>
          <AdminPanel />
        </Suspense>
      ) : (
        <WebPro />
      )}
    </div>
  );
}
