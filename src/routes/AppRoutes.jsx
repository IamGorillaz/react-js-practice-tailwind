import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import Login from "../component/pages/Login/Login";
import CreateSubmission from "../component/pages/Submission/Submission";
import Approval from "../component/pages/Approval/Approval";
import Sidebar from "../component/organism/Sidebar";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          element={
            <div className="flex min-h-screen bg-background">
              <Sidebar />

              <main className="min-w-0 flex-1">
                <Outlet />
              </main>
            </div>
          }
        >
          <Route
            path="/submission/create"
            element={<CreateSubmission />}
          />

          <Route
            path="/approval"
            element={<Approval />}
          />
        </Route>

        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;