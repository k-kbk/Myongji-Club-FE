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
      <h1 className="mt-30 mb-12 text-2xl font-bold sm:mt-44 sm:text-3xl">
        공지사항
      </h1>
      {dummy.length === 0 ? (
        <div className="py-[20vh] text-center text-lg font-medium text-gray-400 md:py-30 md:text-xl">
          공지사항이 없어요.
        </div>
      ) : (
        <ul className="mb-8">
          {dummy.map((item) => (
            <li key={item.id} className="border-b">
              <Link
                href={`/notice/${item.id}`}
                className="inline-block h-[5.5rem] w-full py-4 transition-opacity hover:opacity-50 md:h-24"
              >
                <div className="block text-base font-semibold sm:hidden sm:text-lg">
                  {item.title.length > 25
                    ? `${item.title.substring(0, 25)}..`
                    : item.title}
                </div>
                <div className="hidden text-base font-semibold sm:block sm:text-lg">
                  {item.title}
                </div>
                <time className="text-sm font-medium text-gray-400 md:text-base">
                  {item.date}
                </time>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
