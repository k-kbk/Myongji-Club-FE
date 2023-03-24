import Image from 'next/image';

export default function SearchBar() {
  return (
    <div className="w-full sm:w-128">
      <div className="py-2 text-left text-sm font-medium text-gray-400 sm:text-base">
        동아리를 검색해보세요.
      </div>
      <form className="flex items-center justify-center rounded-lg bg-white text-lg font-semibold shadow-sm sm:text-xl">
        <input
          id="search"
          type="text"
          className="w-full rounded-lg py-3 pl-5 outline-none"
          spellCheck={false}
        />
        <button type="button">
          <Image
            src="search.svg"
            width={10}
            height={1}
            alt="search"
            className="h-12 px-3 py-2"
          />
        </button>
      </form>
    </div>
  );
}
