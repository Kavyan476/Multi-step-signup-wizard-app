import React from "react";

interface TextFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
}

export default function TextField({ label, name, type = "text", value, onChange, required, error }: TextFieldProps) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-medium mb-1">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? "border-red-500" : "border-gray-300"}`}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}
