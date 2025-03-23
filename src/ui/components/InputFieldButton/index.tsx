import "./index.scss";
interface InputFieldButtonProps {
  label?: string;
  value: string;
  placeholder?: string;
  buttonText?: string;
  onSubmit?: () => void;
  onChange: (value: string) => void;
  inputRef?: React.RefObject<HTMLInputElement> | null;
}

export default function InputFieldButton({
  value,
  onChange,
  placeholder,
  buttonText,
  onSubmit,
  inputRef,
}: InputFieldButtonProps) {
  return (
    <div className="input-group-button">
      <input
        ref={inputRef}
        className="input"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      <button onClick={onSubmit} className="input-button">
        {buttonText}
      </button>
    </div>
  );
}
