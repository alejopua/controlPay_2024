import { AuthRoutes } from "@/auth/routes/AuthRoutes";
import { ControlPayRoutes } from "@/controlPay/routes/ControlPayRoutes";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Routes>
      {/* Login and register routes */}
      <Route path="/auth/*" element={<AuthRoutes />} />

      {/* Control Pay */}
      <Route path="/*" element={<ControlPayRoutes />} />
    </Routes>
  );
};
