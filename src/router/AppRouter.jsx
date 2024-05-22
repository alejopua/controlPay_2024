import { Navigate, Route, Routes } from "react-router-dom";
import { ControlPayRoutes } from "@/controlPay/routes/ControlPayRoutes";
import { AuthRoutes } from "@/auth/routes/AuthRoutes";
import { useCheckAuth } from "@/hooks/useCheckAuth";
import { Loader } from "@/components/ui/Loader";

export const AppRouter = () => {
  const { status } = useCheckAuth();

  if (status === "checking") return <Loader />;

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<ControlPayRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
