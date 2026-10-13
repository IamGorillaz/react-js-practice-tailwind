const Badge = ({ children, variant }) => {
  const variants = {
    pending: "bg-warning text-white",
    approved: "bg-success text-white",
    rejected: "bg-error text-white",
  };
  return (
    <span
      className={`px-3 py-1 rounded-lg text-xs font-medium ${variants[variant.toLowerCase()]}`}
    >
      {children}
    </span>
  );
};

export default Badge;
