import "./index.scss";
interface InputFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label?: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}
export default function InputField({
  value,
  onChange,
  placeholder,
  ...props
}: InputFieldProps) {
  return (
    <div className="input-field">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        type="text"
        {...props}
      />
    </div>
  );
}
