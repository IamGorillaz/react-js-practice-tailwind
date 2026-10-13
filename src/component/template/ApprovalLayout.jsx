import Sidebar from "../organism/Sidebar";
import { Outlet } from "react-router-dom";

const ApprovalLayout = () => {
  return (
    <div className="flex min-h-screen bg-background">

      <main className="flex-1 shadow-md">
        <Outlet />
      </main>
    </div>
  );
};

export default ApprovalLayout;