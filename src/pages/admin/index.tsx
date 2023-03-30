import Link from 'next/link';

export default function Index() {
  return (
    <>
      <div className="mt-30 sm:mt-44">
        <h1 className="text-1.5xl font-bold sm:text-2.5xl">
          안녕하세요, <span className="text-blue-500">총동아리연합회</span>
          님!
        </h1>
      </div>
      <div className="mb-2 mt-12 text-sm font-semibold text-gray-400 sm:mt-16 md:text-base">
        메뉴 바로가기
      </div>
      <div className="mb-8 flex flex-col justify-between text-lg font-bold sm:flex-row sm:text-2xl">
        <Link
          href="/admin/club"
          className="mb-3 w-full rounded-lg bg-white py-5 px-5 shadow-sm transition-opacity hover:opacity-50 sm:mb-0 sm:w-[32%] sm:px-8 sm:py-8"
        >
          동아리 관리하기
          <p className="mt-2 text-sm font-medium leading-tight text-gray-500 sm:mt-4 sm:text-base sm:leading-snug">
            신규 동아리를 등록하거나,
          </p>
          <p className="text-sm font-medium leading-tight text-gray-500 sm:text-base sm:leading-snug">
            기존의 동아리를 삭제해요.
          </p>
        </Link>
        <Link
          href="/admin/notice"
          className="mb-3 w-full rounded-lg bg-white py-5 px-5 shadow-sm transition-opacity hover:opacity-50 sm:mb-0 sm:w-[32%] sm:px-8 sm:py-8"
        >
          OOO 공지사항 작성하기
          <p className="mt-2 text-sm font-medium leading-tight text-gray-500 sm:mt-4 sm:text-base sm:leading-snug">
            OOO 사용자들에게 전달할
          </p>
          <p className="text-sm font-medium leading-tight text-gray-500 sm:text-base sm:leading-snug">
            공지사항을 작성해요.
          </p>
        </Link>
        <Link
          href="/admin/notice"
          className="mb-3 w-full rounded-lg bg-white py-5 px-5 shadow-sm transition-opacity hover:opacity-50 sm:mb-0 sm:w-[32%] sm:px-8 sm:py-8"
        >
          동아리 공지사항 작성하기
          <p className="mt-2 text-sm font-medium leading-tight text-gray-500 sm:mt-4 sm:text-base sm:leading-snug">
            동아리(혹은 동아리 회장)에게 전달할
          </p>
          <p className="text-sm font-medium leading-tight text-gray-500 sm:text-base sm:leading-snug">
            공지사항을 작성해요.
          </p>
        </Link>
      </div>
    </>
  );
}
