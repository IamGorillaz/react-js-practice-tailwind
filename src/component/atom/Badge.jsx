const Badge = ({ children, variant = "pending" }) => {
  const variants = {
    pending: "bg-warning text-white",
    approved: "bg-success text-white",
    rejected: "bg-error text-white",
  };

  const key = variant ? String(variant).toLowerCase() : "pending";

  return (
    <span
      className={`px-3 py-1 rounded-lg text-xs font-medium ${variants[key] || "bg-gray-200 text-gray-700"}`}
    >
      {children}
    </span>
  );
};

export default Badge;
