import Input from "../atom/Input";
import Label from "../atom/Label";

const FormField = ({
  label,
  type = "text",
  placeholder,
  className,
  ...props
}) => {
  return (
    <div>
      <Label>{label}</Label>

      <Input
        type={type}
        placeholder={placeholder}
        className={className}
        {...props}
      />
    </div>
  );
};

export default FormField;
