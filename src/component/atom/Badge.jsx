const Badge = ({ children, variant }) => {
  const variants = {
    pending: "bg-yellow-100 text-white",
    approved: "bg-green-100 text-white",
    rejected: "bg-red-100 text-white",
  };
  return (
    <span className="px-3 py-1 rounded-lg text-xs font-medium">{children}</span>
  );
};

export default Badge;
