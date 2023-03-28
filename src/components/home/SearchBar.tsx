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
    <div className="mx-2 mt-4 mb-4 w-full sm:mx-0 sm:mt-6 sm:w-128 md:mb-2">
      <div className="flex items-center justify-center rounded-lg bg-white text-base font-semibold shadow-sm sm:text-lg">
        <input
          id="search"
          type="text"
          className="w-full rounded-lg py-2 pl-4 outline-none sm:py-3 sm:pl-5"
          value={value}
          spellCheck={false}
          onChange={handleChange}
        />
        <Image
          src="/search.svg"
          width={50}
          height={50}
          quality={100}
          alt="search"
          className="p-3.5 sm:p-3"
          priority
        />
      </div>
    </div>
  );
}
