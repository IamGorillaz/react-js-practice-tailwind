const Button = ({ variant, className, children }) => {
  return (
    <button variant={variant} className={className}>
      {children}
    </button>
  );
};

export default Button;
