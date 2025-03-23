import "./InputFieldSearch.scss";
interface InputFieldSearchProps {
  label?: string;
  value: string;
  placeholder?: string;
  onSubmit?: () => void;
  onChange: (value: string) => void;
  inputRef?: React.RefObject<HTMLInputElement> | null;
}

export default function InputFieldSearch({
  value,
  onChange,
  placeholder,
  onSubmit,
  inputRef,
}: InputFieldSearchProps) {
  return (
    <form action={onSubmit} className="input-group">
      <input
        ref={inputRef}
        className="input-field"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      <button type="submit" className="input-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </form>
  );
}
