import { DeptCaptionType } from '@/types/type';
import Link from 'next/link';

type ClubProps = {
  id: number;
  name: string;
  tag: string;
  category: string;
};

const deptCaption: DeptCaptionType = {
  학술: 'bg-green-100 text-green-600',
  언행예술: 'bg-orange-100 text-orange-600',
  봉사: 'bg-yellow-100 text-yellow-600',
  전시창작: 'bg-purple-100 text-purple-600',
  종교: 'bg-blue-100 text-blue-600',
  체육: 'bg-pink-100 text-pink-600',
  사회연구: 'bg-cyan-100 text-cyan-600',
};

export default function Club({ id, name, tag, category }: ClubProps) {
  return (
    <li
      key={id}
      className="flex w-full flex-col rounded-lg bg-white shadow-sm transition-opacity hover:opacity-50"
    >
      <Link
        href={`/club/${id}`}
        className="inline-block w-full py-6 text-center md:py-7"
      >
        <span
          className={`mr-1 rounded-lg px-2 py-1 text-xs font-semibold shadow-sm md:text-sm ${deptCaption[category]}`}
        >
          {category}
        </span>
        <span className="ml-1 rounded-lg bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-500 shadow-sm md:text-sm">
          {tag}
        </span>
        <div className="mt-4 text-base font-semibold md:text-lg">{name}</div>
      </Link>
    </li>
  );
}
