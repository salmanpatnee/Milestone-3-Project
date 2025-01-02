import React from "react";

interface InputGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
  inputClassName?: string;
}

const InputGroup = React.forwardRef<HTMLInputElement, InputGroupProps>(
  ({ label, type = "text", placeholder = "", className = "", inputClassName = "", ...rest }, ref) => {
    return (
      <div className={`mb-4 ${className}`}>
        <label className="font-medium text-base mb-2 block text-gray-700">
          {label}
        </label>
        <input
          type={type}
          className={`rounded-lg h-[75px] border border-[#9F9F9F] w-full px-4 ${inputClassName}`}
          placeholder={placeholder}
          ref={ref} // Forward the ref to the input element
          {...rest} // Spread additional props (e.g., from `register`)
        />
      </div>
    );
  }
);

InputGroup.displayName = "InputGroup"; // Optional: Set display name for debugging

export default InputGroup;
