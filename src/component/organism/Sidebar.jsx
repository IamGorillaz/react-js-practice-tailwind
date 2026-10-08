import Logo from "../atom/Logo";
import Profile from "../molecule/Profile";
import SidebarMenu from "../molecule/SidebarMenu";

const Sidebar = () => {
  return (
    <aside className="flex min-h-screen w-64 flex-col bg-white px-6 py-8 shadow-lg border border-r-gray-100">
      <Logo/>

      <div className="mt-12">
        <SidebarMenu/>
      </div>
      
      <div className="mt-auto">
        <Profile/>
      </div>
    </aside>
  );
};

export default Sidebar