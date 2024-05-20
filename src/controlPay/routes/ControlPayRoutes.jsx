import { Navigate, Route, Routes } from "react-router-dom";
import { ControlPayPage } from "../pages/ControlPayPage";

export const ControlPayRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ControlPayPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
