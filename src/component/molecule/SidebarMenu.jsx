import NavItem from "../atom/NavItem";
import {
  LayoutDashboard,
  FileText,
  CheckCircle,
  Package,
  User2,
} from "lucide-react";

const SidebarMenu = () => {
  return (
    <nav className="flex flex-col gap-2">
      <NavItem to="/dashboard" icon={LayoutDashboard}>
        Dashboard
      </NavItem>

      <NavItem to="/submission/create" icon={FileText}>
        Pengajuan
      </NavItem>

      <NavItem to="/approval" icon={CheckCircle}>
        Approval
      </NavItem>

      <NavItem to="/assets" icon={Package}>
        Aset
      </NavItem>

      <NavItem to="/users" icon={User2}>
        User
      </NavItem>
    </nav>
  );
};

export default SidebarMenu;
