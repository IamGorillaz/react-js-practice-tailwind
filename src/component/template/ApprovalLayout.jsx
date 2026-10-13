import Sidebar from "../organism/Sidebar";

const ApprovalLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar  />

      <main className="flex-1 shadow-md">
        {children}
      </main>
    </div>
  );
}

export default ApprovalLayout;