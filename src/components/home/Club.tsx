import { DeptCaptionType } from '@/types/type';
import Link from 'next/link';

type ClubProps = {
  id: number;
  name: string;
  tag: string;
  category: string;
};

const deptCaption: DeptCaptionType = {
  학술: 'bg-green-100 text-green-500',
  언행예술: 'bg-orange-100 text-orange-500',
  봉사: 'bg-yellow-100 text-yellow-500',
  전시창작: 'bg-purple-100 text-purple-500',
  종교: 'bg-sky-100 text-sky-500',
  체육: 'bg-pink-100 text-pink-500',
  사회연구: 'bg-cyan-100 text-cyan-500',
};

export default function Club({ id, name, tag, category }: ClubProps) {
  return (
    <li
      key={id}
      className="w-full rounded-lg bg-white shadow-sm transition-opacity hover:opacity-50"
    >
      <Link
        href={`/club/${id}`}
        className="flex w-full flex-row items-center justify-between px-5 py-5 text-center sm:flex-col-reverse sm:justify-center sm:py-8"
      >
        <div className="text-base font-semibold sm:text-lg">{name}</div>
        <div className="sm:mb-4">
          <span
            className={`mr-1 rounded-lg px-2 py-1 text-xs font-semibold shadow-sm md:text-sm ${deptCaption[category]}`}
          >
            {category}
          </span>
          <span className="ml-1 rounded-lg bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-500 shadow-sm md:text-sm">
            {tag}
          </span>
        </div>
      </Link>
    </li>
  );
}
