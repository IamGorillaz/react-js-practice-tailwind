import NavItem from "../atom/NavItem";
import { LayoutDashboard, FileText, CheckCircle, Package,User2 } from "lucide-react";
function SidebarMenu() {
  return (
    <nav className="flex flex-col gap-2 " >
      <NavItem icon={LayoutDashboard}>Dashboard</NavItem>
      <NavItem icon={FileText}>Pengajuan</NavItem>
      <NavItem icon ={CheckCircle}>Approval</NavItem>
      <NavItem icon={Package}>Aset</NavItem>
      <NavItem icon={User2}>User</NavItem>
    </nav>

    
  );
}

export default SidebarMenu;
