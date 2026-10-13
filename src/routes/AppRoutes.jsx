import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../component/pages/Login/Login";
import CreateSubmission from "../component/pages/Submission/Submission";
import Approval from "../component/pages/Approval/Approval";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/submission/create" element={<CreateSubmission />} />
        <Route path="/approval" element={<Approval />} />
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
