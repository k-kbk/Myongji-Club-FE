import { Dispatch, SetStateAction } from 'react';

type InputProps = {
  label: string;
  id: string;
  type: 'text' | 'password';
  value: string;
  onClick: Dispatch<SetStateAction<string>>;
};

export default function Input({ label, id, type, value, onClick }: InputProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onClick(event.target.value);
  }

  return (
    <div className="mb-3">
      <label
        htmlFor={id}
        className="flex flex-col text-sm font-semibold text-gray-600 sm:text-base"
      >
        {label}
        <input
          id={id}
          type={type}
          spellCheck={false}
          value={value}
          className="mt-1 rounded-lg border border-gray-200 px-3 py-2 text-base font-medium text-gray-800 outline-none sm:text-lg"
          onChange={handleChange}
        />
      </label>
    </div>
  );
}
