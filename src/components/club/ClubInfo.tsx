export default function ClubInfo() {
  return (
    <div className="mt-4 rounded-lg border border-gray-100 bg-gray-50 px-6 py-4 text-base font-semibold sm:mt-6 sm:px-8 sm:py-6 sm:text-lg">
      <div className="sm:mb-2">
        <span className="mb-1 inline-block w-52 sm:mb-0">
          <span className="mr-3 text-gray-400">회장</span>
          <span className="">박수환</span>
        </span>
        <span className="mb-1 inline-block sm:mb-0">
          <span className="mr-3 text-gray-400">연락처</span>
          <span>010-0807-4328</span>
        </span>
      </div>
      <div className="sm:mb-2">
        <span className="mb-1 inline-block w-52 sm:mb-0">
          <span className="mr-3 text-gray-400">동아리방</span>
          <span>S4018</span>
        </span>
        <span className="mb-1 inline-block sm:mb-0">
          <span className="mr-3 text-gray-400">정기모임</span>
          <span>매주 수요일 18시</span>
        </span>
      </div>
      <div>
        <span className="mr-3 text-gray-400">모집기간</span>
        <span>3월 13일 ~ 3월 31일</span>
      </div>
    </div>
  );
}
