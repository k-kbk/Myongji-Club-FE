import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';

type SearchBarProps = {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
};

export default function SearchBar({ value, onChange }: SearchBarProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value);
  }

  return (
    <div className="mx-2 mt-6 mb-3 w-full sm:mx-0 sm:w-128 md:mt-7">
      <div className="flex items-center justify-center rounded-lg bg-white text-lg font-semibold shadow-sm sm:text-xl">
        <input
          id="search"
          type="text"
          className="spl-4 w-full rounded-lg py-2 pl-4 outline-none sm:py-3 sm:pl-5"
          value={value}
          spellCheck={false}
          onChange={handleChange}
        />
        <Image
          src="search.svg"
          width={1}
          height={1}
          alt="search"
          className="h-10 px-3 py-2 sm:h-12"
          priority
        />
      </div>
    </div>
  );
}
