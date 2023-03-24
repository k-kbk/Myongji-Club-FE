import { NoticeType } from '@/types/type';
import Link from 'next/link';

const dummy: Array<NoticeType> = [
  {
    id: 0,
    title: '숨은 정부지원금 찾기의 알림 서비스 종료 안내',
    date: '2022. 12. 13',
  },
  {
    id: 1,
    title: '환전 서비스 환율 우대 정책 변경 안내',
    date: '2022. 12. 09',
  },
  {
    id: 2,
    title: 'ATM 출금 수수료 지원 종료 안내',
    date: '2022. 12. 01',
  },
  {
    id: 3,
    title: '금융정보 이용약관 변경 안내',
    date: '2022. 11. 23',
  },
  {
    id: 4,
    title: '숨은 정부지원금 찾기의 알림 서비스 종료 안내',
    date: '2022. 11. 13',
  },
  {
    id: 5,
    title: '환전 서비스 환율 우대 정책 변경 안내',
    date: '2022. 11. 09',
  },
  {
    id: 6,
    title: '토스 금융정보 구독 서비스(금융팁) 이용약관 변경 안내',
    date: '2022. 11. 01',
  },
  {
    id: 7,
    title: 'ATM 출금 수수료 지원 종료 안내',
    date: '2022. 10. 23',
  },
];

export default function Index() {
  return (
    <>
      <h1 className="mt-30 mb-12 text-3xl font-bold md:mt-44 md:text-4.5xl">
        공지사항
      </h1>
      {dummy.length === 0 ? (
        <div className="py-[20vh] text-center text-lg font-medium text-gray-400 md:py-30 md:text-xl">
          공지사항이 없어요.
        </div>
      ) : (
        <ul className="mb-14">
          {dummy.map((item) => (
            <li key={item.id} className="border-b">
              <Link
                href={`/notice/${item.id}`}
                className="inline-block h-24 w-full py-4 transition-opacity hover:opacity-50"
              >
                <div className="block text-lg font-semibold sm:hidden">
                  {item.title.length > 24
                    ? `${item.title.substring(0, 24)}..`
                    : item.title}
                </div>
                <div className="hidden text-lg font-semibold sm:block">
                  {item.title}
                </div>
                <time className="font-medium text-gray-400">{item.date}</time>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
