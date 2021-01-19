import { ReactNode } from "react";

const Input: React.FC<{
  label: string;
  name: string;
  id: string;
  type: string;
  required?: boolean;
}> = ({ label, name, id, type, required = false }) => {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
};
export default Input;
