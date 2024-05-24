import { Navigate, Route, Routes } from "react-router-dom";
import { ControlPayRoutes } from "@/controlPay/routes/ControlPayRoutes";
import { AuthRoutes } from "@/auth/routes/AuthRoutes";
import { useCheckAuth } from "@/hooks/useCheckAuth";
import { Loader } from "@/components/ui/Loader";

// Router principal de la aplicación, encargado de redirigir las rutas.
export const AppRouter = () => {
  const { status } = useCheckAuth();

  if (status === "checking") return <Loader />;

  return (
    <Routes>
      {/* Configuración de rutas privadas y publicas de acuerdo al status*/}
      {status === "authenticated" ? (
        <Route path="/*" element={<ControlPayRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
