
import { NavLink } from "react-router-dom";

const NavItem = ({ icon: Icon, children, to }) => {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
          isActive
            ? "bg-primary-light text-primary"
            : "text-text hover:bg-primary-light"
        }`
      }
    >
      {Icon && <Icon size={20} />}
      <span>{children}</span>
    </NavLink>
  );
};

export default NavItem;
