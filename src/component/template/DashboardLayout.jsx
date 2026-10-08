import Sidebar from "../organism/Sidebar";

function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar  />

      <main className="flex-1 shadow-md">
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;