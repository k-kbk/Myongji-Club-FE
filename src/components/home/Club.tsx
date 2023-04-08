import { DeptCaptionType } from '@/types/type';
import Link from 'next/link';

type ClubProps = {
  id: number;
  name: string;
  tag: string;
  category: string;
};

const deptCaption: DeptCaptionType = {
  학술: 'text-lime-500',
  언행예술: 'text-orange-500',
  봉사: 'text-yellow-500',
  전시창작: 'text-purple-500',
  종교: 'text-sky-500',
  체육: 'text-pink-500',
  사회연구: 'text-cyan-500',
};

export default function Club({ id, name, tag, category }: ClubProps) {
  return (
    <li
      key={id}
      className="w-full rounded-lg bg-white shadow-sm transition-opacity hover:opacity-50"
    >
      <Link
        href={`/club/${id}`}
        className="flex w-full flex-row items-center justify-between px-6 py-4 text-center sm:flex-col-reverse sm:justify-center sm:py-7"
      >
        <div className="flex flex-col items-start font-bold sm:items-center">
          <div className="mr-3 sm:mt-3 text-lg sm:mr-0 sm:text-xl">{name}</div>
          <div className="sm:mt-3 flex items-center">
            <span className={`text-sm ${deptCaption[category]}`}>
              {category}
            </span>
            <span className="mx-1.5 text-sm font-normal text-gray-300">|</span>
            <span className="text-sm text-gray-500">{tag}</span>
          </div>
        </div>
        <div className="rounded-lg bg-green-100 px-2 py-1 text-sm font-bold text-green-500">
          모집 중
        </div>
      </Link>
    </li>
  );
}
